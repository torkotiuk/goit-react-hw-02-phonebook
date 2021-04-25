import React from 'react';

const Filter = ({ valueState, filterByName }) => {
  return (
    <label>
      Filter by name:{' '}
      <input type="text" value={valueState} onChange={filterByName} />
    </label>
  );
};

export default Filter;
