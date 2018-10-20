import React, { Component } from 'react'
import './screen.css'

class Screen extends Component {
  render () {
    const operations = this.props.data.join('')
    return <input disabled="disabled" value={operations} className='ResultNow'/>
  }
}

export default Screen
