import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(props) {
        super() 
        this.state = {
          secondsLeft: props.initialCount
        }
      }
    

      message = () => {
        if (this.state.secondsLeft == 0) {
            return "Boom!"
        }
        return `${this.state.secondsLeft} seconds left before I go boom!`

      }


      render() {
        return this.message()
      }
}
