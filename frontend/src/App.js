import DefaultRouter from './Router'
import React,{Component} from 'react'


export default class App extends Component{
    componentDidMount(){
        require('dotenv').config()
    }

  render (){
    return(
      <div>
      <DefaultRouter />

      </div>
    )
  }
}
