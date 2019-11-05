import React, { Component } from 'react'
import IncreaseLikeButton from '../components/likeComponents/increaseLikeButton'
import DecreaseLikeButton from '../components/likeComponents/decreaseLikeButton'

export class Liker extends Component {
    state = {
        likes: 0
    }

    handleIncrement = () => {
        let increaseLikes = this.state.likes + 1
        this.setState({
            likes: increaseLikes
        })
    }

    handleDecrement = () => {
        let decreaseLikes = this.state.likes - 1
        this.setState({
            likes: decreaseLikes
        })
    }
    render(){
        return(
            <div>
            <IncreaseLikeButton onClick={this.handleIncrement} />
            <DecreaseLikeButton onClick={this.handleDecrement} />
            </div>
        )
    }
}

export default Liker