import React, { lazy } from 'react';

import TwoPointsShotting from '../skills/TwoPointsShotting';

const Dunk = lazy(() =>
  import('../skills/Dunk' /* webpackChunkName: "Dunk" */)
);

const Kd = () => {
  return (
    <>
      <h3>Kd</h3>
      <ul>
        <TwoPointsShotting />
        <Dunk />
      </ul>
    </>
  );
};

export default Kd;
