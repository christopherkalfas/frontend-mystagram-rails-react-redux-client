import React from 'react'
import CreatureCard from './CreatureCard'
import CardContent from './CardContent'
import CardTitle from './CardTitle'
import LikeContainer from '../containers/LikeContainer'
import { Link } from 'react-router-dom'


const Creature= ({ name, species, location, temperament, image, likes, id}) => {
    return (
        <li>
        <CreatureCard>
            <CardContent>
                <CardTitle><Link to={`/creatures/${id}`}/>{name}</CardTitle>
                <br/>
                <img src={image} alt={`${name}-pic`}/>
                <p> Species: {species}</p>
                <p> Location: {location}</p>
                <p> Temperament: {temperament}</p>
                <p> Likes: {likes}</p>
                <LikeContainer />
            </CardContent>
        </CreatureCard>
        </li>
    )
}



export default Creature