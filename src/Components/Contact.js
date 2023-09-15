import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ReCAPTCHA from "react-google-recaptcha";
import "../App.css";
import emailjs from "emailjs-com";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, push } from "firebase/database";

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
  measurementId: "G-G7YY9SB8F5",
};

const emailjsConfig = {
  serviceID: "service_xn3dtsb",
  templateID: "template_4igzdct",
  userID: "bZ7p5KzirC9nE9V9D",
};
//recaptcha
const YourRecaptchaSiteKey = "6LfTkcsnAAAAALG7VEf5xtoODSthI0y2Mnf5-_Vj";

const app = initializeApp(firebaseConfig);
const db = getDatabase();

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [commentError, setCommentError] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!comment.trim()) {
      setCommentError("Comment is required");
      valid = false;
    } else {
      setCommentError("");
    }

    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA.");
      valid = false;
    }

    if (!valid) {
      return;
    }

    const formData = {
      name,
      email,
      comment,
      recaptchaValue,
    };

    try {
      const dbRef = ref(db, "contacts");
      const newContactRef = push(dbRef);
      await set(newContactRef, formData);

      // Send email using email.js
      const emailParams = {
        from_name: name,
        from_email: email,
        message: comment,
      };

      await emailjs.send(
        emailjsConfig.serviceID,
        emailjsConfig.templateID,
        emailParams,
        emailjsConfig.userID
      );

      setName("");
      setEmail("");
      setComment("");

      console.log("Form data sent to Firebase!");
    } catch (error) {
      console.error("Error sending form data to Firebase:", error);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div id="contact" className="container Text">
      <h1 className="display-6">Contact</h1>
      <hr />
      <div className="d-md-flex">
        <div className="col-12 m-auto col-md-3 intro">
          <img
            className="img-thumbnail"
            src="https://media.giphy.com/media/rWLXay3IYwyeQL1Pkn/giphy.gif"
            alt="Animated gif"
          />
        </div>
        <div className="col-md-4 m-5 m-auto my-5">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="form.Name">
              <Form.Control
                style={{
                  border: "none",
                  borderBottom: "5px solid #90E0EF",
                  background: "transparent",
                  borderRadius: 0,
                }}
                className="my-3"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <div className="text-danger">{nameError}</div>}
            </Form.Group>

            <Form.Group controlId="form.Email">
              <Form.Control
                style={{
                  border: "none",
                  borderBottom: "5px solid #90E0EF",
                  background: "transparent",
                  borderRadius: 0,
                }}
                className="my-3"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <div className="text-danger">{emailError}</div>}
            </Form.Group>

            <Form.Group controlId="form.Textarea">
              <Form.Control
                style={{
                  border: "none",
                  borderBottom: "5px solid #90E0EF",
                  background: "transparent",
                  borderRadius: 0,
                }}
                className="my-3 form"
                placeholder="Massege"
                as="textarea"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              {commentError && (
                <div className="text-danger">{commentError}</div>
              )}
            </Form.Group>

            <ReCAPTCHA
              sitekey={YourRecaptchaSiteKey}
              onChange={(value) => setRecaptchaValue(value)}
            />

            <div className="my-3">
              <Button
                className="btn btn-mod btn-border btn-large"
                type="submit"
              >
                Submit form
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
