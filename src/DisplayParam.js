import React from 'react'

const DisplayParam=(props)=>(
    <div>
        {props.match.params.key}
    </div>
)
export default DisplayParam