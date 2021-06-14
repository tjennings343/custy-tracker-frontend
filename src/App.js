import React, { Component } from 'react'
import {connect} from 'react-redux'
import CustomersListContainer from './containers/CustomersListContainer'


class App extends Component {

  
  
  render(){
    return (
      <div className="App">
        <CustomersListContainer/>
      </div>
    );

  }
  
}

export default connect()(App)
