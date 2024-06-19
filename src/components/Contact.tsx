// Contact.tsx

import React, { useState, ChangeEvent, FormEvent, memo, useEffect } from 'react';
import styles from './Style/Contact.module.scss'; // Import your SCSS module
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from './Navbar';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
}

const Contact: React.FC = () => {
  const initialFormData: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    subject: ''
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formValid, setFormValid] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Check if all fields are filled to enable submit button
    const isFormValid = formData.firstName !== '' && formData.lastName !== '' && formData.email !== '' && formData.subject !== '';
    setFormValid(isFormValid);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top-left (0, 0)
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitSuccess(true);
      // Reset form data after submission
      setFormData(initialFormData);
      setFormValid(false); // Reset form validity

      // Redirect to home page after 2 seconds
      setTimeout(() => {
        navigate('/'); // Redirect to home page
      }, 2000);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h3>Contact Form</h3>
        {!submitSuccess ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Your name.."
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Your last name.."
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email.."
            />

            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Write something.."
              style={{ height: '200px' }}
            ></textarea>

            <input type="submit" value="Submit" disabled={!formValid} />
          </form>
        ) : (
          <div className={styles.successMessage}>
            <p>Message successfully sent!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default memo(Contact);
