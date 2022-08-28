import React from 'react';
import { headerImage, image1, image2 } from '../../assets';

const Header = () => {
  const images = [headerImage, image1, image2];
  console.log(images);
 return (
  <div className="container-fluid">
    <div className="row m-4">
        <div>
          <img className="img-fluid img-thumbnail" src={headerImage} alt="Hero" />
        </div>
        <div>
          <img className="img-fluid img-thumbnail" src={image1} alt="Hero" />
        </div>
        <div>
          <img className="img-fluid img-thumbnail" src={image2} alt="Hero" />
        </div>
      </div>
  </div>
  )
};

export default Header;
