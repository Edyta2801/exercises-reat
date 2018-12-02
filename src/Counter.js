import React from 'react'
import Button from './Button'

class Counter extends React.Component {
    constructor(props) {
        super()


        this.state = {
            otherProps:'whatever',
            number: props.startNumber
        }

    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <Button
                    onClick={() => this.setState({number:this.state.number +1})}
                    label={'+'}
                />
                <Button
                    onClick={() =>this.setState({number:this.state.number -1})}
                    label={'-'}
                />
            </div>
        )
    }
}

export default Counter


