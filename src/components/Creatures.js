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
                <h3 className="center">List of Creatures</h3>
               
                { creaturesList }
               
            </div>
        )
    }
}

export default Creatures