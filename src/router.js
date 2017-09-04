
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import Blog from './components/Blog/Blog.js';
import Careers from './components/Careers/Careers.js';
import Contact from './components/Contact/Contact.js';
import Openings from './components/Openings/Openings.js';
import Story from './components/Story/Story.js';
import Work from './components/Work/Work.js';


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route component={ Blog } path='/blog' exact />
        <Route component={ Careers } path='/careers' exact />
        <Route component={ Contact } path='/contact' exact />
        <Route component={ Openings } path='/openings' exact />
        <Route component={ Story } path='/story' exact />
        <Route component={ Work } path='/work' exact />

    </Switch>
)
