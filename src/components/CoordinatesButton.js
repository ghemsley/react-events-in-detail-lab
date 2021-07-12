// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {
  handleButtonClick = (event) => {
    const x = event.clientX
    const y = event.clientY
    const array = [x, y]
    this.props.onReceiveCoordinates(array)
  }

  render() {
    return <button onClick={this.handleButtonClick} />
  }
}

export default CoordinatesButton
