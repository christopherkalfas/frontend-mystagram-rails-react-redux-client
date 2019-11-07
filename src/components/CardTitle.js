import React, { Component } from 'react'

export class CardTitle extends Component {

    render(){
        return (
            <h2 className="card-title">
                {this.props.children}
            </h2>
        )
    }
}

export default CardTitle