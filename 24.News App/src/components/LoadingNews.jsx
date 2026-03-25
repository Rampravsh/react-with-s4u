import React from 'react'
import LoadingImage from './LoadingImage'
import Wrapper from './Wrapper'

const LoadingNews = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 mt-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="card bg-base-100 w-90 shadow-sm">
            <LoadingImage />
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default LoadingNews