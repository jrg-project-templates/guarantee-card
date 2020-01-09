<script lang="ts">
  import FirstPage from './firstPage.svelte'
  import Toohard from './tooHard.svelte'
  import LetsStart from './letsStart.svelte'
  import Report from './report.svelte'
  import Questionary from './questionary.svelte'

  let reportImage = ''
</script>

<style type="text/scss" lang="scss">
  div.wrapper {
    max-width: 100vw;
    font-family: Xique;
    letter-spacing: 0.2em;
    color: var(--default-color);
  }
  :global(div.wrapper > div) {
    box-shadow: 0 0 0 3px pink inset;
  }
</style>

<div class="wrapper">
  <FirstPage/>
  <Toohard/>
  <LetsStart/>
  <Questionary bind:reportImage={reportImage}/>
  <Report reportSrc={reportImage}/>
</div>
