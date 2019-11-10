import React, {Component} from 'react'
import Creatures from '../components/Creatures'
import { connect } from 'react-redux'



class CreaturesContainer extends Component {

    render(){
        return(
            <div>
            {/* {this.props.greeting} */}
            <Creatures creatures={this.props.creatures} />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        creatures: state.creatures,
        //greeting: "Hello World"
    }
}



export default connect(mapStateToProps)(CreaturesContainer)