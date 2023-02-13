import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import imageOne from "../../assets/store-img/woman-listening-to-music.jpg"
import imageTwo from "../../assets/store-img/vinyl.jpg"
import song from "../../uploads/ldyv3viw92.mp3"
import songTwo from "../../uploads/le0exg6y73.mp3"
import { Link } from "react-router-dom";
import SingleProduct from "../store_component/SingleProduct";


function Featured() {
  let features = [
    {
      id: 1,
      image: imageOne,
      desc: "Cool Afro",
      price: "$100",
      song: song
    },

    {
      id: 2,
      image: imageOne,
      desc: "Cool Afro",
      price: "$100",
      song: songTwo
    },

    {
      id: 3,
      image: imageTwo,
      desc: "Cool Afro",
      price: "$100",
      song: song
    },

    {
      id: 4,
      image: imageTwo,
      desc: "Cool Afro",
      price: "$100",
      song: songTwo
    }
  ]


    return ( 
        <section className="featured-products">
          <Container>
            <Row className="align-items-center">
              <Col md={10}>
              <h2 className="featured-text mb-4">Featured</h2>
              </Col>

              {

                features.map((feature)=>{
                 
                  return <SingleProduct key={feature.id} {...feature} />
                })
              }
            </Row>
          </Container>
          
           
        
        </section>
     );
}

export default Featured;