<script>
  import {fly} from 'svelte/transition'
  export let keyword = ''
  export let showSummary = false, showSummaryEnd = false
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
      .keyword {
        padding: 3vh 5vw;
        color: var(--highlight);
        font-size: 34px;
        text-align: center;
      }
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
    <div class="keyword">{keyword}</div>
  </div>
    {#if showSummary}
      <div class="row summary" in:fly="{{ y: 10, duration: 500 }}" on:introend="{() => showSummaryEnd = true}">一句话总结</div>
    {/if}
</div>
