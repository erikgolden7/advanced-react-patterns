import React from 'react';

const SwapiPeople = props => {
  return (
    <div>
      <h3>{props.type}</h3>
      {props.data.map((e, i) => (
        <div key={i}>{e.name}</div>
      ))}
    </div>
  );
};

export default SwapiPeople;
