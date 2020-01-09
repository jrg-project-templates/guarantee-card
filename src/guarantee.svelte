<script lang="ts">
  import FirstPage from './firstPage.svelte'
  import Toohard from './tooHard.svelte'
  import LetsStart from './letsStart.svelte'
  import Report from './report.svelte'
  import Questionary from './questionary.svelte'
  import _ from 'lodash'
  import {onMount} from 'svelte'

  let touchStartAt = 0
  let currentPageIndex = 0
  let scrollBehavior = 'pending'
  $: touchMinLength = currentPageIndex === 0 ? 0 : 50
  onMount(() => {
    document.ontouchstart = (e) => {
      touchStartAt = e.targetTouches[0].clientY
    }
    document.ontouchmove = (e) => {
      let scrollLength = e.changedTouches[0].clientY - touchStartAt
      if (scrollLength > touchMinLength) {
        scrollBehavior = 'scrollUp'
      } else if (scrollLength < -touchMinLength) {
        scrollBehavior = 'scrollDown'
      } else {
        scrollBehavior = 'waiting'
      }
      if (currentPageIndex === 0 && firstPageConfig.keywordChange(scrollBehavior)) {
        if (!firstPageConfig.showSummary) firstPageConfig.showSummary = true
      }
    }
    document.ontouchend = (e) => {
      if (scrollBehavior === 'scrollDown') {
        if (currentPageIndex === 0 && !firstPageConfig.showSummaryEnd || currentPageIndex === 4) return
        if (currentPageIndex === 3 && !questionaryConfig.canScrollDown) return
        else nextPage()
      } else if (scrollBehavior === 'scrollUp') {
        if (currentPageIndex === 0) return
        if (currentPageIndex === 1) {firstPageConfig = {...firstPageConfig, showSummary: false, showSummaryEnd: false}}
        prePage()
      }
      scrollBehavior = 'waiting'
    }
  })

  const _keywordChange = (scrollBehavior: string) => {
    if (scrollBehavior === 'scrollDown') {
      if (firstPageConfig.keywordIndex < firstPageConfig.keywords.length - 1) {
        firstPageConfig.keywordIndex += 1
        return false
      } else return true
    } else if (scrollBehavior === 'scrollUp') {
      if (firstPageConfig.keywordIndex > 0) firstPageConfig.keywordIndex -= 1
      return false
    }
  }

  const pageSelector = ['.first-page', '.too-hard', '.let-us-start', '.questionary-wrapper', '.report']
  const nextPage = () => {
    currentPageIndex += 1
    window.scrollBy({
      top: document.querySelector(pageSelector[currentPageIndex]).getBoundingClientRect().top,
      behavior: 'smooth'
    })
  }

  const prePage = () => {
    currentPageIndex -= 1
    window.scrollBy({
      top: document.querySelector(pageSelector[currentPageIndex]).getBoundingClientRect().top,
      behavior: 'smooth'
    })
  }

  let firstPageConfig = {
    keywordChange: _.throttle(_keywordChange, 100),
    showSummary: false,
    showSummaryEnd: false,
    keywordIndex: 0,
    keywords: [
      '996',
      '好嗨哟，感觉人生已经到达了高潮',
      '盘他！',
      '鸡你太美',
      '猪肉涨价',
      '我不要你觉得，我要我觉得',
      '你是什么垃圾',
      '道路千万条，安全第一条',
      '我命由我不由天',
      '5G元年',
      '有钱人的生活，就是这么朴实无华且枯燥',
      'OMG！买它买它买它！',
      '不忘初心',
      '柠檬精',
      '断舍离',
      '不忘初心，继续前行',
      '咱也不知道，咱也不敢问',
      '奥利给！'
    ]
  }
  let questionaryConfig = {
    reportImage: '',
    canScrollDown: false
  }
  $: showToohardAnimation = currentPageIndex === 1
</script>

<style type="text/scss" lang="scss">
  div.wrapper {
    max-width: 100vw;
    font-family: Xique;
    letter-spacing: 0.2em;
    color: var(--default-color);
  }
</style>

<div class="wrapper">
  <FirstPage keyword="{firstPageConfig.keywords[firstPageConfig.keywordIndex]}"
             bind:showSummary={firstPageConfig.showSummary} bind:showSummaryEnd={firstPageConfig.showSummaryEnd}/>
  <Toohard animationStart={showToohardAnimation} on:animationEnd={nextPage}/>
  <LetsStart/>
  <Questionary bind:reportImage={questionaryConfig.reportImage}
               bind:canScrollDown={questionaryConfig.canScrollDown}
               on:nextPage={nextPage}/>
  <Report reportSrc={questionaryConfig.reportImage}/>
</div>
