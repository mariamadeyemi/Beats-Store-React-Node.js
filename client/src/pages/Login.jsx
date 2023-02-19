import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import logo from "../../src/assets/logo-1.png"

function Login() {
    return ( 
        <section className="login mt-5 mb-5">
            <Container>
                <Row className="justify-content-center text-center">
                <Col md={5}>
           <Form>
            <img src={logo} className="logo-img mb-3" alt="logo"/>
            <p className='mb-3 sign-p'>Sign In</p>
            <Form.Control type="email" className='mb-3' placeholder="email"/>
            <Form.Control type="password" className='mb-3' placeholder="password"/>
            <Button type="submit" className='mb-3 login-btn'>Sign In</Button>
            <p className='forgot'>Forgot your password?</p>
            <p className='no-acc'>Don't have an account?</p>
            <Button className='create-btn'>Create new account</Button>
           </Form>
                </Col>     
                </Row>
            </Container>
        </section>
     );
}

export default Login;