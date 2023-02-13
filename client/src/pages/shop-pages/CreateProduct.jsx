import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

function CreateProduct() {
    const [input, setInput] = useState({})
    const [image, setImage] = useState(null)
    const [audio, setAudio] = useState(null)

    const navigate = useNavigate()



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

     const handleSubmit = async(e)=>{
        e.preventDefault();
     let fileurl = await upload()

        try{
            await axios.post("/api/addProduct", {
                name: input.name,
                audio_type: input.audio_type,
                price: input.price,
                image: fileurl.image,
                audio: fileurl.audio
 })
      
        }catch(err){
            console.log(err)
        }

        navigate("/")
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