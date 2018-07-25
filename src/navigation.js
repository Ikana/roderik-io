// @flow
import npmSize from './npm-size'

const npmButton = document.querySelector('#npm-size')

const changeToSize = () => {
  window.history.pushState('npm-size', 'NPM size', 'npm-size')
  npmSize()
}

if (npmButton) {
  npmButton.addEventListener('click', changeToSize)
}

function defaultCase () {
  const loading = document.createElement('section')
  loading.classList.add('Loading')
  loading.classList.add('Loading--fadein')

  const img = document.createElement('img')
  img.setAttribute('src', 'Double Ring.svg')
  img.onerror = `this.onerror=null; this.src='image.png'`
  const h1 = document.createElement('h1')
  h1.innerHTML = '404'
  loading.appendChild(img)
  loading.appendChild(h1)
  document.body.appendChild(loading)
}

switch (window.location.pathname) {
  case '/':
    break
  case '/npm-size':
    changeToSize()
    break
  default:
    defaultCase()
    break
}
