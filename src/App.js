import React, { Component } from 'react';
import {Main} from 'antd';
import RouterIndex from './router/index';
import MainHeader from './view/main-header'
import MainFooter from './view/main-footer'
import Index from './view/index'
import './view/index.css'

class App extends Component {
  render() {
    return (
      <div className="pageWrap">
        <MainHeader />
        <main className="main">
          <Index />
        </main>
        <MainFooter />  
      </div>
    );
  }
}

export default App;
