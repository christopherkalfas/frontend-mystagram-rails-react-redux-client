import React from 'react'
import Creature from './Creature'

const Creatures = props => (
    <div className='creatures-list'>
        <img src='https://fontmeme.com/permalink/191108/ca6621049565d7a4a27985c547fd7988.png' alt='list-custom-font' className='list-custom-font'/>
            { props.creatures.map( creature => (
                <Creature key={creature.id} creature={creature} deleteCreature={creature.deleteCreature} />    
            ))}
        </div>
)

export default Creatures