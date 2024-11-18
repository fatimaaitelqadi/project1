import React, { Component } from 'react'

export default class Compture extends Component {
    constructor(props) {
        super(props)
        this.state = { count1: props.debut1 }
    }

    Incrementer() {
        this.setState({ count1: this.state.count1 + 1 })
    }

    render() {
        return (
            <div>
                <p>This count1 is {this.state.count1}</p>
                <button onClick={() => this.Incrementer()}>Incrementer</button>
            </div>
        )
    }
}
