import React from 'react';
import './Map.css';
import TypeWriter from 'react-typewriter'
import Fade from 'react-reveal/Fade';
import { Component } from 'react';

export default class Map extends Component {
    constructor(props){
        super(props)
        this.state = {
            typingEnd: true,
            done: false
        }
        this.typingEnd = this.typingEnd.bind(this)
    }
    typingEnd(){
        console.log("entered")
        this.setState({typingEnd: false})
    }
    render(){
        return (
          <div className="Intro">
          <Fade when={this.state.typingEnd} duration={3000} collapse onReveal={()=> this.setState({done: true})}>
      		<div className="container">
      		<TypeWriter typing={1} onTypingEnd={this.typingEnd}><h1>Welcome to Marauder's Map</h1>
      		<h2>GDC edition</h2>

      		</TypeWriter>
      		</div>
          </Fade>
          </div>
        )
    }

}
