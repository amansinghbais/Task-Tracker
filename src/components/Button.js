import React from 'react'
import propTypes from 'prop-types'
const Button = ({color,text, onclick}) => {
  return (
    <button onClick={onclick} className='btn' style={{backgroundColor: color,color: 'white', border: 'none'}}>{text}</button>
  )
}


Button.defaultProps = {
    text: "Button",
    color: "steelBlue"
}

Button.propTypes = {
    text : propTypes.string,
    color : propTypes.string,
    onclick : propTypes.func.isRequired
}

export default Button