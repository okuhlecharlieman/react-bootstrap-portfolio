import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <div id='contact' className="container Text   ">   
      <h1 className="display-6">Contact</h1>
      <hr></hr>
   <div className=' d-md-flex '>
   <div className='col-12 m-auto  col-md-3 intro' > 
   <img className='img-thumbnail' src='https://media.giphy.com/media/rWLXay3IYwyeQL1Pkn/giphy.gif'></img>
   </div>
    <div  className=' col-md-4 m-5 m-auto my-5'>
    <Form>
      <Form.Group controlId="form.Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group controlId="form.Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group controlId="form.Textarea">
          <Form.Label>Comment</Form.Label>
          <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <div className='my-3'>
      <Button type="submit">Submit form</Button>
      </div>
  
    </Form>
    </div>
   </div>
  
</div>
  )
}

export default Contact
/*   <div >
        <div className="container ">
          <div className="Text d-flex row justify-content-end ">
            <div className="align-self-end col-lg-12 text-left mt-5" >
                <h1 className="display-6">Here I'm Charlieman Okuhle</h1>
                <hr />
                                  <img
                                    src="https://i.imgur.com/QIrZWGIs.jpg"
                                    alt="Alan L. Hart"
                                  />
            </div>
          </div>
        </div>
       
      </div> */