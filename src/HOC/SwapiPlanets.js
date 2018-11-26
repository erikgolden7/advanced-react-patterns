import React from 'react';

const SwapiPlanets = props => {
  return (
    <div>
      <h3>{props.type}</h3>
      {props.data.map((e, i) => (
        <div key={i}>
          {e.name} -- {e.climate}
        </div>
      ))}
    </div>
  );
};

export default SwapiPlanets;
