export default () => {
  const target = document.getElementById('guarantee-wrapper') || document.body
  let ua = navigator.userAgent.toLowerCase()
  if (ua.indexOf('iphone') > 0 || ua.indexOf('ipad') > 0) {
    setTimeout(() => {
      document.scrollTop = document.scrollTop
      target.scrollBy({
        top: document.querySelector('.questionary-wrapper').getBoundingClientRect().top
      })
    }, 100)
  } else {
    target.scrollBy({
      top: document.querySelector('.questionary-wrapper').getBoundingClientRect().top
    })
  }

}