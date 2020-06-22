import React, { Component } from 'react';

class DetailButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        };
    }

    toggle = () => {
        this.setState({isClicked: !this.state.isClicked})
    }

    render() {
        return (
            <button onClick={this.toggle}>{this.state.isClicked ? 'Show Details' : 'Hide Details'}</button>
        )
    }
}

export default DetailButton;