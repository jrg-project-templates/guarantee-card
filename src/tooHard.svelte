<script>
  import {createEventDispatcher} from 'svelte'
  const dispatch = createEventDispatcher()
  let wordList = [
    `<span>我</span>`,
    `<span>太</span>`,
    `<span>难</span>`,
    `<span>了</span>`,
    `<span>！！！</span>`,
    `<span class="so">所以！</span>`
  ]
  let currentWordIndex = 0
  const changeWord = () => {
    setTimeout(() => {
      if (currentWordIndex < wordList.length - 1) {
        currentWordIndex++
        changeWord()
      } else {
        animationStart && setTimeout(() => dispatch('animationEnd'), 400)
      }
    }, 400)
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
    }
    :global(span.so) {
      font-size: 48px;
    }
  }
</style>

<div class="too-hard">
    {@html wordList[currentWordIndex]}
</div>