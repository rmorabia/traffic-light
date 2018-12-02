import React from 'react'

const Light = ({ toggle, index, color }) => (
  <div
    className='light'
    style={{ backgroundColor: toggle === index ? color : 'white' }}
  />
)

export default Light
