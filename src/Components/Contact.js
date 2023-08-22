import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';



function Contact() {
  // Create state variables to store form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // You can do something with the form data here, like sending it to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Comment:', comment);

  

  
  };

  return (
    <div id='contact' className="container Text">
      <h1 className="display-6">Contact</h1>
      <hr />
      <div className=' d-md-flex '>
        <div className='col-12 m-auto  col-md-3 intro'>
          <img
            className='img-thumbnail'
            src='https://media.giphy.com/media/rWLXay3IYwyeQL1Pkn/giphy.gif'
            alt="Animated gif"
          />
        </div>
        <div className=' col-md-4 m-5 m-auto my-5'>
          <Form onSubmit={handleSubmit}>
        
          <Form.Group controlId="form.Name">
    
    <Form.Control
       style={{
        border: 'none',
        borderBottom: '5px solid #90E0EF',
        background: 'transparent',
        borderRadius: 0
      }}
      
        className='my-3'
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
    />
</Form.Group>

            <Form.Group controlId="form.Email">
       
              <Form.Control
              style={{
                border: 'none',
                borderBottom: '5px solid #90E0EF',
                background: 'transparent',
                borderRadius: 0,
                '::placeholder': {
                  color: 'red' }
              }}
              className='my-3'
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="form.Textarea">
             
              <Form.Control
              style={{
                border: 'none',
                borderBottom: '5px solid #90E0EF',
                background: 'transparent',
                borderRadius: 0
              }}
              className='my-3'
                as="textarea"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>
            <div className='my-3'>
              <Button className="btn btn-mod btn-border btn-large" type="submit">Submit form</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
