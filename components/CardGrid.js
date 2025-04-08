import React from 'react';

const CardGrid = ({ children, minWidth = '250px', gap = '1.5rem' }) => {
  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(${minWidth}, 1fr))`,
        gap: gap,
        width: '100%',
        margin: '0 auto'
      }}
    >
      {children}
    </div>
  );
};

export default CardGrid;