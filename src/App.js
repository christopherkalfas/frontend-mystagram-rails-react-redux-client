import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import { fetchCreatures } from './actions/creatureActions';
import CreaturesContainer from "./containers/CreaturesContainer"
import NewCreatureForm from "./components/NewCreatureForm"

import Header from "./components/layout/Header"
import Nav from "./components/layout/Nav"
import Home from "./components/layout/Home"
import Errors from "./components/layout/Errors"

import '../node_modules/bootstrap/dist/css/bootstrap.css.map'
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


  render(){
    return (
    <Router>
      <Header />
      <Nav />
      <div className ="App">
        <div className='container'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/creatures/new" render={props => <NewCreatureForm {...props} addNewCreature={this.addNewCreature} />} />
            <Route exact path="/creatures" render={props => <CreaturesContainer {...props} creatures={this.state.creatures} />} />
            <Route component={Errors} />
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
