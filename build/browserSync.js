// @flow

const exec = (bs) => {
  bs.socket.on('connection', () => {
    bs.socket.emit('get-error-react')
  })

  bs.socket.on('react-error', (msgs) => {
    // console.log('hi', msg)
    const els = [msgs].map(msg => {
      const el = document.createElement('div')
      el.innerHTML = msg
      return el
    })

    const overLay = document.createElement('div')
    overLay.style.position = 'fixed'
    overLay.style.boxSizing = 'border-box'
    overLay.style.left = '0px'
    overLay.style.top = '0px'
    overLay.style.right = '0px'
    overLay.style.bottom = '0px'
    overLay.style.width = '100vw'
    overLay.style.height = '100vh'
    overLay.style.backgroundColor = 'black'
    overLay.style.color = 'rgb(232, 232, 232)'
    overLay.style.fontFamily = 'Menlo, Consolas, monospace'
    overLay.style.fontSize = 'large'
    overLay.style.padding = '2rem'
    overLay.style.lineHeight = '1.2'
    overLay.style.whiteSpace = 'pre-wrap'
    overLay.style.overflow = 'auto'

    els.forEach(el => {
      overLay.appendChild(el)
    })

    if (document.body) {
      document.body.appendChild(overLay)
    }
  })
}

const poll = () => {
  if (window.___browserSync___ === undefined) {
    window.requestAnimationFrame(poll)
  } else {
    exec(window.___browserSync___)
  }
}

window.requestAnimationFrame(poll)
