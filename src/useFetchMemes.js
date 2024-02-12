// src/useFetchMemes.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchMemes = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMemes = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.imgflip.com/get_memes');
      setMemes(response.data.data.memes);
    } catch (error) {
      console.error('Failed to fetch memes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  return { memes, loading, fetchMemes };
};

export default useFetchMemes;
