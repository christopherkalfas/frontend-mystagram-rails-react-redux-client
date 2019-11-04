import React, { Component } from 'react'

export class CreatureCard extends Component {
    render() {
        return(
            <div className='card'>
                {this.props.children}
            </div>
        )
    }
}

export default CreatureCard