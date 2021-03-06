import React from 'react';
import PropTypes from 'prop-types'
//import Header from './Header';

const Layout = ({ children, location }) =>
  <div>
    {/*<Header location={location} />*/}
    <div className="container">
      { children }
    </div>
  </div>;

Layout.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

export default Layout;
