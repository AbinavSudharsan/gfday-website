import './App.css'
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import InteractiveModel from './interactiveModel';

const photoGallery = [
  {src: 'photo 1.jpg'},
  {src: 'photo 2.jpg'},
  {scr: 'photo 3.jpg'},
  {src: 'photo 4.jpg'},
  {src: 'photo 5.jpg'},
  {src: 'photo 6.jpg'},
  {src: 'photo 7.jpg'},
  {src: 'photo 8.jpg'},
  {src: 'photo 9.jpg'},
  {src: 'photo 10.jpg'},
  {src: 'photo 11.jpg'},
  {src: 'photo 12.jpg'},
]

function App(){
  return(
    
    <div className='page'>
      <div className = "video-container">
        <video className='fade-in-video' autoPlay loop muted playsInline>
          <source src='/flowerfield animation 2.mp4' type='video/mp4'/>
        </video>

        <audio autoPlay loop>
          <source src='/Godspeed audio.mp3' type='audio/mp3'/>
        </audio>
      </div>

      <div className='photogrid-header'>
        <h1>MY AMAZING GIRLFRIEND</h1>
      </div>

      <div className='photo-grid'>
        <div className='photo-item'><img src='/images/photo 1.jpg'/></div>
        <div className='photo-item'><img src='/images/photo 2.jpg'/></div>
        <div className='photo-item'><img src='/images/photo 3.jpg'/></div>
        <div className='photo-item'><img src='/images/photo 4.jpg'/></div>
        <div className='photo-item'><img src='/images/photo 5.jpg'/></div>
        <div className='photo-item'><img src='/images/photo 6.jpg'/></div>
        <div className='photo-item'><img src='/images/photo 7.jpg'/></div>
        <div className='photo-item'><img src='/images/photo 8.jpg'/></div>
        <div className='photo-item'><img src='/images/photo 11.jpg'/></div>
        <div className='photo-item'><img src='/images/photo 19.jpg'/></div>
        <div className='photo-item'><img src='/images/photo 16.jpg'/></div>
        <div className='photo-item'><img src='/images/photo 17.jpg'/></div>
      </div>

      <div className="love-letter-section">
        <h2>To the love of my life</h2>
        <p>
          Ammu kuttii
        </p>
       </div>
       <InteractiveModel />
      </div>
  );
}

export default App;