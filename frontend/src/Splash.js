import React from 'react';
import './Splash.css';
import TypeWriter from 'react-typewriter'
import Fade from 'react-bootstrap/Fade'
import {Form, Col} from 'react-bootstrap'
import { Component } from 'react';

export default class Map extends Component {
    constructor(props){
        super(props)
        this.state = {
            pass: false,
            typingEnd: false,
        }
        this.goToPage = this.goToPage.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.typingEnd = this.typingEnd.bind(this)
    }
    typingEnd(){
        setTimeout(function(){
            this.setState({typingEnd: true})
        }.bind(this), 1000)
    }

    goToPage(e){
      e.preventDefault();
      this.props.history.push('/map')
    }
    handleInput(event){
        console.log(event.target.value)
        if(event.target.value.toLowerCase() == "i solemnly swear that i am up to no good"){
            console.log("entered")
            this.setState({pass: true})
        }
    }

    render(){
        let typer = null
        let button = null
        if(this.state.pass){
            typer = <div><br /><TypeWriter typing={1} onTypingEnd={this.typingEnd}><h1>William, Diemi, Jared, and Kyle Presents:</h1><h2>Marauder's Map: GDC edition</h2></TypeWriter></div>

        }
        if(this.state.typingEnd){
            button = <button onClick={this.goToPage}>Enter</button>
        }

        return (
          <div className="Intro">
      		<div className="container">
            <br />
            <center>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
                  <Form.Control
                    type="text"
                    name="lastName"
                    onChange={this.handleInput}
                  />
                  {typer}
                  <br />
                  {button}

                </Form.Group>
                </center>

      		</div>
          </div>
        )
    }

}
