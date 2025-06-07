import React from 'react';

const Toolbar = ({ onExport }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <button onClick={onExport}>Export as PNG</button>
    </div>
  );
};

export default Toolbar;
