import { useContext, useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

function Register() {
    const navigate = useNavigate()
    const {search} = useLocation()
    const {currentUser, signup} = useContext(AuthContext)
    const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

    const [inputs, setInputs] = useState({})
    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setInputs(values=>({...values, [name]: value}))
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            await signup(inputs)
            navigate(redirect || "/")
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (currentUser) {
          navigate(redirect);
        }
      }, [navigate, redirect, currentUser]);
    return ( 
        <section className="register mt-3 mb-5">
            <Container>
                <Row className='justify-content-center'>
                    <Col md={6}>
                    <h3 className='text-center mb-5 register-h3'>BeatsHill</h3>
                <p className='register-p'>Register</p>    
                    <Form onSubmit={handleSubmit}>
                <Row>
                <Col md={6} className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="your first name" name="first_name" onChange={handleChange}/>
                    </Col>

                    <Col md={6} className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="your last name" name="last_name" onChange={handleChange}/>
                    </Col>

                    <Col md={12} className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control name="email_address" type="email" placeholder="your email address" onChange={handleChange}/>
                    </Col>

                    <Col md={12} className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="your password" name="password" onChange={handleChange}/>
                    </Col>
                    <Col md={12} className="mb-3">
                    <Button type="submit" className='signup-btn'>Create Account</Button>
                    </Col>
                </Row>    
                </Form>

                <p className='already text-center mt-3'>Already have an account?<Link to={`/login?redirect=${redirect}`} className='log-link'>Login now</Link> </p>
                    </Col>
                </Row>
                
                
            </Container>
        </section>
     );
}

export default Register;