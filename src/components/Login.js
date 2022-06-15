import React, { Component } from 'react'
import { 
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Card,
  Button
} from 'react-bootstrap';
import './Login.css';

import {AiFillEyeInvisible} from 'react-icons/ai';

export default class Login extends Component {
  render() {
    return (
      <Container fluid className="landingpage">
        <Row>
          <Col lg="6" md="6" sm="12" >
              <div className="half_left">
                
                <div className='nav-content'>
                 
                   <h3>AUTHORIZATION FOR EXPENDITURE REQUESTS</h3>
                   <h1>-AFE</h1>
                </div>
                
              </div>
          </Col>
          <Col lg="6" md="6" sm="12" style={{ position: 'relative', display: 'flex' }}>
       
          <Card className="logincard">
            <Card.Body  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
              <Card.Title className='mb-5' style={{ fontSize: '32px' }}>Login</Card.Title>
             
              <FormControl
                  placeholder="Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  className='mb-3'
                  style={{ fontSize: '20px' }} size="lg"
              />

              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Password"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  style={{ fontSize: '20px' }} size="lg"
                />
                <InputGroup.Text id="basic-addon2">
                  <AiFillEyeInvisible/>
                </InputGroup.Text>
              </InputGroup>
              <Button className='full-width btn btn-info' >Login</Button>
              <h5>Forgot Password?</h5>
            </Card.Body>
          </Card>

            
          </Col>
        </Row>
      </Container>
    )
  }
}
