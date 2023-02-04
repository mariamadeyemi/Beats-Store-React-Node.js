import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import imageFour from '../../assets/store-img/in-da-club.jpg'

function Product() {
    return ( 
        <section className="product">
            <Container>
                <Row>
                    <Col md={10}>
                    <img src={imageFour} alt="img" />
                    <div className="beat-tit">Burna type beat</div>
                    </Col>
                    <Col md={10}>
                    <Button>Add to Cart</Button>
                    </Col>
                </Row>
            </Container>
        </section>
        );
}

export default Product;