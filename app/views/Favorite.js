import React from 'react';

const Favorite = (props) => {
  return (
    <div className="favorite">
      <span onClick={() => props.removeFav(props.id)}>&#9747;</span>
      <img src={props.url} alt="" />
    </div>
  );
};

export default Favorite;
