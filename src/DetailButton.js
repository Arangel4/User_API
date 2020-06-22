import React, { Component, useState } from 'react';

class DetailButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: true,
            isHidden: true
        };
        this.toggleDetails = this.toggleDetails.bind(this);
    }

    toggleDetails = () => {
        this.setState ((details) => {
            return {
                isHidden: !details.isHidden
            };
        })
        this.setState({isClicked: !this.state.isClicked})
    }

    render() {
        
        return (
            <button onClick={this.toggleDetails}>{this.state.isClicked ? 'Show Details' : 'Hide Details'}</button>
        )
    }
}

export default DetailButton;