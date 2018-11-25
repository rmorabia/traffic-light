import React from 'react'

const Light = props => (
  <div
    className='light'
    style={{ backgroundColor: (props.toggle === props.index) ? props.color : 'white' }}
  />
)

export default Light
