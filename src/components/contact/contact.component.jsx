import "./contact.style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";

import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const defaultFormFields = {
    email: "",
    name: "",
    message: "",
  };
  const [formFields, setFormFeilds] = useState(defaultFormFields);
  const { email, name, message } = formFields;
  const clearFields = () => setFormFeilds(defaultFormFields);
  // send message to athrist foundation function
  const postMail = async (name, email, message) => {
    const data = { name, email, message };
    axios
      .post("https://athirst-backend.herokuapp.com/post-mail", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const formSubmit = (event) => {
    const onSubmitHandler = () => postMail(name, email, message);
    onSubmitHandler();
    clearFields();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFeilds({ ...formFields, [name]: value });
  };
  return (
    <div className="contactDiv" id="contact">
      <Container>
        <Row mt-3>
          <Col md={6}>
            <div className="contactRow">
              <h2>CONTACTS</h2>
              <p>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="contactIcons"
                />{" "}
                Suit 15 works plaza opposite Kujore bus stop Ojota Ogudu road
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="contactIcons" />{" "}
                +2347062643699
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="contactIcons" />{" "}
                theathirstfoundation@gmail.com
              </p>
              <p>
                {" "}
                <Icon
                  icon="akar-icons:facebook-fill"
                  className="contactIcons"
                />
                <Icon
                  icon="akar-icons:instagram-fill"
                  className="contactIcons"
                />
                <Icon icon="akar-icons:twitter-fill" className="contactIcons" />
                <Icon
                  icon="akar-icons:linkedin-box-fill"
                  className="contactIcons"
                />
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="contactRow">
              <h2>Contact Us</h2>
              <p>
                If you would like more information or would be interested in
                donating yo help us achieve our mission, please fill out the
                form below and someone will get back to you.{" "}
              </p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                    name="name"
                    value={name}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter mail"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                  />
                </Form.Group>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    required
                    onChange={handleChange}
                    name="message"
                    value={message}
                  ></textarea>
                </div>
              </Form>
              <button className="contactSubmitBtn" onClick={formSubmit}>
                Submit
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
