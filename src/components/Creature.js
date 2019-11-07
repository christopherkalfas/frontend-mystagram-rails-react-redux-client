import React, { Component } from 'react'
import CreatureCard from './CreatureCard'
import CardContent from './CardContent'
import CardTitle from './CardTitle'
import LikeContainer from '../containers/LikeContainer'


export class Creature extends Component {
    render(){
        const {creature} = this.props

       
        return(
        
            <CreatureCard>
                <CardContent>
                    <CardTitle></CardTitle>
                    <img src={creature.image}  className="card-img-top" alt={`${creature.name}-pic`}/>
                    <p className='card-title'>{creature.name}</p>
                    <p className="card-text"> Species: {creature.species}</p>
                    <p className="card-text"> Location: {creature.location}</p>
                    <p className="card-text"> Temperament: {creature.temperament}</p>
                    <p className="card-text"> Likes: {creature.likes}</p>
                    <LikeContainer creature={creature} />
                </CardContent>
            </CreatureCard>
    
        )
    }

}




export default Creature