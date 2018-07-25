// @flow

import smoothScroll from './scroll'

import './i18n'
import './navigation'

const pulseArrow = document.querySelector('.fa-angle-double-down')
smoothScroll.init()

if (pulseArrow) {
  setInterval(() => {
    pulseArrow.classList.toggle('flash')
  }, 3000)
}
