import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='contact'>
      <h2 className='contact__title container'>
        INTERESTED IN WORKING WITH ME?<br />LET'S TALK.
      </h2>
      <form className='container form' onSubmit={handleSubmit}>
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
        <button className='contact__button' type='submit'>Get in touch</button>
      </form>
    </div>
  )
}

export default Contact;