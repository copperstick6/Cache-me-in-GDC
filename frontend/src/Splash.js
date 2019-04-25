import React from 'react';
import './Splash.css';
import TypeWriter from 'react-typewriter'
import Fade from 'react-bootstrap/Fade'
import { Component } from 'react';

export default class Map extends Component {
    constructor(props){
        super(props)
        this.state = {
            typingEnd: false,
            buttonAppear: false
        }
        this.typingEnd = this.typingEnd.bind(this)
        this.buttonTimeout = this.buttonTimeout.bind(this)
        this.goToPage = this.goToPage.bind(this)
    }
    typingEnd(){
        setTimeout(function(){
            this.setState({typingEnd: true})
        }.bind(this), 3000)
    }

    goToPage(e){
      e.preventDefault();
      this.props.history.push('/map')
    }

    buttonTimeout(){
      setTimeout(function(){
        this.setState({buttonAppear: true})
      }.bind(this), 500)
    }

    render(){
        let done = <TypeWriter typing={1} onTypingEnd={this.typingEnd}><h1>Welcome to Marauder&#39;s Map</h1><h2>GDC edition</h2></TypeWriter>
        let button= null
        if(this.state.typingEnd){
            done = <div className="warning"><h4>Please do not use this map for malicious purposes such as stalking your fellow classmates. Thanks.</h4></div>
            this.buttonTimeout()

        }
        if(this.state.buttonAppear){
          done = <div className="warning"><h3>Please do not use this map for malicious purposes such as stalking your fellow classmates. Thanks.</h3><button onClick={this.goToPage}>Imma Firin muh lazers</button></div>
        }
        return (
          <div className="Intro">
      		<div className="container">

          {done}
      		</div>
          </div>
        )
    }

}
