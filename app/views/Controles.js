import React from 'react';

const Controles = (props) => {
  return (
    <div className="controles">
      <span onClick={props.nextImage}>&#9747;</span>
      <span onClick={props.likeImage}>&#9829;</span>
    </div>
  );
};

export default Controles;
