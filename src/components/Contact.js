import React from 'react';
import { VscArrowDown } from 'react-icons/vsc';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id='contact' className='contact'>
      <h1 className='contact__title overflow-h'>
        INTERESTED IN WORKING WITH ME?<br />LET'S TALK
        <VscArrowDown className='contact__title__arrow' />
      </h1>
      <form className='container form' onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id='name'
          type='text'
          name='name'
          placeholder='Your name'
          />
        <label htmlFor="email">Email</label>
        <input
          id='email'
          type='email'
          name='email'
          placeholder='Email address'
          />
        <label htmlFor="textarea">Message</label>
        <textarea
          id='textarea'
          rows={3}
          name='message'
          className='form-control formInput'
          placeholder="Say 'Hi 👋!'"
        />
        <button className='contact__button' type='submit'>Get in touch</button>
      </form>
    </div>
  )
}

export default Contact;