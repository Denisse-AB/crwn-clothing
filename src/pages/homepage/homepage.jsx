import React from 'react';
import Directory from "../../components/directory/directory";
import { HomePageContainer } from './homepage-style';

// import './homepage.scss';

// Functional component
const HomePage = () => (
  <HomePageContainer >
    <Directory />
  </HomePageContainer >
)

export default HomePage;


/*
before style-components

const HomePage = () => (
  <div className='homepage'>
    <Directory />
  </div>
)
*/