import React from 'react';
import '../styles/components/Contact.scss';

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
        <textarea
          rows={3}
          name='message'
          className='form-control formInput'
          placeholder='Message'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact;