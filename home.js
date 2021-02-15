import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.css'
import Popup from './Popup'
class Home extends Component {
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
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  click = () => {
    this.setState({popup: true});
  }
    render() {
      return (
        <div className='home-body'>
          <Popup trigger={this.state.popup}></Popup>
          <div className='slider'>
          
              <header><div className='sign-in'>Sign In</div><div onClick={this.click} className='join'>Join</div></header>
              
              <h2 className='sub-title'>Find the perfect freelance services for your business</h2>
              <div className='inputs'>
                
              <input className='search' placeholder='Search For A Job Post' type="text" value={this.state.value} onChange={this.handleChange} />
    
              <input type="submit" value="Search" className='search1' />
              </div>
              
             <div className='img-slider'>
             </div>
          </div>
          
        </div>
        
      );
    }
  }
  
  export default Home;