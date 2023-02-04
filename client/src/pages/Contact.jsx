
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contact() {
    return ( 
        <Container className="mt-5">
 <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email:
        </Form.Label>
        <Col sm={5}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalTextarea">
        <Form.Label column sm={2}>
          Message:
        </Form.Label>
        <Col sm={5}>
            <textarea className='form-control' id="textarea" rows="8" placeholder="Your message"></textarea>
          {/* <Form.Control type="textarea" placeholder="Your message" /> */}
        </Col>
      </Form.Group>


      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button variant="info" type="submit" className='contact-btn'>Send Message</Button>
        </Col>
      </Form.Group>
    </Form>           
        </Container>

        );
}

export default Contact;

