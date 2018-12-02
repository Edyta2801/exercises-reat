import React from 'react'

const Button = ({ label }) => (
    <button
        onClick={() => alert('ok')}
    >
        {label}
    </button>
)

export default Button