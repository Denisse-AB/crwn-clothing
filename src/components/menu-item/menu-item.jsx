import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.scss';

// React doesn't want you to pass props between components
// use withRouter to access them. history in this case
const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${linkUrl}`)}>
    <div
      className='background-image'
      // inline style css
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
