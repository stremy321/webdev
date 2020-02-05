import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'



import Tweet from './tweets.js/Tweet/index'
import NewTweet from './tweets.js/List/NewTweet'
import Preview from './preview'
//import Footer from './Footer/index'

function App() {
  return (
    <div>
      <Tweet />
      <NewTweet />
      <Preview />
      <Switch>
        <Route
          exact path='/'
          component={Landing} />
        <Route
          exact path='/:id'
          component={Details} />
      </Switch>
      
    </div>
  )
}

export default withRouter(App)