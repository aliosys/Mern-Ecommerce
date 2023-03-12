import React from 'react';
import {Nav} from 'react-bootstrap';
// import {div} from 'react-router-bootstrap';
import {NavLink} from 'react-router-dom';

const CheckoutSteps = ({step1, step2, step3, step4}) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <Nav.Link as={NavLink} to="/login">
            Sign In
          </Nav.Link>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <div to="/shipping">
            <Nav.Link as={NavLink} to="/shipping">
              Shipping
            </Nav.Link>
          </div>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <div to="/payment">
            <Nav.Link as={NavLink} to="/payment">
              Payment
            </Nav.Link>
          </div>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <div to="/placeorder">
            <Nav.Link as={NavLink} to="/placeorder">
              Place Order
            </Nav.Link>
          </div>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
