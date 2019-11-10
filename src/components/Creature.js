import React, { Component } from 'react'
import CreatureCard from './CreatureCard'
import CardContent from './CardContent'

import LikeContainer from '../containers/LikeContainer'


export class Creature extends Component {
    render(){
        const {creature} = this.props

        return(
        
            <CreatureCard>
                <CardContent>
                    <img src={creature.image}  className="card-img-top" alt={`${creature.name}-pic`}/>
                    <h1 className='card-title'><strong>{creature.name}</strong></h1>
                    <h4 className="card-text"> <em>Species:</em> <strong>{creature.species}</strong></h4>
                    <h4 className="card-text"> <em>Location:</em> <strong>{creature.location}</strong></h4>
                    <h4 className="card-text"> <em>Temperament:</em> <strong>{creature.temperament}</strong></h4>
                    <br/>
                    <h4 className="card-text lg-col"> <em>Likes:</em> <strong>{creature.likes}</strong></h4>
                    
                    <LikeContainer creature={creature} />
                </CardContent>
            </CreatureCard>
    
        )
    }

}

//convert to functional component-


export default Creature