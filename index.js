// react imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

// component import
import Container from './components/Container/Container';
import MusicAndVideo from './components/MusicAndVideo/MusicAndVideo';
import Store from './components/Store/Store';
import Tour from './components/Tour/Tour';
import Subscribe from './components/Subscribe/Subscribe';

// style import
import './style/style.css'

const ComponentToRender = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Container} />
      <Route exact path="/MusicAndVideo" component={MusicAndVideo} />
      <Route exact path="/Store" component={Store} />
      <Route exact path="/Tour" component={Tour} />
      <Route exact path="/Subscribe" component={Subscribe} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(<ComponentToRender />, document.getElementById('root'))
