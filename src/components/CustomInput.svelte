<script>
  import {createEventDispatcher} from 'svelte'
  const dispatch = createEventDispatcher()
  export let suffix
  export let type = 'default'
  export let value = ''
  const onChange = (event) => {
    if (type === 'mini' && event.target.value.length > 2) {
      value = event.target.value.slice(0, 2)
      return
    } else if (event.target.value.length > 20) {
      value = event.target.value.slice(0, 20)
    } else {
      value = event.target.value
    }
  }

  const fixScroll = () => {
    const target = document.getElementById('guarantee-wrapper') || document.body
    target.scrollBy({
      top: document.querySelector(".questionary-wrapper").getBoundingClientRect().top
    })
  }
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
    font-size: 11px;
    height: 11px;
    line-height: 11px;
    padding: 0 4px;
  }
</style>

{#if type === 'mini'}
  <div class="input-wrapper mini">
    <input class="customInput" bind:value={value} on:input={onChange} type="number" on:blur={fixScroll}/>
  </div>
{:else}
  <div class="input-wrapper">
    <input class="customInput" bind:value={value} on:input={onChange} on:blur={fixScroll}/>
    <span class="suffix" on:click={() => dispatch('suffixClick')}>{suffix || `${value.length}/20`}</span>
  </div>
{/if}