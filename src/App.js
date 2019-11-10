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
 
  
  componentDidMount() {
    console.log(this.props)
    //this.props.greeting();
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
            <Route exact path="/creatures/new" component={NewCreatureForm} />
            <Route exact path="/creatures" component={CreaturesContainer} />
            <Route component={Errors} />
          </Switch>
        </div>
      </div>
      </Router>
      )
  }
}



const mapDispatchToProps = dispatch => {
  return {
    fetchCreatures: () => dispatch(fetchCreatures()),
    greeting: () => console.log('hello world')
  }
}

export default connect(null, mapDispatchToProps)(App)
