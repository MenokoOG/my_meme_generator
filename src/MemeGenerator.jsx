// src/MemeGenerator.js
import React, { useState } from 'react';
import useFetchMemes from './useFetchMemes';
import MemeGeneratorForm from './MemeGeneratorForm';
import { v4 as uuidv4 } from 'uuid';

const MemeGenerator = () => {
  const { memes, loading, fetchMemes } = useFetchMemes();
  const [createdMemes, setCreatedMemes] = useState([]);
  const [currentMeme, setCurrentMeme] = useState(null);

  const addMeme = (memeText) => {
    const newMeme = { id: uuidv4(), ...memeText, imageUrl: currentMeme.url };
    setCreatedMemes([...createdMemes, newMeme]);
  };

  const deleteMeme = (id) => {
    setCreatedMemes(createdMemes.filter(meme => meme.id !== id));
  };

  // To be implemented: editing an existing meme
  const editMeme = (id, updatedText) => {
    // Logic for editing a meme
  };

  if (loading) return <p>Loading...</p>;

  if (!currentMeme && memes.length > 0) {
    setCurrentMeme(memes[Math.floor(Math.random() * memes.length)]);
  }

  return (
    <div>
      <h1>Menoko OG's React Meme  Generator</h1>
      <button onClick={() => setCurrentMeme(memes[Math.floor(Math.random() * memes.length)])} className="refresh">Refresh Meme Image</button>
      <MemeGeneratorForm onSubmit={addMeme} memeImage={currentMeme} />
      {/* Display created memes */}
      <div>
        {createdMemes.map(meme => (
          <div key={meme.id}>
            <img src={meme.imageUrl} alt="Created Meme" />
            <p>{meme.topText}</p>
            <p>{meme.bottomText}</p>
            <button onClick={() => deleteMeme(meme.id)} className="delete">Delete</button>
            {/* Button for editing to be added */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemeGenerator;
