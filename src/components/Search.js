import React, { useState, useContext } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import JobsContext from '../context/jobs';
import Alert from 'react-bootstrap/Alert'
import { BASE_API_URL } from '../utils/constants';

const Search = () => {
  const { onSearch } = useContext(JobsContext);
  const [show, setShow] = useState(false);

  const [state, setState] = useState({
    name: '',
    phoneNumber: '',
    address:'',
    medicines:''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'full_time') {
      setState((prevState) => ({
        ...state,
        [name]: !prevState.full_time
      }));
    } else {
      setState({
        ...state,
        [name]: value
      });
    }
  };
  const baseUrl = 'http://localhost:5000/accounts'

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(state);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
  };
  fetch(`${BASE_API_URL}/accounts`, requestOptions)
      .then(response => response.json())
      .then(data => {setShow(true);setState({
        name: '',
        phoneNumber: '',
        address:'',
        medicines:''
      })});
    onSearch(state);
  };

  return (
    <div className="search-section">
      <Form className="search-form" onSubmit={handleSearch}>
        <Row>
          <Col md={3}>
          <h1>Name :</h1></Col>
          <Col>
            <Form.Group controlId="name">
              <Form.Control
                type="text"
                name="name"
                value={state.name || ''}
                placeholder="Enter Name"
                onChange={handleInputChange}
              />
            </Form.Group>
            </Col>
           
        </Row>
        <Row>
          <Col md={3}>
          <h1>Phone number :</h1></Col>
          <Col>
        <Form.Group controlId="phoneNumber">
              <Form.Control
                type="text"
                name="phoneNumber"
                value={state.phoneNumber || ''}
                placeholder="Enter Phone Number"
                onChange={handleInputChange}
              />
            </Form.Group>
           </Col>
        </Row>
        <Row>
          <Col md={3}>
          <h1>Address :</h1></Col>
          <Col>
        <Form.Group controlId="address">
              <Form.Control
                type="text"
                name="address"
                value={state.address || ''}
                placeholder="Enter address"
                onChange={handleInputChange}
              />
            </Form.Group>
           </Col>
        </Row>
        <Row>
          <Col md={3}>
          <h1>Medicines :</h1></Col>
          <Col>
        <Form.Group controlId="medicines">
              <Form.Control
                type="text"
                name="medicines"
                value={state.medicines || ''}
                placeholder="Enter list of Medicines"
                onChange={handleInputChange}
              />
            </Form.Group>
           </Col>
        </Row>
        <Row>
        <Button variant="primary" type="submit" className="btn-search">
              Search
            </Button>
        </Row>
     
      </Form>

      <Alert show={show} variant="success" style={{marginTop:"40px",paddingTop:"40px"}}>
        <Alert.Heading>Medcina</Alert.Heading>
        <p>
        Thank you for your order. Our team will contact you soon. Take care
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success" size="lg">
            Close 
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default Search;
