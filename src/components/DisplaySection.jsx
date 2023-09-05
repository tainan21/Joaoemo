import React from 'react';

const DisplaySection = ({ triggerPreview }) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/idream.boituva/';
  };

  return (
    <div className='display-section wrapper'>
      <h2 className="title">New</h2>
      <p className="text">Brilliant.</p>
      <span className="description">Clica em baixo não, vai bugar em</span>
      <button className="button" onClick={triggerPreview}>por favor, não clique aqui!</button>

      <button className="button" onClick={handleInstagramClick}>Vem pro insta</button>
      
      <button className="back-button" onClick={handleScrollToTop}>
        TOP
      </button>
    </div>
  );
};

export default DisplaySection;
