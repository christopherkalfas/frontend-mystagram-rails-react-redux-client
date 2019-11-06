import React, { Component } from 'react'
import IncreaseLikeButton from '../components/likeComponents/increaseLikeButton'
import DecreaseLikeButton from '../components/likeComponents/decreaseLikeButton'
import { connect } from 'react-redux'
import { updateLikes } from '../actions/creatureActions'

export class LikeContainer extends Component {

    handleIncrement = () => {
        let increaseLikes = this.props.creature.likes + 1
        let updatedCreature = {
            ...this.props.creature,
            likes: increaseLikes
        }
        this.props.updateLikes(updatedCreature, 'INCREASE_LIKES')
        
    }

    handleDecrement = () => {
        let decreaseLikes = this.props.creature.likes - 1
        let updatedCreature = {
            ...this.props.creature,
            likes: decreaseLikes
        }
        this.props.updateLikes(updatedCreature, 'DECREASE_LIKES')
    }
    render(){
        return(
            <div>
            <IncreaseLikeButton handleIncrement={this.handleIncrement} />
            <DecreaseLikeButton handleDecrement={this.handleDecrement} />
            </div>
        )
    }
}




    

export default connect(null,{ updateLikes })(LikeContainer)