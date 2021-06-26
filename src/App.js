import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css'

import CustomersListContainer from './containers/CustomersListContainer'
import CustomerContainer from './containers/CustomerContainer'
import CustomerForm from './components/CustomerForm'
import NavBar from './components/Navbar'



class App extends Component {

  render(){
    return (
      <div className="App">
        <Router>
          <NavBar/>
            <Route exact path='/customers' component={CustomersListContainer}/>
            <Route path= '/customers/new' component={CustomerForm}/>
            <Route path='/customers/:id' component={CustomerContainer}/>
        </Router>  
      </div>
    );

  }
  
}


export default App



