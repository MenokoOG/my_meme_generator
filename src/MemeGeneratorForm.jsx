// src/MemeGeneratorForm.js
import React, { useState } from 'react';

const MemeGeneratorForm = ({ onSubmit, memeImage }) => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ topText, bottomText });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Top Text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
        <button type="submit" className="submit">Generate Meme</button>
      </form>
      {memeImage && (
        <div className="meme-preview">
          <img src={memeImage.url} alt="meme preview" />
          <h2 className="top-text">{topText}</h2>
          <h2 className="bottom-text">{bottomText}</h2>
        </div>
      )}
    </div>
  );
};

export default MemeGeneratorForm;
