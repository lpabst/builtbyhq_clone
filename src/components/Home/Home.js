import React, { Component } from 'react';
import Header from './../Header/Header.js';
import HomeHeader from './HomeHeader/HomeHeader.js';
import './Home.css';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="home">

        <Header />
        <HomeHeader />


      </div>
    );
  }
}


export default Home;