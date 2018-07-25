import React, { Component } from 'react'
import styled from 'styled-components'
import times from 'lodash.times'

import { Subscriber } from 'react-broadcast'

const emSize = parseFloat(window.getComputedStyle(window.document.body).fontSize)

const maxWidth = window.innerWidth - (emSize * 3.7)
const maxHeight = window.innerHeight

const Section = styled.section`
  max-width: ${maxWidth}px;
  height: 100vh;
  padding: 1rem;
  overflow: auto;
`

const stateWidth = Math.floor((window.innerWidth - (emSize * 5.7)) / 10) * 10
const stateHeight = Math.floor((maxHeight - (emSize * 2)) / 10) * 10

class Grid extends Component {
    state = {
      width: Math.floor(stateWidth / 80) * 80,
      heigth: Math.floor(stateHeight / 80) * 80,
      lineSep: 80,
      lineSepSm: 10

    }
    componentDidMount () {
      this.sectRef.scrollLeft = 0
    }

    render () {
      const { width, heigth, lineSep, lineSepSm } = this.state
      const offset = heigth - (Math.ceil(heigth / lineSep) * lineSep)
      const offsetSm = heigth - (Math.ceil(heigth / lineSepSm) * lineSepSm)

      const marks = times((((heigth / lineSep) / 2) + 1))

      marks.pop()

      return (<Section innerRef={(ref) => { this.sectRef = ref }}>
        <svg width={width} height={heigth + 12}>
          <g fill="none" style={{ stroke: 'rgb(54,54,54)' }} strokeWidth="1">
            {times((heigth / lineSep) + 1, i => <path key={`v-g-${i}`} d={`M 0 ${(i * lineSep) + offset} L ${width} ${(i * lineSep) + offset}`} />)}
            {times((width / lineSep) + 1, i => <path key={`h-g-${i}`} d={`M ${i * lineSep} 0  L  ${i * lineSep} ${heigth}`} />)}
          </g>
          <g fill="none" style={{ stroke: 'rgb(54,54,54)' }} strokeWidth="0.1">
            {times((heigth / lineSepSm) + 1, i => <path key={`v-l-g-${i}`} d={`M 0 ${(i * lineSepSm) + offsetSm} L ${width} ${(i * lineSepSm) + offsetSm}`} />)}
            {times((width / lineSepSm) + 1, i => <path key={`h-l-g-${i}`} d={`M ${i * lineSepSm} 0  L  ${i * lineSepSm} ${heigth}`} />)}
          </g>
          <g style={{ fontFamily: `'Lato', sans-serif`, fill: 'black' }}>
            {times(2, j =>
              marks.map(i => <text key={`v-t-g-${i}`} x={((j * lineSep) * 14) + 2} y={((i * lineSep) * 2) + offset - 2}> {(marks.length - i) * 2}mb</text>)
            )}
          </g>
          <Subscriber channel="stats">
            {(stats) => {
              console.log({stats})
              return <p>The current user is</p>
            }}
          </Subscriber>
          <rect width={width} height={heigth} style={{ stroke: 'rgb(0,0,0)', strokeWidth: '2px', fill: 'none' }} />
        </svg>
      </Section>)
    }
}

export default Grid
