import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import styles from '../style/app.scss';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Oscp from './pages/Oscp';
import Blog from './pages/Blog'
import Post from './pages/Post'

const ScrollTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const Root = () =>
  <Router>
    <div>
       <Nav /> 
       <Route component={ScrollTop} /> 
      <Switch>
         <Route exact path="/" component={Home} />  
         <Route path="/contact" component={Contact} /> 
         <Route path="/oscp" component={Oscp} />
         <Route path ="/blog" component={Blog} />
         <Route path="/post/:slug" component={Post} /> 
      </Switch>
       <Footer /> 
    </div>
  </Router>

render(<Root />, document.getElementById('app'));
