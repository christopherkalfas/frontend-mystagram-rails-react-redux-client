import React, { Component } from 'react'

import { connect } from 'react-redux'
import { deleteCreature } from "../actions/creatureActions"

export class DeleteContainer extends Component {
   
    handleDelete = () => {
        let id = this.props.creature.id
        debugger
        this.props.deleteCreature(id)
    }

    render(){
        return(
            <button id='delete-btn' className='btn btn-warning' onClick={this.handleDelete}>Banish!</button>

        )
    }
}

export default connect(null, { deleteCreature })(DeleteContainer)