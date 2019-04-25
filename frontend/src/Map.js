import React, {Component} from 'react'
import './Map.css'
import Navigation from './Navbar.js'
import Media from 'react-bootstrap/Media'
import building from './cs.jpg'

export default class Map extends Component{
  constructor(props){
    super(props)
    this.state={
      totalUsers: 221,

    }
  }
  componentDidMount(){

  }

  render(){
    return(
      <div className = "bg-root">
        <Navigation />
        <div className='header-image'></div>
        <div className="info">

        <h2>Total Users online {this.state.totalUsers}</h2>

        </div>
      </div>
    )
  }
}
