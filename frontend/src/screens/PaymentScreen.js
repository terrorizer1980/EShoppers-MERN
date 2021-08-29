import React, { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
import CheckOutSteps from "../components/CheckOutSteps";
import FormContainer from "../components/FormContainer";

const PaymentScreen = ({ history }) => {
  const dispatch = useDispatch();

  const { shippingAddress } = useSelector((state) => state.cart);

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <FormContainer>
      <CheckOutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Payment Method </Form.Label>
          <Col>
            <Form.Check
              type='radio'
              name='paymentMethod'
              value='PayPal'
              label='PayPal or Credit Card'
              id='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
