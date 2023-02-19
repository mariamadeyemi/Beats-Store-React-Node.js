import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function Register() {
    return ( 
        <section className="register mt-3 mb-5">
            <Container>
                <Row className='justify-content-center'>
                    <Col md={6}>
                    <h3 className='text-center mb-5 register-h3'>BeatsHill</h3>
                <p className='register-p'>Register</p>    
                    <Form>
                <Row>
                <Col md={6} className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="your first name" />
                    </Col>

                    <Col md={6} className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="your last name" />
                    </Col>

                    <Col md={12} className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="your email address" />
                    </Col>

                    <Col md={12} className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="your password" />
                    </Col>
                    <Col md={12} className="mb-3">
                    <Button type="submit" className='signup-btn'>Create Account</Button>
                    </Col>
                </Row>    
                </Form>

                <p className='already text-center mt-3'>Already have an account?<Link to="/login" className='log-link'>Login now</Link> </p>
                    </Col>
                </Row>
                
                
            </Container>
        </section>
     );
}

export default Register;