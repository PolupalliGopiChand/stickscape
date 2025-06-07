import React, { useRef } from 'react';
import { Stage, Layer } from 'react-konva';
import { useStore } from '../store';
import Sticker from './Sticker';
import Toolbar from './Toolbar';
import StickerPanel from './StickerPanel';
import './index.css'

const CanvasBoard = () => {
  const stageRef = useRef();
  const stickers = useStore((state) => state.stickers);

  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    const link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <StickerPanel />
      <Stage className='canvas-board' width={600} height={400} ref={stageRef}>
        <Layer>
          {stickers.map((sticker, index) => (
            <Sticker key={index} index={index} sticker={sticker} />
          ))}
        </Layer>
      </Stage>
      <Toolbar onExport={handleExport} />
    </div>
  );
};

export default CanvasBoard;
