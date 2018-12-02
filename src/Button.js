import React from 'react'

const Button = ( props) => (
    <button
        onClick={props.onClickHandler}
    >
        {props.label}
    </button>
)

export default Button