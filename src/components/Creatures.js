import React, {Component} from 'react'
import Creature from './Creature'

class Creatures extends Component {

    render() {
        
        const creaturesList= this.props.creatures.map( creature => { 
            return (
                <Creature key={creature.id} creature={creature}
                    // name={creature.name}
                    // species={creature.species}
                    // location={creature.location}
                    // temperament={creature.temperament}
                    // image={creature.image}
                    // likes={creature.likes}

                />    
            )   
        })

        return(
            <div className='creatures-list'>
                <h3 className="center">List of Creatures</h3>
                <ul>
                { creaturesList }
                </ul>
            </div>
        )
    }
}

export default Creatures