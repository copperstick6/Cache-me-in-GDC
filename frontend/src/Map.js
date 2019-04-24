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
        setTimeout(function(){
            this.setState({typingEnd: false})
        }.bind(this), 1000)

    }
    render(){
        let done = null
        if(this.state.done){
            done = <div><h5>HI</h5></div>
        }
        return (
          <div className="Intro">
          <Fade when={this.state.typingEnd} duration={3000} wait={4000} onReveal={()=> this.setState({done: true})}>
      		<div className="container">
      		<TypeWriter typing={1} onTypingEnd={this.typingEnd}><h1>Welcome to Marauder's Map</h1>
      		<h2>GDC edition</h2>
      		</TypeWriter>
      		</div>
          </Fade>
          {done}
          </div>
        )
    }

}
