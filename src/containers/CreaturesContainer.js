import React, {Component} from 'react'
import Creatures from '../components/Creatures'
import { connect } from 'react-redux'
import { deleteCreature } from '../actions/creatureActions'



class CreaturesContainer extends Component {
    
    constructor(){
        super()

        this.state = {
            hasBeenSorted: false
        }
    }

    
    handleClick = () => {
        this.setState(previousState => {
            return {
                hasBeenSorted: !previousState.hasBeenSorted
            }
        })
    }
 
    render(){
        return(
            <div>
            <input type='checkbox' onClick={this.handleClick}/>
            <label>{this.state.hasBeenSorted ? 'Remove Filter' : 'Sort By Likes'}</label>
            {this.state.hasBeenSorted ? (
                <Creatures creatures={this.props.creatures.slice().sort((a,b) => b.likes - a.likes)} deleteCreature={this.props.deleteCreature} />
            ) : (
                 <Creatures creatures={this.props.creatures}  deleteCreature={this.props.deleteCreature}/>
            )}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        creatures: state.creatures,
       //greeting: "Hello World" 
    }
}

const dispatchStateToProps = dispatch =>{
    return {
        deleteCreature: (id) => dispatch(deleteCreature(id))
    }
}



export default connect(mapStateToProps, dispatchStateToProps)(CreaturesContainer)