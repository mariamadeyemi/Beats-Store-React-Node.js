import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import imageFour from '../../assets/store-img/in-da-club.jpg'

function Page() {
    return ( 
        <section className="page">
            <Container>
                <Row className="align-items-start">
                    <Col md={8}>
                 <div className="post-content">
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
    <p className="page-date">Published on January 23, 2022</p>            
    <img src={imageFour} alt="" />        
    <p className="post-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repellat impedit est cum provident sit eveniet nisi ullam, voluptatibus quae porro voluptas et. Provident quasi hic totam? Iste dicta fugiat enim deserunt. Architecto tempora eum animi, iure error laboriosam natus!
    </p>
                    </div>  
                    </Col>

                    <Col md={4}>
        <div className="post-side">
<h2>More Articles</h2>
    <div className="post-side-content">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        <p className="side-date">January 16</p>
        </div> 

         <div className="post-side-content">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        <p>January 16</p>
        </div>

         <div className="post-side-content">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        <p>January 16</p>
        </div>       
        </div>
                    </Col>
                </Row>
            </Container>
        </section>
     );
}

export default Page;