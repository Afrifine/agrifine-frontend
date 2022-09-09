import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import getProducts from '../../services/product.service';
// import data from '../../services/data';
// import { prodStyles } from '../../styles';

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);

  const { isProduct } = data;

  useEffect(() => {
    if (!isProduct) {
      dispatch(getProducts());
    }
  }, [isProduct]);

  const prod = data.products;

  return (
    <>
      {prod && prod.map((product) => (
        <p key={product.id}>{parse(product.description)}</p>
      ))}
    </>
  );
};

export default Products;
