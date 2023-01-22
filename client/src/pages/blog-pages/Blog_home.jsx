import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import imageOne from "../../assets/store-img/woman-listening-to-music.jpg"
function Blog() {
    return ( 
        <section className="blog-home">
            <Container>
                <Row className="banner">
                    <Col md={10} className="text-center banner-text">
                        <h1>Welcome</h1>
                        
                    </Col>
                </Row>
        <Row className="justify-content-start">
        <Col md={7}>
        <div className="post">
        <img src={imageOne} className="img-fluid"></img>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque itaque repellendus optio sunt voluptate.</p>
        </div>

        <div className="post">
        <img src={imageOne} className="img-fluid"></img>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque itaque repellendus optio sunt voluptate.</p>
        </div>

        <div className="post">
        <img src={imageOne} className="img-fluid"></img>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque itaque repellendus optio sunt voluptate.</p>
        </div>
        </Col>

        <Col md={3}>
       
        <div> <p>Top Posts</p></div>
        
        </Col>

        </Row>

            </Container>

        </section>
     );
}

export default Blog;