import React from 'react';

const CompB = ({count, handleAdd, handleRemove}) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CompB;
