import React, { Component } from 'react'


export class CreatureCard extends Component {
    render() {
        return(
            <div className='card-body' >
                {this.props.children}
            </div>
        )
    }
}

export default CreatureCard