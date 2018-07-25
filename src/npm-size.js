// @flow

export default () => {
  const sections = document.querySelectorAll('section')

  const loading = document.createElement('section')
  loading.classList.add('Loading')
  loading.classList.add('Loading--fadein')

  const img = document.createElement('img')
  img.setAttribute('src', 'Double Ring.svg')
  img.onerror = function () {
    this.onerror = null
    this.src = 'image.png'
  }

  loading.appendChild(img)
  document.body.appendChild(loading)

  const animEnd = () => {
    if (sections) {
      sections.forEach((section) => {
        section.remove()
      })
      const app = document.createElement('div')
      app.id = 'app'
      document.body.appendChild(app)
    }
    import(/* webpackChunkName: "npm_size" */ './npm_size').then((module) => {
      module.default(() => {
        loading.classList.add('Loading--fadeout')
        loading.addEventListener('animationend', () => {
          loading.remove()
        })
      })
    })
    loading.removeEventListener('animationend', animEnd)
  }

  loading.addEventListener('animationend', animEnd)
}
