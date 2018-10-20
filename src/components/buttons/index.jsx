import React, { Component } from 'react';
import './buttons.css'

class Buttons extends Component {
  render () {  
    return (
      <button
        onClick={this.props.onClick}
        className="Buttons"
        data-value={this.props.value}
      >
        {this.props.label}
      </button>
    )
  }
}

export default Buttons
