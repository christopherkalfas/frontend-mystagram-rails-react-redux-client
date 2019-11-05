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
        this.props.addNewCreature( this.state, this.props.history )
         //redirect to creatures page
    }

    render() {
        return(
            <div>
                <form id='creature-form' onSubmit={this.handleSubmit}>
                    <div className='input-field'>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                        <label htmlFor='name'>Name</label>
                    </div>

                    <div className='input-field'>
                        <input type="text" name="species" id="species" value={this.state.species} onChange={this.handleChange} />
                        <label htmlFor='species'>Species</label>
                    </div>

                    <div className='input-field'>
                        <input type="text" name="location" id="location" value={this.state.location} onChange={this.handleChange} />
                        <label htmlFor='location'>Location</label>
                    </div>

                    <div className='input-field'>
                        <input type="text" name="temperament" id="temperament" value={this.state.temperament} onChange={this.handleChange} />
                        <label htmlFor="temperament">Temperament</label>
                    </div>

                    <div className='input-field'>
                        <input type="text" name="image" id="image" value={this.state.image} onChange={this.handleChange} />
                        <label htmlFor='image'>Image</label>
                    </div>

                    <input type="submit" value="Create Creature" className="btn" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addNewCreature })(NewCreatureForm)