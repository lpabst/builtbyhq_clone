import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMenu: false
    }
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  componentDidMount(){
    window.addEventListener('scroll', this.closeMenu)
  }

  openMenu(){
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  closeMenu(){
    if (this.state.showMenu){
      this.setState({
        showMenu: false
      })
    }
  }

  render() {

    let menuStyle = null;
    let hamStyle = null;
    if (this.state.showMenu){
      menuStyle = { right: '10px' }
      hamStyle = { top: '-70px' }
    }else{
      menuStyle = { right: '-150px' }
      hamStyle = { top: '0px' }
    }

    return (
      <div className="header">

        <Link to='/' className="header_logo">HQ</Link>
        
        <div className='right_nav'>
          <div className='ham' onClick={ this.openMenu } style={hamStyle}>...</div>
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