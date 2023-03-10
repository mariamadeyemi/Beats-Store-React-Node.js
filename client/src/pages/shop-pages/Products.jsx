import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../products.css';
import { useContext, useEffect, useState } from 'react';
import axios from "axios";
import SingleProduct from '../../components/store_component/singleProduct';
import { ProductContext } from '../../context/productContext';


function Products() {
  // const {getProduct} = useContext(ProductContext)
  // const [productId, setProductId] = useState("")
  const [products, setProducts] = useState([])

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async ()=>{
    try {
      const res = await axios.get(`/api/products${cat}`)
      setProducts(res.data);
    } catch (error) {
      console.log(error)
    }  
    }
  fetchData()  
  }, [cat])
  // console.log(cat)

  
    return ( 
        <section className="products">
<Container>
    <Row>

      <Col md={5} className="category mt-3">
      <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic" className='cat-btn'>
        Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link to="/products?cat=afro">
        <Dropdown.Item>Afro</Dropdown.Item>
        </Link>
        
        <Link to="/products?cat=amapiano">
        <Dropdown.Item>Amapiano</Dropdown.Item>
        </Link>

        <Link to="/products?cat=rnb">
        <Dropdown.Item>RnB</Dropdown.Item>
        </Link>
      </Dropdown.Menu>
    </Dropdown>
      </Col>

        <Col md={5}>
 <Form className="d-flex mt-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> 
        </Col>
    </Row>

    <Row className="g-4 pt-3 pb-3">

      {
        products.map((product)=>{
         
          return <SingleProduct key={product.id} {...product} />

          // return <Col lg={3} className='card-container' key={product.id}>
          // <img src={`../../../src/uploads/${product.image}`} alt="" className='img-fluid rounded mb-3'/>
          //            <p className="overlay"><FaPlay /></p>
          //            <audio src="#"></audio>
          //                <p className="title"><Link to={`/product/${product.id}`}>{product.name}</Link></p>
          //                 <p className="text">{product.price}</p>
     
          //    </Col>
        })
      }
      
      
    </Row>
  

</Container>


        </section>
     );
}

export default Products;

