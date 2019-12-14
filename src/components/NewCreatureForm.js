import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addNewCreature } from '../actions/creatureActions'

class NewCreatureForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            species: '',
            location: '',
            temperament: '',
            image: '',

        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addNewCreature( {
            ...this.state,
            likes: 0
        }, this.props.history )
         //redirect to creatures page
         //after dispatch
    }

    render() {
        return(
            <div className="wrapper">
                <form className='creature-form' onSubmit={this.handleSubmit}>
                    <div className='input-fields'>
                        <input type="text" className="input" name="name" id="name" placeholder="Creature Name" value={this.state.name} onChange={this.handleChange} />
                        <input type="text" className="input" name="species" id="species" placeholder="Species" value={this.state.species} onChange={this.handleChange} />
                        <input type="text" className="input" name="location" id="location" placeholder="Creature Location" value={this.state.location} onChange={this.handleChange} />
                        <input type="text" className="input" name="temperament" id="temperament" placeholder="Temperament" value={this.state.temperament} onChange={this.handleChange} />
                        <input type="text" className="input" name="image" id="image" placeholder="Image of Creature" value={this.state.image} onChange={this.handleChange} />
                    </div>
                    <input type="submit" value="Create Creature" className="submit-btn" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addNewCreature })(NewCreatureForm)