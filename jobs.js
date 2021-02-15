import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.css'
import Popup from './Popup'
import axios from 'axios';
const url = 'http://127.0.0.1:5000/get'

class Jobs extends Component {
    //setting the state 
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          body: '',
          search: ''
        };this.handleChange = this.handleChange.bind(this);} // binding the function so it will have the this
    data = () => {  //sending a post request and then searching in an inofficient way
        
       
        axios.post(url)
        .then((response) => {
            console.log(response)
            for (var i = 0;  i<response['data'].length; i++){
                console.log(this.state.search)
                console.log(response['data'][i][0])
                if(response['data'][i][0] == this.state.search);
                     this.setState({title: response['data'][i][0]});
                     this.setState({body: response['data'][i][1]});
            }
            
        }, (error) => {
            console.log(error);
        });
        
        
        
    }
    handleChange(event) {
        this.setState({search: event.target.value});
      }
    render() {

      return (
        <div className='home-body'>
            <div className='create-Post'>
                <Link to='./create' className='create-post'>Create A Job Post</Link>
            </div>
          
          <br/>
          <div className='Inputs'>
                
              <input className='Search' placeholder='Search For A Job Post' type="text" value={this.state.search} onChange={this.handleChange} />
    
              <input type="submit" value="Search" className='Search1' onClick={this.data}/>
              </div>
              <div className='grey'>
              <h1>{this.state.title}</h1>
          <h1 className='body1'>{this.state.body}</h1>
         
              </div>
          
        </div>
        
      );
    }
  }
  
  export default Jobs;