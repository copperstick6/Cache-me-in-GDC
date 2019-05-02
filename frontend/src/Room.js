import React, {Component} from 'react'
import './Map.css'
import Navigation from './Navbar.js'
import data from './sample.json'
import {Container, Row, Col, Card} from 'react-bootstrap'

export default class Room extends Component{
  constructor(props){
    super(props)
    this.state={
		totalUsers: 15,
		userData: ""
    }
  }
  componentDidMount(){
	  let station_data = data['sta']
	  station_data = station_data.filter(item => item.room == this.props.match.params.roomid)
      //make request here
	  this.setState({userData: station_data, totalUsers: station_data.length}, ()=> console.log(this.state.userData))
	  console.log(station_data)

  }

  render(){
	  let usersGrid = null
	  if(this.state.userData != ""){
		  console.log(this.state.userData)
		  usersGrid = this.state.userData.map((user) =>
		  <Col sm={3}>
			  <Card style={{ width: '18rem' }}>
			  <Card.Body>
			    <Card.Title>MAC Address: {user['mac']}</Card.Title>
			    <Card.Subtitle className="mb-2 text-muted">BSSID: {user['bssid']}</Card.Subtitle>
				<Card.Subtitle className="mb-2 text-muted">Last Seen: {user['last_seen']}</Card.Subtitle>
				<Card.Subtitle className="mb-2 text-muted">Probes: {user['probes'] == "" ? "N/A" : user['probes']}</Card.Subtitle>
			    <Card.Text>
			      <ul>
				  	<li>
					Sensor 1 Power: {user['power_1']}
					</li>
					<li>
					Sensor 2 Power: {user['power_2']}
					</li>
					<li>
					Sensor 3 Power: {user['power_3']}
					</li>
				  </ul>
			    </Card.Text>
			  </Card.Body>
			</Card>
		</Col>
		)
	}

    return(
      <div className = "bg-root">
        <Navigation />
        <div className="info">
        <br />
        <center><h2>{this.props.match.params.roomid}</h2></center>
		<center><h4>Users in Room: {this.state.totalUsers}</h4></center>

		<Container>
		<Row style={{paddingTop: '20px'}}>
		{usersGrid}
		</Row>
		</Container>

        </div>
      </div>
    )
  }
}
