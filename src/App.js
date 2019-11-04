import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import { fetchCreatures } from './actions/creatureActions';
import CreaturesContainer from "./containers/CreaturesContainer"
import NewCreatureForm from "./components/NewCreatureForm"

import Nav from "./components/layout/Nav"
import Home from "./components/layout/Home"
class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      creatures: [],
      id: 0
    }
  
  }
  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCreatures()
  }

  addCreature = creature => {
    creature.id = this.state.id + 1
    this.setState({
      creatures: [...this.state.creatures, creature],
      id: this.state.id + 1
    })
  }
  render(){
    return (
    <Router>
      <Nav />
      <div className ="App">
      <h1>Mystagram</h1>
        <div className='container'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/creatures/new" render={props => <NewCreatureForm {...props} addCreature={this.addCreature} />} />
            <Route exact path="/creatures" render={props => <CreaturesContainer {...props} creatures={this.state.creatures} />} />
            <Route exact path="/creatures/:id" render={props => <CreaturesContainer {...props} creatures={this.state.creatures} />} />
          </Switch>
        </div>
      </div>
      </Router>
      )
  }
}

const mapStateToProps = state => {
  return {
    creatures: state.creatures,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCreatures: () => dispatch(fetchCreatures())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
