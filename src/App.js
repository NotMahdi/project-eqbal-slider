import React from 'react';
import './App.css';
import ImageSlider from './components/imageSlider';
import { Fragment } from 'react';

function App() {
  const slides = [
    {url: 'http://localhost:3000/1.jpg', title: 'my flowers are beautiful'},
    {url: 'http://localhost:3000/2.jpg', title: 'your flowers are not beautiful'},
    {url: 'http://localhost:3000/3.jpg', title: 'his flowers are beautiful'},
    {url: 'http://localhost:3000/4.jpg', title: 'his flowers are not beautiful'},
    {url: 'http://localhost:3000/5.jpg', title: 'her flowers are beautiful'},
  ]
  return (
    <Fragment>
      <div className='slider'>
      <ImageSlider slides={slides} />
      </div>
    </Fragment>
  );
}

export default App;
