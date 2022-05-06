import React from 'react'

const FormButton = ({
  type="button",
  value, 
  border, 
  color,
  bgColor, 
  onClick, 
  full_width,
  disabled=false
}) => {
  return (
    <button 
      style={{
        backgroundColor: disabled ? "#eafbff" : bgColor,
        border: `1px solid ${border}`,
        width: full_width ? "100%" : "auto",
        display: full_width ? "block" : "inline-block",
        color: disabled ? "#03131e" : color,
      }}
      type={type}
      onClick={() => onClick()}
    >
      {value}
    </button>
  )
}

export default FormButton