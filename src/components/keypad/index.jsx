import React, { Component } from 'react'
import Button from '../buttons'

import './keypad.css'

class Keypad extends Component {
  render() {
    return (
      <div className="ContainerKEYPAD">
        <Button onClick={this.props.onClick} label="C" value="clear" />
        <Button label="⟵" value="null"/>
        <Button onClick={this.props.onClick} label="/" value="/" />
        <Button onClick={this.props.onClick} label="X" value="*" />

        <Button onClick={this.props.onClick} label="7" value="7" />
        <Button onClick={this.props.onClick} label="8" value="8" />
        <Button onClick={this.props.onClick} label="9" value="9" />
        <Button onClick={this.props.onClick} label="-" value="-" />

        <Button onClick={this.props.onClick} label="4" value="4" />
        <Button onClick={this.props.onClick} label="5" value="5" />
        <Button onClick={this.props.onClick} label="6" value="6" />
        <Button onClick={this.props.onClick} label="+" size="2" value="+" />

        <Button onClick={this.props.onClick} label="1" value="1" />
        <Button onClick={this.props.onClick} label="2" value="2" />
        <Button onClick={this.props.onClick} label="3" value="3" />

        <Button onClick={this.props.onClick} label="." value="." />
        <Button onClick={this.props.onClick} label="0" value="0" />
        <Button label="" value="null" />
        <Button onClick={this.props.onClick} label="=" size="2" value="equal" />
      </div>
    )
  }
}
export default Keypad
