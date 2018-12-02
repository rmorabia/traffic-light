import React, { Component } from 'react'
import Light from './Light'

const colors = ['red', 'yellow', 'green']

class Traffic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // Which color should be toggled?
      toggle: null
    }
  }

  chooseLight = () => {
    this.setState({ toggle: Math.floor(Math.random() * 3) })
  }

  render () {
    return (
      <div className='box'>
        <div className='traffic' onClick={this.chooseLight}>
          {colors.map((colors, index) => {
            return (
              <Light
                color={colors}
                index={index}
                toggle={this.state.toggle}
                key={colors + index}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Traffic
