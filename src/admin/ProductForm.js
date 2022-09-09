/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ProductForm = ({
  description, stock, name, price,
  handleBody, setStock, setName, setPrice, setImages, sku, setSku, sendData,
}) => (
  <Container>
    <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Add a Product</h1>
    <Row>
      <Col lg={9} md={6} sm={12} className="p-5 m-auto shadow-sm rounded">
        <Form onSubmit={sendData}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              name={name}
            />
            <Form.Text className="text-muted">
              This name will appear on products list in the store.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>SKU</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the SKU"
              onChange={(e) => setSku(e.target.value)}
              name={sku}
              value={sku}
            />
            <Form.Text className="text-muted">
              This is a stock keeping unit used to track inventory levels.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Enter price in ZMK" onChange={(e) => setPrice(e.target.value)} value={price} />
            <Form.Text className="text-muted">
              The store currently supports Zambian Kwacha as a currency.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Stock</Form.Label>
            <Form.Control type="number" placeholder="Enter stock" onChange={(e) => setStock(e.target.value)} value={stock} />
            <Form.Text className="text-muted">
              The store currently supports Zambian Kwacha as a currency.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Images</Form.Label>
            <Form.Control type="file" accept="image/*" multiple onChange={(e) => setImages(e.target.files[0])} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={handleBody}
              name={description}
            />
            <Form.Text className="text-muted">
              Select keywords that will help make this product visible to search engines.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Publish" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>

      </Col>
    </Row>
  </Container>
);

export default ProductForm;
