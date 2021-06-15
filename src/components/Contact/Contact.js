import React from 'react';
import './Contact.scss';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='contact'>
      <h1>contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          />
        <input
          type='email'
          name='email'
          placeholder='Email address'
          />
        <input
          type='text'
          name='subject'
          placeholder='Subject'
          />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact;