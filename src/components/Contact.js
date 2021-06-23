import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id='contact' className='contact'>
      <h1 className='contact__title'>
        INTERESTED IN WORKING WITH ME?<br />LET'S TALK.
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
          placeholder="'Damn, that's a really nice portfolio!'"
        />
        <button className='contact__button' type='submit'>Get in touch</button>
      </form>
    </div>
  )
}

export default Contact;