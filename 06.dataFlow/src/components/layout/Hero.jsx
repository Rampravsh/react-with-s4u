import React from 'react'

const Hero = (props) => {
  console.log(props)
  return (
    <div className='bg-gray-400'>Hero{props.data.data} {props.layoutData} </div>
  )
}

export default Hero