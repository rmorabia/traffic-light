import React, { Component } from 'react'
import Traffic from './Traffic'
import 'normalize.css'

class App extends Component {
  backgroundGradient = () => {
    const color = () => {
      const hue = Math.floor(Math.random() * 360);
      return `hsl(${hue}, 80%, 80%)`
    }
    return `linear-gradient(-45deg, ${color()}, ${color()}, ${color()}, ${color()})`
  }

  render () {
    return (
      <div
        style={{
          background: this.backgroundGradient(), // what on earth is wrong with my calling it back here
          backgroundSize: '400% 400%',
          animation: 'Gradient 30s ease infinite'
        }}
      >
        <Traffic />
        <footer>
          Built by <a href='http://rmorabia.com'>Radhika Morabia</a>. Source on{' '}
          <a href='http://github.com/rmorabia/traffic-light'>GitHub</a>.
        </footer>
      </div>
    )
  }
}

export default App
