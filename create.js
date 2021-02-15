import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.css'

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          body: '',
          popup: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.body = this.body.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      body(event) { //handel change of the body
        this.setState({body: event.target.value});
        console.log(this.state.body)
      }
      handleSubmit(event) {
          const url = 'http://127.0.0.1:5000/new/' + this.state.value + '/' + this.state.body
          console.log(url)
        axios.post(url)
        event.preventDefault();
      }
    render() {
      return (
        <div>
            <div className='header'>
            <Link to='/jobs' className='create-post'>Jobs</Link>
            </div>
          
          <br/>
          <h1 className='post'>Create A Job Post</h1>
          <div className='blue'>
          <input className='title' placeholder='Title' type="text" value={this.state.value} onChange={this.handleChange} />
          <br/>
          <textarea className='body' placeholder='Body' name="w3review" rows="4" cols="50" onChange={this.body}></textarea>
          <br/>
              <input type="submit" value="Submit" className='submit' onClick={this.handleSubmit} />
          </div>
          
        </div>
        
      );
    }
  }
  
  export default Create;