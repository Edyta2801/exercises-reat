import React from 'react'
import Button from './Button'

class Counter extends React.Component {
    constructor(props) {
        super()


        this.state = {
            otherProps: 'whatever',
            number: props.startNumber
        }
    }
    incHandler = () =>
        this.setState({ number: this.state.number + 1 })

    decHandler = () =>
        this.setState({ number: this.state.number -1})

    resetHandler = () => this.setState({ number: this.props.startNumber })



    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <Button
                    onClick={this.incHandler}
                    label={'+'}
                />
                <Button
                    onClick={this.decHandler}
                    label={'-'}
                />
                <Button
                    onClick={this.resetHandler}
                    label={'reset'}
                />
            </div>
        )
    }
}

export default Counter


