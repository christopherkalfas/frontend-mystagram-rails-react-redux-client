import React, { Component } from 'react'
import CreatureCard from './CreatureCard'
import CardContent from './CardContent'
import CardTitle from './CardTitle'
import LikeContainer from '../containers/LikeContainer'
import { Link } from 'react-router-dom'

export class Creature extends Component {
    render(){
        const {creature} = this.props

        return(
        <li>
            <CreatureCard>
                <CardContent>
                    <CardTitle><Link to={`/creatures/${creature.id}`}/>{creature.name}</CardTitle>
                    <br/>
                    <img src={creature.image} alt={`${creature.name}-pic`}/>
                    <p> Species: {creature.species}</p>
                    <p> Location: {creature.location}</p>
                    <p> Temperament: {creature.temperament}</p>
                    <p> Likes: {creature.likes}</p>
                    <LikeContainer creature={creature} />
                </CardContent>
            </CreatureCard>
        </li>
        )
    }

}
// const Creature= ({ name, species, location, temperament, image, likes, id}) => {
//     return (
//         <li>
//         <CreatureCard>
//             <CardContent>
//                 <CardTitle><Link to={`/creatures/${id}`}/>{name}</CardTitle>
//                 <br/>
//                 <img src={image} alt={`${name}-pic`}/>
//                 <p> Species: {species}</p>
//                 <p> Location: {location}</p>
//                 <p> Temperament: {temperament}</p>
//                 <p> Likes: {likes}</p>
//                 <LikeContainer creature={this.creature} />
//             </CardContent>
//         </CreatureCard>
//         </li>
//     )
// }



export default Creature