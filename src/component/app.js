import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import Coursejson from './../course.json'
import Home from './home.js';
import Bollywood from './bollywood'
import Technology  from './technology';
import Hollywood  from './hollywood';
import Food from './food'
import Fitness from './fitness'
import axios from 'axios';
class App extends Component{
  state={
    courselist:[]
  }
  componentDidMount() {
   // axios.get("https://jsonplaceholder.typicode.com/posts")
    axios.get("http://localhost:3001/")
    .then((response)=>{
      console.log(response.data)
      this.setState({
        courselist: response.data
      })
    })
    .catch((error)=>
      console.log("error")
    
    )
    console.log("fetching data")

  }
    render(){
      return(
        <>
  <BrowserRouter>
    <Route path="/" component={() => <Home courselist={this.state.courselist} />} exact />
    <Route path="/bollywoodcopy" component={() => <Bollywood courselist={this.state.courselist} />} exact />
    <Route path="/hollywoodcopy" component={() => <Hollywood courselist={this.state.courselist} />} exact />
    <Route path="/foodcopy" component={() => <Food courselist={this.state.courselist} />} exact />
    <Route path="/fitnesscopy" component={() => <Fitness courselist={this.state.courselist} />} exact />
    <Route path="/technologycopy" component={() => <Technology courselist={this.state.courselist} />}exact />
    </BrowserRouter>
  </>
      )
      }
}


export default App