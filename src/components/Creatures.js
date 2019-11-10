import React, {Component} from 'react'
import Creature from './Creature'

class Creatures extends Component {

    render() {
        
        const creaturesList= this.props.creatures.map( creature => { 
            return (
                <Creature key={creature.id} creature={creature} />    
            )   
        })

        return(
            <div className='creatures-list'>
                <img src='https://fontmeme.com/permalink/191108/ca6621049565d7a4a27985c547fd7988.png' alt='list-custom-font' className='list-custom-font'/>
               
                { creaturesList }
               
            </div>
        )
    }
}

export default Creatures