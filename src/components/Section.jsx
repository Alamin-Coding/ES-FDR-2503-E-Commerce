import React from 'react'

const Section = ({children, className}) => {
  return (
    <div className={`pt-20 bg-white ${className}`}>
        {children}
    </div>
  )
}

export default Section