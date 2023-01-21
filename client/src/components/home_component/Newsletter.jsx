import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Newsletter() {
    return ( 
        <section className="newsletter">
        <Container>
       <Form>
        <Row className="align-items-center"> 
        <Col md={10}>
              <h2 className="newsletter-head mb-3">Newsletter</h2>  
            </Col>
            <Col md={4}>
            <p className="newsletter-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, architecto provident dolorem cupiditate quo, culpa quam ipsam saepe molestias repellendus quibusdam.</p>
            </Col>
        <Col md={4} className="my-1">
          <Form.Label htmlFor="inlineFormInputEmail" visuallyHidden>
            Email
          </Form.Label>
          <Form.Control type="email" id="inlineFormInputEmail" placeholder="Email address" />
        </Col>
       
        <Col md={4} className="my-1">
          <Button type="submit" className="newsletter-btn">Subscribe</Button>
        </Col>
        </Row>
    </Form>

        </Container>


        </section>
     );
}

export default Newsletter