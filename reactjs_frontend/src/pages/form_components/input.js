import React from 'react'

const Input = React.forwardRef(({className, type, name, placeholder}, ref)=> {
  return (
    <div className={className}>
      <input ref={ref} type={type} name={name} placeholder={placeholder} />
    </div>
  )
}) 

export default Input    