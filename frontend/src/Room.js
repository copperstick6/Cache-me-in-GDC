import React, {Component} from 'react'
import './Map.css'
import Navigation from './Navbar.js'

export default class Room extends Component{
  constructor(props){
    super(props)
    this.state={
		totalUsers: 15
    }
  }
  componentDidMount(){
      //make request here

  }

  render(){
    return(
      <div className = "bg-root">
        <Navigation />
        <div className="info">
        <br />
        <center><h2>{this.props.match.params.roomid}</h2></center>
		<center><h4>Users in Room: {this.state.totalUsers}</h4></center>

        </div>
      </div>
    )
  }
}
