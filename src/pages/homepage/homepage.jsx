import React from 'react';
import Directory from "../../components/directory/directory";

import './homepage.scss';

// Functional component, no return statement and {}
const HomePage = () => (
  <div className='homepage'>
    <Directory />
  </div>
)

export default HomePage;