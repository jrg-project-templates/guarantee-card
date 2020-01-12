<script>
  import loading from './images/loading.svg'
  import repeat from './images/repeat-report.svg'
  import {onMount} from 'svelte'
  onMount(() => {
    const target = document.getElementById('guarantee-wrapper') || document.body
    target.scrollTo({top: 0})
  })

  export let reportSrc, visible = false
</script>

<style type="text/scss" lang="scss">
  div.report {
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
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
      transform: scaleY(10);
      width: 100%;
    }
  }
</style>

<div class="report {reportSrc && 'load-report' || ''} {!visible && 'hidden' || ''}">
    {#if reportSrc}
      <img src="{reportSrc}" alt="我的Flag报告" class="report"/>
      <img src="{repeat}" class="report-repeat"/>
    {:else}
      <div class="loading-tip">
        <img src="{loading}" alt="加载中" class="loading"/>
        <h3>正在生成我的Flag报告...</h3>
      </div>
    {/if}
</div>
