import React from 'react';
import './index.css'

const Toolbar = ({ onExport }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <button className='btn' onClick={onExport}>Export as PNG</button>
    </div>
  );
};

export default Toolbar;
