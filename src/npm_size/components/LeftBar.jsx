import React, { Component } from 'react'
import styled from 'styled-components'

import { Upload, message, Button, Icon } from 'antd'

const Header = styled.h1`
  margin: 0;
`

const HeaderCont = styled.div`
  display: flex;
  align-items: center;
  justify-elements: space-between;
  border-bottom: 2px solid black;
  padding: 2rem;
`
const SectionLeft = styled.section`
  border-right: 1px solid black;
  position: relative;
  height: inherit;
`

const LeftCon = styled.div`
  padding: 1rem;
`

const StyledUpload = styled(Upload)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`
const StyledButton = styled(Button)`
  border-color: black;
`

const Toggle = styled.img`
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  width: 1.5rem;
`

const Anim = styled.section`
  height: inherit;
  width: 270px;
  position: absolute;
  left: ${({ toggle }) => (toggle ? 0 : 'calc(2.7em - 270px)')};
  transition: left 0.5s ease-out;
`

const SizeProxy = styled.section`
  width: ${({ toggle }) => (toggle ? '270px' : '2.7em')};
  flex-shrink: 0;
  transition: width 0.5s ease-out;
  height: 100vh;
  position: relative;
`

class LeftBar extends Component {
  state = {
    toggle: true,
    width: 0
  }
    beforeUpload = (file) => {
      this.props.sendStats(file)
      return false
    }
    toggle = () => {
      this.setState(({ toggle }) => ({ toggle: !toggle }))
    }
    render () {
      const { toggle } = this.state
      const icon = toggle ? '/toggle-on.svg' : '/toggle-off.svg'
      //      width: ${toggle ? 'calc(2.7em - 100%)' : '100%'};

      return (<SizeProxy toggle={toggle}>
        
        <Anim toggle={toggle} >
          <SectionLeft>
            <Toggle alt="toggle" src={icon} onClick={this.toggle} />
            <HeaderCont>
              <Header>
                Webpack Spyglass
              </Header>
            </HeaderCont>
            <LeftCon>
              <StyledUpload beforeUpload={this.beforeUpload} fileList={[]} >
                <StyledButton>
                  <Icon type="upload" /> Select File
                </StyledButton>
              </StyledUpload>
            </LeftCon>
          </SectionLeft>
        </Anim>
      </SizeProxy>)
    }
}

export default LeftBar
