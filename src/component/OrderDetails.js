import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";

export default function () {
  const initial = {
    items: [
      {
        name: "MacBook",
        qty: 1,
        rate: 100000,
      },
      {
        name: "Dell Inspiron",
        qty: 1,
        rate: 90000,
      },
    ],
  };

  const [state, setState] = useState(initial);

  function addItem(item) {
    setState({ items: [...state.items, item] });
  }
  return (
    <div>
      <h1 className="text-center">Order Details</h1>
      <div className="d-flex justify-content-end">
        <AddItems onAdd={addItem} />
      </div>
      <Table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Rate</td>
            <td>Qty</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          {state.items.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.rate}</td>
              <td>{item.qty}</td>
              <td>{item.rate * item.qty}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function AddItems({ onAdd }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleAdd = () => {
    onAdd({ name, qty, rate: 100 });
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [qty, setQty] = useState(0);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Items
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Item</Form.Label>
              <Form.Control
                type-="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Qty</Form.Label>
              <Form.Control
                type="number"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
