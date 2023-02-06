import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from 'react-bootstrap/Button';


function CreatePost() {
    const [value, setValue] = useState('');
    return ( 
        <section className="write my-4">
          <Container>
            <Form>
            <Row className="align-items-start item-1">
                <Col md={6}>
                
                  <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Title" />
                    </Form.Group> 

                    <div className="quill-container">
                    <ReactQuill className="quill" theme="snow" value={value} onChange={setValue} />
                        </div> 

                        

                
                </Col>

                <Col md={6} className="item-2">
                <h2 className="mb-4">Upload Image</h2>
           <input style={{display: "none"}} type="file" name="" 
            id="file" />  
           <label htmlFor="file">Add Image</label> 

           <Button variant="primary" type="submit" className="mx-3">
                            Publish
                        </Button>

                        <Button variant="primary" type="submit">
                            Save to Draft
                        </Button>  
                </Col>
            </Row>
            </Form>
            </Container>  
        </section>
     );
}

export default CreatePost;