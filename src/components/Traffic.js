import React, { Component } from 'react'
import Light from './Light'

class Traffic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      colors: ['red', 'yellow', 'green'],
      // Which color should be toggled?
      toggle: null
    }
    this.chooseLight = this.chooseLight.bind(this)
  }

  chooseLight () { this.setState({ toggle: Math.floor(Math.random() * 3) }) }

  render () {
    return (
      <div className='box'>
        <div className='traffic' onClick={this.chooseLight}>
          {
            this.state.colors.map((colors, index) => {
              return (<Light
                color={colors}
                index={index}
                toggle={this.state.toggle}
                key={colors + index}
              />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Traffic
