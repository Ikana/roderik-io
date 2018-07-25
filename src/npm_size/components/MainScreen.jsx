import React, { Component } from 'react'
import styled from 'styled-components'
import { Broadcast } from 'react-broadcast'

import LeftBar from './LeftBar'
import Grid from './Grid'

import generateChart from '../proc/generateChart'

const MainSection = styled.section`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`

class MainScreen extends Component {
  state = {
    stats: undefined
  }
  sendStats = (stats) => {
    generateChart(stats)
    // this.setState(() => ({ stats }))
    
  }
  render () {
    const { stats } = this.state
    return (<Broadcast channel="stats" value={stats}>
      <MainSection>
        <LeftBar sendStats={this.sendStats} />
        <Grid />
      </MainSection>
    </Broadcast>)
  }
}

export default MainScreen
