import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReCAPTCHA from "react-google-recaptcha";
import '../App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase,ref, set,push} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMY77Sch9krEzohsaYhcOr8I7IdgpB-Q4",
  authDomain: "fifi-d090b.firebaseapp.com",
  databaseURL: "https://fifi-d090b-default-rtdb.firebaseio.com",
  projectId: "fifi-d090b",
  storageBucket: "fifi-d090b.appspot.com",
  messagingSenderId: "114838649432",
  appId: "1:114838649432:web:8628170c9301787314682d",
  measurementId: "G-G7YY9SB8F5"
};

//recaptcha 
const YourRecaptchaSiteKey = '6LfTkcsnAAAAALG7VEf5xtoODSthI0y2Mnf5-_Vj';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getDatabase();


function Contact() {
  // Create state variables to store form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState(null); // To store the reCAPTCHA response.
  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA.");
      return;
    }
    // Create an object with the form data
    const formData = {
      name,
      email,
      comment,
      recaptchaValue, // Include the reCAPTCHA response in your form data
    };
  
    try {
      // Get a reference to the database location where you want to store the data
      const dbRef = ref(db, "contacts");
  
   
    // Push the form data to the database
    const newContactRef = push(dbRef);
    await set(newContactRef, formData);
  
      // Clear the form fields after successful submission
      setName('');
      setEmail('');
      setComment('');
  
      // Optionally, you can show a success message or redirect the user
      console.log("Form data sent to Firebase!");
    } catch (error) {
      // Handle errors here (e.g., show an error message)
      console.error("Error sending form data to Firebase:", error);
    }
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
                borderRadius: 0
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
            <ReCAPTCHA
              sitekey={YourRecaptchaSiteKey}
              onChange={(value) => setRecaptchaValue(value)} // Store reCAPTCHA response
            />
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