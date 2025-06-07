import React from 'react';
import { useStore } from '../store';
import emoji1 from '../assets/emoji1.png';
import emoji2 from '../assets/emoji2.png';
import emoji3 from '../assets/emoji3.png';

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
    <div style={{ marginBottom: '10px' }}>
      <button onClick={() => handleAddSticker(emoji1)}>😊</button>
      <button onClick={() => handleAddSticker(emoji2)}>🚀</button>
      <button onClick={() => handleAddSticker(emoji3)}>🎉</button>
    </div>
  );
};

export default StickerPanel;
