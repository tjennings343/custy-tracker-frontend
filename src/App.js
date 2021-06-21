import React, { Component } from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom"

import CustomersListContainer from './containers/CustomersListContainer'
import CustomerContainer from './containers/CustomerContainer'



class App extends Component {

  
  
  render(){
    return (
      <div className="App">
        <Router>
          <Route exact path='/customers' component={CustomersListContainer}/>
          <Route exact path='/customers/:id' component={CustomerContainer}/>
        </Router>  
      </div>
    );

  }
  
}

export default connect()(App)

