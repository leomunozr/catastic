import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navigator = (props) => {
  const isActive = (route) => {
    return route === props.location.pathname ? 'active' : '';
  };

  return (
    <nav>
      <Link to="/" className={isActive('/')}>Home</Link>
      <Link to="/favorites" className={isActive('/favorites')}>Favs</Link>
    </nav>
  );
};

export default withRouter(Navigator);
