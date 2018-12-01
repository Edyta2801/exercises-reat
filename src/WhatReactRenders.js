import React from 'react'

const text = 'Ala ma kota'
const names = ['Ala', 'Ola', 'Ela']
const obj = {}
const arrayWithReactElements = [
    <p>Element 1</p>,
    <p>Element 2</p>,
    <p>Element 3</p>
]



const WhatReactRenders = (props) => (
    <div>
        <h2>What React Renders</h2>

        <h4>String</h4>

        <div>{text}</div>

        <h4>Number</h4>

        <div>{123}</div>

        <h4>null (is not rendered)</h4>

        <div>{null}</div>

        <h4>undefined (is not rendered)</h4>

        <div>{undefined}</div>

        <h4>boolean (is not rendered)</h4>

        <div>{true} {false}</div>

        <h4>array</h4>

        <p>React renders array element by element</p>

        <div>{names}</div>

        <div>{arrayWithReactElements}</div>

        <p>We can create array with react elements by .map</p>

        <ul>
            {
                names.map(name => <li>{name}</li>)
            }
        </ul>

        <h4>object</h4>

        <p>This code is commented because it cause error</p>

        {/* <div>{obj}</div> */}

    </div>
)

export default WhatReactRenders





































