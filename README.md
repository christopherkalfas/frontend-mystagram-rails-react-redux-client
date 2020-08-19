### Mystagram
---

A full-stack app built on Rails(API) and React/Redux with Thunk middleware. Mystagram is a mix between Instagram and a Reddit thread. It allows users to add a mythical creature and up or down vote the creature based on popularity. 

[Backend](https://github.com/christopherkalfas/backend-mystagram-rails-react-redux-api)

### Motivation
---

This project was created as my final project for the Flatiron school. I decided I wanted to make a web application that used common and popular features from Instagram and Reddit and add my own interests in mythology.  

![image of Buckpeak](https://media.giphy.com/media/8xQM7ajAkpsVa/giphy.gif "Buckbeak")

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Features
---
#### Creature Voting
![image of Mystagram](https://i.ibb.co/cvyJtNF/Screen-Shot-2019-12-05-at-1-33-37-PM.png "App Picture 1")
<br/>
As a creature's number of likes is changed its position climbs (or falls) in the app. Similar to a Reddit thread.

![image of sort by popularity](https://i.ibb.co/Xsn1YdC/Screen-Shot-2019-12-05-at-1-55-12-PM.png "AppPic2")

#### Adding New Creature

![image of form](https://i.ibb.co/345CXdy/Screen-Shot-2019-12-05-at-2-05-44-PM.png "creature form")

### Code Example
---
#### Using Thunk middleware 

#### index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import creatureReducer from './reducers/creaturesReducer.js'

const store = createStore(creatureReducer, applyMiddleware(thunk))


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root'));
 ```
##### App.js
``` 
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCreatures } from './actions/creatureActions';

class App extends Component { 
      componentDidMount() {
        console.log(this.props)
        this.props.fetchCreatures()
      }
  ```
  ##### App.js
``` 
const mapDispatchToProps = dispatch => {
  return {
    fetchCreatures: () => dispatch(fetchCreatures()),
  }
}

export default connect(null, mapDispatchToProps)(App)
```

#### creaturesActions.js
```
export const fetchCreatures = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CREATURES'})
          return fetch('http://localhost:3001/creatures')
            .then(response => {
                return response.json()
            })
            .then(responseJSON => {
                dispatch({type: 'ADD_CREATURES', creatures: responseJSON })
            })
    }
}
```

#### creaturesReducer.js
```
const creatureReducer = (state = { creatures: [],loading: false }, action) => {
    switch(action.type){
        case 'LOADING_CREATURES':
            return {
                ...state,
                loading: true
            }
        
        case 'ADD_CREATURES':
            return {
                ...state,
                creatures: action.creatures,
                loading: false 
            } 
 ```
### Thunk and Dispatch
---
Vanilla Redux expects us to return an action object. Thunk allows us to use asynchronous action creators or functions that return the state later through dispatch method. This gives us direct control of dispatch methods.  

#### Thunk Sequence of Events
![Thunk Flow](https://i.ibb.co/j3Wbz1V/Screen-Shot-2019-12-05-at-5-52-04-PM.png "Thunk SoE")



### User Walkthrough
---

[![mystavid](http://img.youtube.com/vi/vFPFgGeIHZY/0.jpg)](http://www.youtube.com/watch?v=vFPFgGeIHZY "Mystagram User Walkthrough")

### Project Blog
---
[Connecting the Props](https://christopherkalfas.github.io/connecting_the_props)


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
