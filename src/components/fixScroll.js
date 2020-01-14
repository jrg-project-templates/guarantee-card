
export const isApple = () => {
  let ua = navigator.userAgent.toLowerCase()
  return (ua.indexOf('iphone') > 0 || ua.indexOf('ipad') > 0)
}

export default () => {
  const target = document.getElementById('guarantee-wrapper') || document.body
  if (isApple()) {
    document.scrollTop = document.scrollTop
    window.scroll(0, -1)
    document.body.scroll(0, -1)
    target.scroll(0, -1)
    setTimeout(() => {
      document.scrollTop = document.scrollTop
      window.scroll(0, 1)
      document.body.scroll(0, 1)
      target.scroll(0, 1)
      target.scrollBy({
        top: document.querySelector('.questionary-wrapper').getBoundingClientRect().top + 1
      })
    }, 1)
  } else {
    target.scrollBy({
      top: document.querySelector('.questionary-wrapper').getBoundingClientRect().top + 1
    })
  }
}