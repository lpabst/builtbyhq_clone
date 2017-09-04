
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import Careers from './components/Careers/Careers.js';
import Contact from './components/Contact/Contact.js';
import Openings from './components/Openings/Openings.js';
import OpeningsIOS from './components/OpeningsIOS/OpeningsIOS.js';
import OpeningsPM from './components/OpeningsPM/OpeningsPM.js';
import OpeningsUX from './components/OpeningsUX/OpeningsUX.js';
import OpeningsFrontEnd from './components/OpeningsFrontEnd/OpeningsFrontEnd.js';
import Story from './components/Story/Story.js';
import Work from './components/Work/Work.js';
import WorkWebDev from './components/WorkWebDev/WorkWebDev.js';
import WorkMobile from './components/WorkMobile/WorkMobile.js';
import WorkUIUX from './components/WorkUIUX/WorkUIUX.js';
import WorkBranding from './components/WorkBranding/WorkBranding.js';


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route component={ Careers } path='/careers' exact />
        <Route component={ Contact } path='/contact' exact />
        <Route component={ Openings } path='/openings' exact />
        <Route component={ OpeningsIOS } path='/openings/ios-developer' exact />
        <Route component={ OpeningsPM } path='/openings/project-manager' exact />
        <Route component={ OpeningsUX } path='/openings/ux-designer' exact />
        <Route component={ OpeningsFrontEnd } path='/openings/frontend-developer' exact />
        <Route component={ Story } path='/story' exact />
        <Route component={ Work } path='/work' exact />
        <Route component={ WorkWebDev } path='/work/web-development' exact />
        <Route component={ WorkMobile } path='/work/mobile-app-development' exact />
        <Route component={ WorkUIUX } path='/work/ui-ux-design' exact />
        <Route component={ WorkBranding } path='/work/branding' exact />

    </Switch>
)
