import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


class Header extends Component {

  render() {
    return (
      <div className="header">

        <Link className="header_logo" to="/">HQ</Link>
        
        <div className='right_nav'>
          <div className='ham'>...</div>
          <ul className='menu'>
            <li>WORK</li>
            <li>OUR STORY</li>
            <li>BLOG</li>
            <li>CAREERS</li>
            <li>CONTACT</li>
          </ul>
        </div>

      </div>
    );
  }
}


export default Header;