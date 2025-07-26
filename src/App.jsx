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
        <InteractiveModel/>
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
        <div className="letter-container">
          <h2>To the love of my life,</h2>
          <p>
            Ammu kuttii, en thangamm, en vairamm.. Happy Girlfriend's day Anu kaii!! 
            My love, i know things have been a little rough these past few days darling.. and it is my fault.. it is my fault that things are like this right now. Seeing you angry, or upset aches my heart kutti.. it makes me scared, and i feel like a little boy who got lost in a shop wondering where my parents are kutti.. I fuck up.. i always do kutti.. But if there is one thing that i am certain about, it is the fact that I love you so much, more than myself and anything else in the world, and that I would do anything for you darling. 
            I am missing you.. every single second of the day kutti. When you said we are done and that I am not yours anymore, my entire world was crashing down kutti.. why did you say that to me thangam.. I promise you that no matter what darling, I'll always put all my efforts for you and do anything that i can to make you feel special and loved sweetheart. Everywhere I go, I think to myself what I can do for my baby, what I can get for my baby.. You are on my mind always and forever my love. I miss you so much kutti.. even while making this website, I see all your photos and it takes me back to that time and it fills me with so much joy kutti.. Seeing you smile and be happy means everything to me, and it makes me so happy as well thangam. 
            I want to spend the rest of my life with you my love.. I dont want anyone else, I dont want to bother with anyone else.. You are all that I want and need kutti. Everytime I see your photos.. I see the most beautiful face God ever created.. and it makes me to want to come running to you as fast as I can kutti. I promise you that I will redeem myself darling, I'll learn how to communicate properly.. and I'll learn how to be mature.. and I'll stop being defensive my love. I am working very hard to change all these things about myself sweetie. I want to be the best version I can for you, to keep you happy and make you feel loved always. I will always take care of you sweetheart! You are everything to me, and I will always fight for you regardless of what happens my love. 
            You are my happiness kutti, and you make me complete. And I am nothing without you my love. Please forgive me darling, I'll always try my best for you chella kutti.
            Thank you for bringing light into my life and making everyday soo much more fun and alive kutti. You are the reason I look forward to waking up the next day sweetheart. In life and death, you are all I need my love.
            I hope you like the website I made for you thangamm eheheheeh. Ummaaaa 😘😘😘😘😘😘😘😘. I love you soooo much anu kaiii. juku juku juku juku juku juku juku juku juku juku juku juku juku juku juku oppaii baby!!!
          </p>
          <p>
            Forever yours,<br />
            Abi kutti
          </p>
        </div>
      </div>
      </div>
  );
}

export default App;