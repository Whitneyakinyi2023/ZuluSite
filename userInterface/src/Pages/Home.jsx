import React from 'react';
import Hero_image from '../Components/Hero_image';
import Promotion from '../Components/Promotion';
import Chat from './chat.jsx';

const Home = () => {
  return (
    <div>
      <Hero_image />
      <Promotion />
      <Chat />
    </div>
  );
};

export default Home;
