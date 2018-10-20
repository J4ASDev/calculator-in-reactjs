import React, { Component } from 'react'
import update from 'immutability-helper'

//Components
import Screen from './components/screen'
import Keypad from './components/keypad'

import './app.css'

class App extends Component {
  //Initial States
  state = {
    operations: [],
  }
  
  // Event handlers
  operationsCalculate = () => {
    let result = this.state.operations.join('')

    // Perform the calculation, pass to number and assign to the state
    if (result) {
      result = eval(result)
      result = parseFloat(result)
      result = String(result)
      this.setState({
        operations: [result],
      })
    }
  }

  handleClick = e => {
    const value = e.target.getAttribute('data-value')

    switch (value) {
      case 'clear':
        return this.setState({
          operations: [],
        })
      case 'equal':
        return this.operationsCalculate()
      default:
      
        // Create a copy of the array (newOperations) together with a new inserted value. 
        const newOperations = update(this.state.operations, {
          $push: [value],
        })

        // Set the status of operations to newOperations
        this.setState({
          operations: newOperations,
        })
    }
  }
  
  render() {
    const { operations } = this.state
    
    return (
      <div>

        <div className="ContainerGENERAL">
          <Screen data={operations} />
          <Keypad onClick={this.handleClick} />
        </div>

        <div className="ContainerFOOTER">

          <div className="ContainerMEDIA">
            <a href="https://twitter.com/J4ASDEV" className="ContainerMEDIA-SocialMedia">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href="https://github.com/J4ASDev" className="ContainerMEDIA-SocialMedia">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://medium.com/@jonathanaraujo" className="ContainerMEDIA-SocialMedia">
              <i class="fab fa-medium"></i>
            </a>
          </div>

          <div className="ContainerTEXT">
            <span className="ContainerTEXT-text">From </span>
            <img className="ContainerTEXT-VenezuelaIcon" src="https://image.flaticon.com/icons/svg/197/197580.svg" alt="Venezuela's flag"/>
            <span className="ContainerTEXT-text">by Jonathan Araujo</span>
          </div>
          
        </div>

      </div>
    )
  }
}

export default App;
