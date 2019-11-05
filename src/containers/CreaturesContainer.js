import React, {Component} from 'react'
import Creatures from '../components/Creatures'
import { connect } from 'react-redux'
import { addNewCreature } from "../actions/creatureActions"


class CreaturesContainer extends Component {

    render(){
        return(
            <div>
            <Creatures creatures={this.props.creatures} />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        creatures: state.creatures
    }
}



export default connect(mapStateToProps, { addNewCreature })(CreaturesContainer)