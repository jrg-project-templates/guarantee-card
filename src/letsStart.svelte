<script>
  import imageStruggle from './images/struggle.svg'
  import nextIcon from './images/next.svg'
</script>

<style type="text/scss" lang="scss">
  div.let-us-start {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5vh;
    div.year {
      font-size: 96px;
      display: flex;
      align-items: flex-end;
      color: var(--highlight);
      padding: 0 0 5vh;
      letter-spacing: .1em;
      span + span {
        font-size: 88px;
        margin-left: 8px;
      }
    }
    .title {
      font-size: 32px;
      letter-spacing: 0.275em;
    }
    .title + .title {
      margin: 10px 0 25px;
    }
    :global(svg:first-child) {
      width: 100%;
    }
    .content {
      margin-top: -50px;
      font-size: 24px;
      letter-spacing: .2em;
    }
    .content + .content {
      margin-top: 10px;
    }
    img.struggle {
      width: 80%;
    }
    img.next-page {
      margin-top: 20px;
      width: 16px;
      animation: shake 1s ease-in-out infinite;
    }
  }
</style>

<div class="let-us-start">
  <div class="year">
    <span>2020</span>
    <span>年</span>
  </div>
  <div class="title">我们要扬帆起航</div>
  <div class="title">重新出发！</div>
  <img src={imageStruggle} alt="奋斗！奥利给！" class="struggle"/>
  <div class="content">现在就来定下你的</div>
  <div class="content">2020年保证书吧！</div>
  <img src="{nextIcon}" alt="下一页" class="next-page"/>
</div>