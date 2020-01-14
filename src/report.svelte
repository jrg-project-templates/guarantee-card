<script>
  import loading from './images/loading.svg'
  import repeat from './images/repeat-report.svg'
  import {onMount} from 'svelte'

  onMount(() => {
    const target = document.getElementById('guarantee-wrapper') || document.body
    target.scrollTo({top: 0})
  })

  export let reportSrc, visible = false, reportHeight = '100vh', active = false
</script>

<style type="text/scss" lang="scss">
  div.report {
    display: flex;
    justify-content: center;
    position: relative;
    &.load-report {
      display: block;
    }
    &.hidden {
      visibility: hidden;
      height: 0;
    }
    img {
      display: block;
    }
    div.loading-tip {
      align-self: center;
      text-align: center;
      .loading {
        width: 50px;
        margin-bottom: 30px;
        display: inline-block;
      }
    }
    :global(.report) {
      position: relative;
      z-index: 1;
    }
    :global(.report-repeat) {
      position: relative;
      z-index: 0;
      top: -5px;
      left: 0;
      right: 0;
      transform: scale(1, 10);
      width: 100%;
      pointer-events: none;
    }
    :global(div.tips) {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      padding: 10px;
      text-align: center;
      letter-spacing: 0.2em;
      font-family: "PingFang SC";
      color: white;
      z-index: 2;
      background: rgba(0, 0, 0, 0.6);
    }
  }
</style>

<div class="report {reportSrc && 'load-report' || ''} {!visible && 'hidden' || ''}"
     style="height: {reportHeight}; overflow: {reportHeight === '100vh' ? 'hidden' : 'scroll'}">
    {#if reportSrc}
      <img src="{reportSrc}" alt="我的Flag报告" class="report"/>
      <img src="{repeat}" class="report-repeat" alt="repeat"/>
        {#if active}
          <div class="tips">长按保存图片</div>
        {/if}
    {:else}
      <div class="loading-tip">
        <img src="{loading}" alt="加载中" class="loading"/>
        <h3>正在生成我的Flag报告...</h3>
      </div>
    {/if}
</div>
