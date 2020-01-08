<script>

  export let type = 'default'
  export let CustomSuffix = '11/50'
</script>

<style type="text/scss" lang="scss">
  .input-wrapper {
    display: flex;
    align-items: center;
    background: rgba(214, 181, 118, 0.2);
    padding: 8px 2px 8px 10px;
    border-radius: 4px;
    color: #333;
    &.mini {
      padding: 4px 2px;
      display: inline-block;
      justify-content: center;
      margin: 0 4px 0 2px;
      > .customInput {
        width: 1.5em;
        display: inline-block;
        text-align: center;
      }
    }
  }
  .customInput {
    flex: 1;
    color: inherit;
    font-size: inherit;
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
  }
  span.suffix {
    letter-spacing: .15em;
    color: #C52E19;
    font-size: 10px;
    height: 10px;
    line-height: 10px;
    padding: 0 4px;
  }
</style>

{#if type === 'mini'}
  <div class="input-wrapper mini">
    <input class="customInput" value="12"/>
  </div>
{:else}
  <div class="input-wrapper">
    <input class="customInput" value="12"/>
      {#if CustomSuffix}
        <span class="suffix">{CustomSuffix}</span>
      {/if}
  </div>
{/if}