import React from 'react';
import data from '../../services/data';
import { prodStyles } from '../../styles';

const Products = () => (
  <>
    {data.map((product) => (
      <div className="container text-center" key={product.id}>
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-2 ">
            <div className="card">
              <img className={prodStyles.img} src={product.image} alt={product.name} />
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default Products;
