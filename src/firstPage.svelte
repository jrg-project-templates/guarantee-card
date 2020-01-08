<script>
  import {onMount} from 'svelte'

  onMount(() => {

  })
  let keywords = [
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
</script>

<style type="text/scss" lang="scss">
  div.first-page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    .row {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .row.date {
      padding: 8vh 0;
      > div:first-child { font-size: 62px; }
      > span:last-child { font-size: 34px; }
      span.year {
        display: inline-block;
        vertical-align: sub;
        margin-right: 6px;
        transform-origin: center;
        transform: rotate(180deg);
        color: var(--highlight);
      }
    }
    .row.experience {
      font-size: 20px;
      padding-bottom: 5vh;
      span + span {
        margin-top: 10px;
      }
    }
    #scroller-wrapper {
      flex: 1;
    }
    .row.summary {
      font-size: 34px;
      padding: 3vh 0 8vh;
    }
    @for $i from 0 to 10 {
      .animated-text:nth-of-type(#{$i + 1}) {
        animation: twinkling 1s ease-in-out;
        animation-fill-mode: both;
        animation-delay: #{$i * 0.5}s;
      }
    }
    @keyframes -global-twinkling {
      0% { opacity: 0;}
      100% { opacity: 1;}
    }
  }
</style>

<div class="first-page">
  <div class="row date animated-text">
    <div><span class="year">2019</span><span>年</span></div>
    <span>已经过去了</span>
  </div>
  <div class="row experience animated-text">
    <span>在这一年我们</span>
    <span>经历了</span>
  </div>
  <div id="scroller-wrapper" class="animated-text">
      {#each keywords as keyword, i}
        <span class="keyword">{keyword}</span>
      {/each}
  </div>
  <div class="row summary animated-text">一句话总结</div>
</div>
