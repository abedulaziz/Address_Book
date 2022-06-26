import React from 'react'

const Input = ({className, type, name, placeholder}) => {
  return (
    <div className={className}>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  )
}

export default Input    