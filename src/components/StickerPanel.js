import React from 'react';
import { useStore } from '../store';
import emoji1 from '../assets/emoji1.png';
import emoji2 from '../assets/emoji2.png';
import emoji3 from '../assets/emoji3.png';
import './index.css'

const StickerPanel = () => {
  const addSticker = useStore((state) => state.addSticker);

  const handleAddSticker = (src) => {
    addSticker({
      src,
      x: 100,
      y: 100,
      width: 50,
      height: 50,
    });
  };

  return (
    <div className='btn-container' style={{ marginBottom: '10px' }}>
      <button className='btn' onClick={() => handleAddSticker(emoji1)}>emoji1</button>
      <button className='btn' onClick={() => handleAddSticker(emoji2)}>emoji2</button>
      <button className='btn' onClick={() => handleAddSticker(emoji3)}>emoji3</button>
    </div>
  );
};

export default StickerPanel;
