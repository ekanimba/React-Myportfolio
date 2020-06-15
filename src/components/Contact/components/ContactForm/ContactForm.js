import React from 'react';
import {Form, Button, Col, InputGroup, FormControl} from 'react-bootstrap';
import './ContactForm.css';
class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: ""
        };
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        console.log(data.values());
        for (var value of data.values()) {
            console.log(value); 
         }
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
        } else {
            this.setState({ status: "ERROR" });
        }
        };
        xhr.send(data);
    }
  render() {
    
    const { status } = this.state;

    return (
        <Form className="contactForm" onSubmit={this.submitForm} action="https://formspree.io/xqkybgqy" method="POST">
            <Form.Row>
                <Col>
                    <Form.Group >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                </Col>
            
                <Col>
                    <Form.Group  >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" name="email"/>
                    </Form.Group>
                </Col>
            </Form.Row>
      
            <Form.Group >
            <Form.Label>Subject</Form.Label>
            <Form.Control placeholder="Subject"/>
            </Form.Group>

            <Form.Group >
                <InputGroup>
                <FormControl as="textarea" aria-label="With textarea"  placeholder="Message" name="message"/>
                </InputGroup>
            </Form.Group>
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
            {status === "SUCCESS" ? <p>Thanks! I will be in touch</p> : <Button variant="dark" type="submit">Submit</Button>}
            
            
        </Form>
      );
  }
}

export default ContactForm;