import React, { Component } from 'react';
import './Home.css';

import Header from './../Header/Header.js';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="home">

        <Header />


      </div>
    );
  }
}


export default Home;