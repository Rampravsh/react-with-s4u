import React from 'react'

const About = (props) => {
  console.log(props)
  return (
    <div className='bg-gray-400 mt-2'>About {props.data} {props.layoutData}</div>
  )
}

export default About