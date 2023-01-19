import React from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import classes from "./Form.module.css";

const FormComponent = () => {
  return (
    <div className={classes.formContainer}>
      <Form>
        <h1>Form examples</h1>
        <div>
          {" "}
          <h3>Labels:</h3>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className={classes.label}
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className={classes.label}
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Comments"
            className={classes.label}
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <h3>Inputs:</h3>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
          </InputGroup>
          <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">
              https://example.com/users/
            </InputGroup.Text>
            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>With textarea</InputGroup.Text>
            <Form.Control as="textarea" aria-label="With textarea" />
          </InputGroup>
          <h3>Checkbox and radio:</h3>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
          <InputGroup>
            <InputGroup.Radio aria-label="Radio button for following text input" />
            <Form.Control aria-label="Text input with radio button" />
          </InputGroup>
          <h3>Alerts:</h3>
          {[
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "info",
            "light",
            "dark",
          ].map((variant) => (
            <Alert key={variant} variant={variant}>
              This is a {variant} alert with{" "}
              <Alert.Link href="#">an example link</Alert.Link>. Give it a click
              if you like.
            </Alert>
          ))}
        </div>
      </Form>
    </div>
  );
};

export default FormComponent;
