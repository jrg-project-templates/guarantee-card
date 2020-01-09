<script>
  import background from './images/questionary-background.svg'
  import title from './images/questionary-title.svg'
  import finger from './images/finger.svg'
  import buttonImage from './images/button.svg'
  import buttonActiveImage from './images/button-active.svg'
  import typeMachine from './images/questionary-type.svg'
  import CustomInput from './components/CustomInput.svelte'

  import {fly} from 'svelte/transition'

  const defaultFinalTargetList = [
    '我会赚到一个亿',
    '我会环球世界',
    '我会跟马云一起看春晚',
    '我会有一套临海别墅',
    '我会跟我的男神在一起',
    '我会跟我的女神在一起',
    '我会登上喜马拉雅山',
    '我会拥有自己的游乐场',
    '我会拥有一个城堡',
    '我会登上月球',
    '我会获得诺贝尔编程奖',
    '我会破敲代码最快的吉尼斯纪录',
    '男神会每天叫我起床',
    '女神会每天叫我起床',
    '我会瘦成一道闪电',
    '我会白成一道光',
    '我会长高20厘米',
    '我会尝遍山珍海味还不会胖',
    '我会咸鱼翻身',
    '我会成为新桓结衣的老公',
    '我会成为一代码神（经）',
    '我会实现去年这时候立过的所有Flag',
    '我会有个对象，就算比我丑也行啊',
    '我会暴富',
    '我卡上不缺钱，晚上不失眠',
    '我不要996',
    '我天天在被窝里撸猫',
    '我会成为一个有钱人',
    '我会成为一个成功的人'
  ]

  let targetInfo = {
    smallTargetMonth: '',
    smallTarget: '',
    bigTargetMonth: '',
    bigTarget: '',
    finalTarget: ''
  }
  let dateVisible = false
  let fingerVisible = false
  let dateContent = ''
  $: typeMachineActive = (() => {
    let count = 0
    for (let [_, value] of Object.entries(targetInfo)) {
      !value && (count++)
    }
    return count === 0 && randomCounter === 0
  })()
  $: if (typeMachineActive === false) {
    dateVisible = false
    dateContent = ''
  }
  $: if (dateVisible === true) {
    let count = 0
    const date = getFormatDate()
    const typeWord = () => setTimeout(() => {
      if (count > date.length) {fingerVisible = true ; return}
      else {
        count ++
        dateContent = date.slice(0, count + 1)
        typeWord()
      }
    }, 200)
    typeWord()
  } else {
    fingerVisible = false
  }

  export let reportImage = ''


  let randomCounter = 0
  const getRandomFinalTarget = () => {
    setTimeout(() => {
      if (randomCounter > 15) {
        randomCounter = 0
        return
      } else {
        randomCounter += 1
        targetInfo.finalTarget = defaultFinalTargetList[Math.round(Math.random() * defaultFinalTargetList.length)] || defaultFinalTargetList[0]
        getRandomFinalTarget()
      }
    }, randomCounter > 11 ? (randomCounter - 11) * 100 : 100)
  }
  const getFormatDate = () => {
    const currentTime = new Date()
    return currentTime.getFullYear() + '.' + (currentTime.getMonth() + 1) + '.' + currentTime.getDate()
  }

  let clickLimited = false
  const submitTargets = () => {
    if (typeMachineActive && !clickLimited) {
      dateVisible = true
      clickLimited = true
      setTimeout(() => clickLimited = false, 3000)
      let url = new URL(location.hostname === 'localhost' ? 'http://localhost:5002/guarantee_card' : `https://${location.hostname}/guarantee_card`)
      Object.keys(targetInfo).forEach(key => url.searchParams.append(key, targetInfo[key]))
      fetch(url, {credentials: 'include'}).then(r => r.json()).then((data) => reportImage = data.imgUrl)
    }
  }
</script>

<style type="text/scss" lang="scss">
  div.questionary-wrapper {
    height: 100vh;
    overflow: hidden;
    position: relative;
    .background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }
    .content-wrapper {
      position: relative;
      padding: 12%;
      z-index: 1;
      height: 50px;
      div.block {
        color: #333;
        font-family: "PingFang SC";
        margin: 20px 0;
        h3 {
          font-size: 16px;
          margin-bottom: 12px;
        }
        p {
          margin-bottom: 12px;
          letter-spacing: .1em;
        }
      }
    }
    .action-wrapper {
      position: absolute;
      top: 85vh;
      left: 0;
      right: 0;
      z-index: 2;
      transition: transform 1s ease-in-out;
      &.active {
        transform: translateY(calc(-100% + 15vh));
      }
      :global(span.date) {
        position: absolute;
        top: 3%;
        right: 70vw;
        color: #000000;
        font-size: 10px;
        letter-spacing: .15em;
        font-family: Couriertxt;
      }
      img.finger {
        width: 80px;
        position: absolute;
        z-index: 2;
        top: -10%;
        right: 15%;
      }
      button.submit-button {
        outline: none;
        border: none;
        display: inline-block;
        background: transparent;
        position: absolute;
        bottom: 2vh;
        left: 0;
        right: 0;
        margin: 0 auto;
        > img.active {
          display: none;
        }
        &:active {
          > img.default {display: none;}
          > img.active {display: inline-block;}
        }
      }
    }
  }
</style>

<div class="questionary-wrapper">
  <img src="{background}" alt="背景图" class="background">
  <div class="content-wrapper">
    <img src="{title}" alt="标题"/>
    <div class="block">
      <h3>先定一个3个月内的小目标</h3>
      <p>你要在
        <CustomInput type="mini" bind:value={targetInfo.smallTargetMonth}/>
        个月内完成
      </p>
      <CustomInput bind:value={targetInfo.smallTarget}/>
    </div>
    <div class="block">
      <h3>再定一个半年到一年的大目标</h3>
      <p>你要在
        <CustomInput type="mini" bind:value={targetInfo.bigTargetMonth}/>
        个月内完成
      </p>
      <CustomInput bind:value={targetInfo.bigTarget}/>
    </div>
    <div class="block">
      <h3>最后定一个终极目标</h3>
      <CustomInput suffix="随机" on:suffixClick={getRandomFinalTarget} bind:value={targetInfo.finalTarget}/>
    </div>
  </div>
  <div class="action-wrapper {typeMachineActive && 'active' || ''}">
    <img src="{typeMachine}" class="type-machine" alt="打字机"/>
      {#if dateVisible && typeMachineActive}
        <span class="date">{dateContent}</span>
      {/if}
      {#if fingerVisible && typeMachineActive}
        <img src="{finger}" class="finger" in:fly="{{ y: 10, duration: 500 }}" alt="手印"/>
      {/if}
    <button class="submit-button" on:click={submitTargets}>
      <img src="{buttonImage}" class="default" alt="按钮"/>
      <img src="{buttonActiveImage}" class="active" alt="按钮按下"/>
    </button>
  </div>
</div>