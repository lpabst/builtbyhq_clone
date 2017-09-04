import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMenu: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {

    let menuStyle = null;
    if (this.state.showMenu){
      menuStyle = {
        right: '10px'
      }
    }else{
      menuStyle= {
        right: '-150px'
      }
    }

    return (
      <div className="header">

        <Link to='/' className="header_logo" to="/">HQ</Link>
        
        <div className='right_nav'>
          <div className='ham' onClick={ this.toggleMenu }>...</div>
          <div className='menu' style={menuStyle}>
            <Link to='/work'>WORK</Link>     
            <Link to='/story'>OUR STORY</Link>
            <Link to='/blog'>BLOG</Link>
            <Link to='/careers'>CAREERS</Link>
            <Link to='/contact'>CONTACT</Link>
          </div>
        </div>

      </div>
    );
  }
}


export default Header;