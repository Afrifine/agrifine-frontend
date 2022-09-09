import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ProductForm from './ProductForm';
import { createProducts } from '../services/product.service';

const AddProduct = () => {
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImages] = useState(null);
  const [sku, setSku] = useState('');

  const dispatch = useDispatch();

  const sendData = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('product[name]', name);
    formData.append('product[description]', description);
    formData.append('product[price]', price);
    formData.append('product[image]', image);
    formData.append('product[stock]', stock);
    formData.append('product[sku]', sku);
    formData.append('product[user_id]', 1);
    formData.append('product[category_id]', 1);

    dispatch(createProducts(formData));
    setName('');
    setDescription('');
    setPrice(0);
    setStock(0);
    setSku('');
  };

  const handleBody = (e) => {
    setDescription(e);
  };

  return (
    <ProductForm
      description={description}
      name={name}
      stock={stock}
      price={price}
      images={image}
      setImages={setImages}
      setName={setName}
      setStock={setStock}
      setPrice={setPrice}
      handleBody={handleBody}
      sku={sku}
      setSku={setSku}
      sendData={sendData}
    />
  );
};

export default AddProduct;
