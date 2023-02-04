import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { LinkContainer } from 'react-router-bootstrap';
import imageOne from "../../assets/store-img/woman-listening-to-music.jpg"
function Blog() {
    return ( 
        <section className="blog-home">
            <Container>
                <Row className="justify-content-center">
            <Col md={10} className="blog-container mb-5">
  
                <div className="pt-3 pb-5"><h1>Blog</h1></div> 

                <LinkContainer to="/post">
        <div className="posts-container pb-3">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                    <p className="date">January 20, 2023</p>
                    <p className="post-des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, labore esse laboriosam tempore ad earum!
                    </p>
                </div>     
            </LinkContainer>
               

            <LinkContainer to="/post">
                            <div className="posts-container pb-3">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                    <p className="date">January 20, 2023</p>
                    <p className="post-des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, labore esse laboriosam tempore ad earum!
                    </p>
                </div>
            </LinkContainer>


                        </Col>

                      
                </Row>
        
       

            </Container>

        </section>
     );
}

export default Blog;