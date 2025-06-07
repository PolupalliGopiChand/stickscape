import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';
import { useStore } from '../store';

const Sticker = ({ index, sticker }) => {
  const [image] = useImage(sticker.src);
  const removeSticker = useStore((state) => state.removeSticker);
  const updateStickerPosition = useStore((state) => state.updateStickerPosition);

  const handleDragEnd = (e) => {
    const x = Math.round(e.target.x() / 40) * 40;
    const y = Math.round(e.target.y() / 40) * 40;
    updateStickerPosition(index, { x, y });
  };

  const handleDblClick = () => {
    removeSticker(index);
  };

  return (
    <Image
      image={image}
      x={sticker.x}
      y={sticker.y}
      width={sticker.width}
      height={sticker.height}
      draggable
      onDragEnd={handleDragEnd}
      onDblClick={handleDblClick}
    />
  );
};

export default Sticker;
