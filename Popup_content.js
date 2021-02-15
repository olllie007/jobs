import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.css'
import Popup from './Popup'
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      popup: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    localStorage.setItem('email', this.state.value);
  }

  handleSubmit(event) {
   
    
    event.preventDefault();
     
      
  }
    render() {
      return (
        <div >
          
              
              <input className='email-submit' placeholder='Enter Your Email' type="email" value={this.state.value} onChange={this.handleChange} />
              <br/>
              <Link to='/jobs' >
                  
                  <input type="submit" value="Continue" className='email'/>
              </Link>
              
              
          
        </div>
        
      );
    }
  }
  
  export default Content;