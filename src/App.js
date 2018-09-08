import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import Landing from './Landing.js';
import Post from './Post.js';
import Food from './Food.js';
import Movie from './Movie.js';
import About from './About.js';




const post = {
  title: 'This is THE Blog (only one on this localhost anyway)',
  author: 'By Andres',
  body: 'This is the body!',
  comments: [ 'Was cool', 'Would read again' ]
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/'>Landing</Link>{' '}
            <Link to='/blog'>Blog</Link>{' '}
            <Link to='/food'>Favorite Food</Link>{' '}
            <Link to='/movie'>Favorite Movie</Link>{' '}
            <Link to='/about'>About Me</Link>{' '}
          </nav>
          <Route exact path='/' component={Landing} />
          <Route path='/blog' component={
            () => (<Post post={post} />) } />
          <Route path='/food' component={Food} />
          <Route path='/movie' component={Movie} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

// if component cannot be imported, use Post as default
export default App;
