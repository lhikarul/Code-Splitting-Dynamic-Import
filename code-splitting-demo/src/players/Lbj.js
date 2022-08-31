import React, { lazy } from 'react';

import TwoPointsShotting from '../skills/TwoPointsShotting';
import Passing from '../skills/Passing';

const Dunk = lazy(() =>
  import('../skills/Dunk' /* webpackChunkName: "Dunk" */)
);

const Lbj = () => {
  return (
    <>
      <h3>LBJ</h3>
      <ul>
        <TwoPointsShotting />
        <Passing />
        <Dunk />
      </ul>
    </>
  );
};

export default Lbj;
