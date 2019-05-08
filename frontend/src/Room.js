import React, {Component} from 'react'
import './Map.css'
import Navigation from './Navbar.js'
import data from './sample.json'
import {Container, Row, Col, Card, Spinner, Form} from 'react-bootstrap'
import axios from 'axios'

export default class Room extends Component{
  constructor(props){
    super(props)
    this.state={
		totalUsers: 0,
		userData: "",
        all_station_data: "",
        displayedData: ""
    }
    this.handleSearch = this.handleSearch.bind(this)
  }
  componentDidMount(){
      console.log(process.env.REACT_APP_API_TOKEN)
      axios.get('https://cors-anywhere.herokuapp.com/https://cachemeinthegdc.herokuapp.com/api/get_devices', {
          headers:{
              'token': process.env.REACT_APP_API_TOKEN
          }
      }).then(function(response){
          this.setState({all_station_data: response.data}, function(){
              let elems = ""
              switch(this.props.match.params.roomid){
                  case "2.216":
                    elems = response.data.filter(item => item.room == 0 || item.room == 1 || item.room == 2 || item.room == 3 || item.room == 4 )
                    this.setState({userData: elems, totalUsers: elems.length, displayedData: elems})
                    break;
                  case "2nd Floor Atrium":
                    elems = response.data.filter(item => item.room == 5 || item.room == 6)
                    this.setState({userData: elems, totalUsers: elems.length, displayedData: elems})
                    break;
                  case "3rd Floor Lab":
                    elems = response.data.filter(item => item.room == 7 || item.room == 8 || item.room == 9 || item.room == 10 || item.room == 11 || item.room == 12)
                    this.setState({userData: elems, totalUsers: elems.length, displayedData: elems})
                    break;
                  case "4.302":
                    elems = response.data.filter(item => item.room == 13 || item.room == 14 || item.room == 15 || item.room == 16 )
                    this.setState({userData: elems, totalUsers: elems.length, displayedData: elems})
                    break;
              }
          }.bind(this))
      }.bind(this))
  }
  handleSearch(event){
      let filtered_item = this.state.userData.filter(item => item.mac.includes(event.target.value) )
      this.setState({displayedData: filtered_item})
  }
  render(){
      if(this.state.all_station_data == ""){
          return(

                <div className = "bg-root">
                  <Navigation />
                  <div className="info">
                  <br />
                  <center><Spinner animation="border" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner></center>

                  </div>
                </div>
          )
      }
	  let usersGrid = null
	  if(this.state.userData != ""){
		  usersGrid = this.state.displayedData.map((user) =>
          <div>
		  <Col xs={6} sm={4} md={3} style={{ "padding-left": 10, "padding-right": 10 }}>
			  <Card style={{ width: '16rem' }}>
			  <Card.Body>
			    <Card.Title>MAC Address: {user['mac']}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">Last Seen: {user['last_seen1']}</Card.Subtitle>
			    <Card.Text>
			      <ul>
				  	<li>
					Sensor 1 Power: {user['power1']}
					</li>
					<li>
					Sensor 2 Power: {user['power2']}
					</li>
					<li>
					Sensor 3 Power: {user['power3']}
					</li>
				  </ul>
			    </Card.Text>
			  </Card.Body>
			</Card>
		</Col>
        <br />
        </div>
		)
	}

    return(
      <div className = "bg-root">
        <Navigation />
        <div className="info">
        <br />
        <center><h2>{this.props.match.params.roomid}</h2></center>
		<center><h4>Users in Room: {this.state.totalUsers}</h4></center>
        <br />
        <center>
        <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Search by MAC Address"
                onChange={this.handleSearch}
              />

            </Form.Group>
            </center>

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
