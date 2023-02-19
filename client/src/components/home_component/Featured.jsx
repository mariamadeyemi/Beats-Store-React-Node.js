import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SingleProduct from "../store_component/SingleProduct";



function Featured({products}) {
 
    return ( 
        <section className="featured-products">
          <Container>
            <Row className="align-items-center">
              <Col md={10}>
              <h2 className="featured-text mb-4">Featured</h2>
              </Col>

              {

                products.map((product)=>{
                 
                  return <SingleProduct key={product.id} {...product} />
                })
              }
            </Row>
          </Container>
          
           
        
        </section>
     );
}

export default Featured;