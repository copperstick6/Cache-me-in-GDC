import React, {Component} from 'react'
import './Map.css'
import Navigation from './Navbar.js'
import Media from 'react-bootstrap/Media'
import building from './cs.jpg'
import axios from 'axios'

export default class Map extends Component{
  constructor(props){
    super(props)
    this.state={
      totalUsers: '',

    }
  }
  componentDidMount(){
      //make request here
      axios.get('https://cors-anywhere.herokuapp.com/https://cachemeinthegdc.herokuapp.com/api/get_devices', {
          headers:{
              'token': process.env.REACT_APP_API_TOKEN
          }
      }).then(function(response){
          console.log(response.data)
          this.setState({totalUsers: response.data.length})
      }.bind(this))

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
