import React, { Component } from 'react'
import Traffic from './Traffic'
import 'normalize.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.backgroundGradient = this.backgroundGradient.bind(this)
  }

  // This is the most egregious code ever, but I NEED it.
  backgroundGradient () {
    let array = [0, 1, 2, 3]

    let colorArray = array.map(() => {
      const r = (Math.floor(Math.random() * 156) + 90)
      const g = (Math.floor(Math.random() * 156) + 90)
      const b = (Math.floor(Math.random() * 156) + 90)

      return 'rgb(' + r + ',' + g + ',' + b + ')'
    })
    return 'linear-gradient(-45deg, ' + colorArray[0] + ', ' + colorArray[1] + ', ' + colorArray[2] + ', ' + colorArray[3] + ')'
  }

  render () {
    return (
      <div
        className='background'
        style={{
          background: this.backgroundGradient(),
          backgroundSize: '400% 400%',
          animation: 'Gradient 30s ease infinite'
        }}>
        <Traffic />
      </div>
    )
  }
}

export default App
