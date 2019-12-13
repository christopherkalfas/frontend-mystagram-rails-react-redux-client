import React from 'react'
import CreatureCard from './CreatureCard'
import CardContent from './CardContent'
import LikeContainer from '../containers/LikeContainer'

const Creature = props => (
    <div>
        <CreatureCard>
        <CardContent>
            <img src={props.creature.image} className='card-img-top' alt={`${props.creature.name}-pic`} />
            <h1 className="card-text"><strong>{props.name}</strong></h1>
            <h4 className="card-text"><em>Species:</em><strong>{props.creature.species}</strong></h4>
            <h4 className="card-text"><em>Location:</em><strong>{props.creature.location}</strong></h4>
            <h4 className="card-text"> <em>Temperament:</em> <strong>{props.creature.temperament}</strong></h4>
            <button onClick={() => props.creature.handleDelete(props.creature.id)}>Banish!</button>
            <br/>
            <h4 className="card-text lg-col"> <em>Likes:</em> <strong>{props.creature.likes}</strong></h4>
            <LikeContainer creature={props.creature} />
        </CardContent>
        </CreatureCard>
    </div>
)
                    

export default Creature