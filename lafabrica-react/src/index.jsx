import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import ReactGA from 'react-ga';

import '../assets/styles/index.scss';

ReactGA.initialize('UA-108689415-1');
const onUpdate = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

import App from './app';

ReactDOM.render(
  <BrowserRouter onUpdate={onUpdate}>
    <Route path="/" component={App}/>
  </BrowserRouter>,
  document.getElementById('app')
);
