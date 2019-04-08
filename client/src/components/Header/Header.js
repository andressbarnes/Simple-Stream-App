import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react';

import GoogleAuth from '../GoogleAuth';

const NavHeader = () => {
  return (
    <Segment>
      <Header>
        <div className='ui secondary pointer menu'>
          <Link to='/' className='item'>
            Home
          </Link>
          <div className='right menu'>
            <Link to='/streams/show' className='item'>
              All Streams
            </Link>
            <GoogleAuth />
          </div>
        </div>
      </Header>
    </Segment>
  );
};

export default NavHeader;
