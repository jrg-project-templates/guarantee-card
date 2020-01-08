<script>
  import background from './images/questionary-background.svg'
  import title from './images/questionary-title.svg'
  import finger from './images/finger.svg'
  import buttonImage from './images/button.svg'
  import buttonActiveImage from './images/button-active.svg'
  import typeMachine from './images/questionary-type.svg'
  import CustomInput from './components/CustomInput.svelte'

  const getFormatDate = () => {
    const currentTime = new Date()
    return currentTime.getFullYear() + '.' + (currentTime.getMonth() + 1) + '.' + currentTime.getDate()
  }

  let typeMachineActive = false;
  setTimeout(() => typeMachineActive = true, 10000)
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
      top: 90vh;
      left: 0;
      right: 0;
      z-index: 2;
      transition: transform 1s ease-in-out;
      &.active {
        transform: translateY(calc(-100% + 10vh));
      }
      span.date {
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
      <p>你要在<CustomInput type="mini" CustomSuffix="5/20" />个月内完成 </p>
      <CustomInput/>
    </div>
    <div class="block">
      <h3>再定一个半年到一年的大目标</h3>
      <p>你要在<CustomInput type="mini" CustomSuffix="5/20" />个月内完成 </p>
      <CustomInput/>
    </div>
    <div class="block">
      <h3>最后定一个终极目标</h3>
      <CustomInput/>
    </div>
  </div>
  <div class="action-wrapper {typeMachineActive && 'active' || ''}">
    <img src="{typeMachine}" class="type-machine"/>
    <span class="date">{getFormatDate()}</span>
    <img src="{finger}" class="finger"/>
    <button class="submit-button">
      <img src="{buttonImage}" class="default"/>
      <img src="{buttonActiveImage}" class="active"/>
    </button>
  </div>
</div>