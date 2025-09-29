import React from 'react'

const Comp = ({name='John Doe', age=20}) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
    </div>
  )
}

export default Comp