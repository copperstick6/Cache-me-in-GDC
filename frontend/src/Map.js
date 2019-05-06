import React, {Component} from 'react'
import './Map.css'
import Navigation from './Navbar.js'
import Media from 'react-bootstrap/Media'
import building from './cs.jpg'
import data from './sample.json'

export default class Map extends Component{
  constructor(props){
    super(props)
    this.state={
      totalUsers: data['sta'].length,

    }
  }
  componentDidMount(){
      //make request here

  }

  render(){
    return(
      <div className = "bg-root">
        <Navigation />
        <div className='header-image'></div>
        <div className="info">
        <br />
        <center><h2>Total Users online: {this.state.totalUsers}</h2></center>

        </div>
      </div>
    )
  }
}
