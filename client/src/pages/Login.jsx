import { useContext, useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from "../../src/assets/logo-1.png"
import { AuthContext } from '../context/authContext';

function Login() {
    const {login, currentUser} = useContext(AuthContext)
    const {search} = useLocation();
    const redirectUrl = new URLSearchParams(search).get("redirect")
    const redirect = redirectUrl ? redirectUrl : "/";
    const [inputs, setInputs] = useState({})
    const navigate = useNavigate()

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setInputs(values=>({...values, [name]: value}))
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            await login(inputs)
            navigate(redirect || "/")
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        if(currentUser) {
            navigate(redirect)
        }
    }, [navigate, redirect, currentUser])

    return ( 
        <section className="login mt-5 mb-5">
            <Container>
                <Row className="justify-content-center text-center">
                <Col md={5}>
           <Form onSubmit={handleSubmit}>
            <img src={logo} className="logo-img mb-3" alt="logo"/>
            <p className='mb-3 sign-p'>Sign In</p>
            <Form.Control type="email" className='mb-3' placeholder="email" name="email_address" onChange={handleChange}/>
            <Form.Control type="password" name="password" className='mb-3' onChange={handleChange} placeholder="password"/>
            <Button type="submit" className='mb-3 login-btn'>Sign In</Button>
            <p className='forgot'>Forgot your password?</p>
            <p className='no-acc'>Don't have an account?</p>
            <Button as={Link} to={`/sign-up?redirect=${redirect}`} className='create-btn'>Create new account</Button>
           </Form>
                </Col>     
                </Row>
            </Container>
        </section>
     );
}

export default Login;