import React from 'react';
import headerImage from '../../assets';

const Header = () => (
  <div className="row m-4">
    <div className="col-md-12 d-flex justify-content-center align-items-baseline container-fluid">
      <div className="lc-block py-4">
        <img className="img-fluid img-thumbnail" src={headerImage} alt="Hero" />
      </div>
    </div>
  </div>
);

export default Header;
