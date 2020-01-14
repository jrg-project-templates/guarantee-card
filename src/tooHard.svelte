<script>
  import {createEventDispatcher} from 'svelte'

  const dispatch = createEventDispatcher()
  let wordList = [
    `<span>我</span>`,
    `<span>太</span>`,
    `<span>难</span>`,
    `<span>了</span>`,
    `<span>！！！</span>`,
    `<span class="col">我太难了 ！</span>`,
    `<span class="so">所以！</span>`
  ]
  let currentWordIndex = 0
  const changeWord = () => {
    setTimeout(() => {
      if (currentWordIndex < wordList.length - 1) {
        currentWordIndex++
        changeWord()
      } else {
        animationStart && setTimeout(() => dispatch('animationEnd'), 300)
      }
    }, 300)
  }

  export let animationStart
  $: if (animationStart) {
    currentWordIndex = 0
    setTimeout(changeWord, 600)
  }
</script>

<style type="text/scss" lang="scss">
  div.too-hard {
    display: flex;
    flex-direction: column;
    align-items: center;
    :global(span) {
      display: flex;
      align-items: center;
      font-size: 330px;
      height: 100vh;
      position: relative;
      top: -5vh;
    }
    :global(.col) {
      width: 1em;
      font-size: 60px;
      top: 0;
      bottom: 0;
      margin: auto;
      flex-wrap: wrap;
      text-align: center;
    }
    :global(span.so) {
      font-size: 48px;
    }
  }
</style>

<div class="too-hard">
    {@html wordList[currentWordIndex]}
</div>