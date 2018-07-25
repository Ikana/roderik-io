// @flow
/* global Event HTMLDivElement */
import locales from './locales'

const toggle = document.querySelector('.Overlay-lang')

if (toggle) {
  toggle.addEventListener('click', (e: Event) => {
    var target = e.target
    if (target instanceof HTMLDivElement) {
      console.log()
      if (target.innerHTML === 'EN') {
        target.innerHTML = 'ES'
        chageLocale('ES')
      } else if (target.innerHTML === 'ES') {
        target.innerHTML = 'EN'
        chageLocale('EN')
      }
    }
  })
}

function chageLocale (locale) {
  const collection = locales[locale]

  Object.keys(collection).forEach((key) => {
    const element = document.querySelector(key)

    if (element) {
      element.innerHTML = collection[key]
    }
  })
}
