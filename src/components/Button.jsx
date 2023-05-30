import React from 'react'

const Button = ({styles}) => {
  return (
    <button className={`py-4 px-6 ${styles} bg-blue-gradient font-poppins font-medium text-primary text-[18px] outline-none rounded-[10px]`}>Get Started</button>
  )
}

export default Button
