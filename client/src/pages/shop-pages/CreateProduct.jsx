import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios";

function CreateProduct() {

     const state = useLocation().state
    const navigate = useNavigate()
    const [input, setInput] = useState({})
    const [image, setImage] = useState(null)
    const [audio, setAudio] = useState(null)
    const [cat, setCat] = useState(state?.cat || "");
    
   
   const upload = async()=>{
    try{
        let formData = new FormData()
    formData.append("image", image)
    formData.append("audio", audio)
 
    const res = await axios.post("/api/upload", formData)
    return res.data

    }catch(err){
        console.log(err)
    }
 }

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setInput(values=>({...values, [name]: value}))
    }

    console.log(input)
    console.log(cat)


     const handleSubmit = async(e)=>{
        e.preventDefault();
            let fileurl = await upload()
            try {
            if(!state){
             await axios.post("/api/addProduct", {
                name: input.name,
                audio_type: input.audio_type,
                price: input.price,
                product_cat: cat,
                image: fileurl.image,
                audio: fileurl.audio
 })     
            }
          
       navigate("/")    
            } catch (error) {
                console.log(error)
            }
            
    }
   


    return ( 
        <section className="create-product mt-3 mb-3">
            <Container>
                <Row>
                    <Col md={10}>
                        <h2>New Product</h2>
                    <Form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Name" name="name" onChange={handleChange} />
                    </Form.Group> 

                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="audio type" name="audio_type" onChange={handleChange}/>
                    </Form.Group> 

                    <Form.Group className="mb-3">
                        <Form.Control type="number" placeholder="Price" name="price" onChange={handleChange}/>

        <div className="radio mt-3 mb-3">
        <Form.Check
            inline
            label="Afro"
            name="product_cat"
            type="checkbox"
            checked={cat === "afro"}
            value="afro"
            id="inline-checkbox-Afro"
            onChange={(e) => setCat(e.target.value)}
          />

<Form.Check
            inline
            label="Amapiano"
            name="product_cat"
            checked={cat === "amapiano"}
            type="checkbox"
            value="amapiano"
            id="inline-checkbox-Amapiano"
            onChange={(e) => setCat(e.target.value)}
          />

<Form.Check
            inline
            label="Rnb"
            name="product_cat"
            checked={cat === "rnb"}
            type="checkbox"
            value="rnb"
            id="inline-checkbox-Rnb"
            onChange={(e) => setCat(e.target.value)}
/>

        </div>

                    </Form.Group> 

                    <Form.Group className="mb-3">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type="file" name="image" onChange={(e)=>{setImage(e.target.files[0])}}/>
                    </Form.Group> 

                    <Form.Group className="mb-3">
                    <Form.Label>Audio File</Form.Label>
                        <Form.Control type="file" name="audio" onChange={(e)=>{setAudio(e.target.files[0])}} />
                    </Form.Group> 

                    <Button variant="primary" type="submit" className="mx-3">
                            Create
                        </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </section>
        );
}

export default CreateProduct;