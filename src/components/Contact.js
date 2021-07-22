import React from 'react';
import { VscArrowDown } from 'react-icons/vsc';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id='contact' className='contact'>
      <h1 className='contact__title'>
        <div className="overflow-h-ib">
          <div className="hidden__contact__text">INTERESTED&nbsp;</div>
        </div>
        <div className="overflow-h-ib">
          <div className="hidden__contact__text">IN&nbsp;</div>
        </div>
        <div className="overflow-h-ib">
          <div className="hidden__contact__text">WORKING&nbsp;</div>
        </div>
        <div className="overflow-h-ib">
          <div className="hidden__contact__text">WITH&nbsp;</div>
        </div>
        <div className="overflow-h-ib">
          <div className="hidden__contact__text">ME&nbsp;</div>
        </div>
        <br />
        <div className="overflow-h-ib">
          <div className="hidden__contact__text">LET'S&nbsp;</div>
        </div>
        <div className="overflow-h-ib">
          <div className="hidden__contact__text">TALK<VscArrowDown className='contact__title__arrow' /></div>
        </div>
              </h1>
      <form className='container form' onSubmit={handleSubmit}>
        <div className="overflow-h">
          <label className='hidden__contact__text' htmlFor="name">Name</label>
        </div>
        <input
          className='hidden__contact__form'
          id='name'
          type='text'
          name='name'
          placeholder='Your name'
          />
        <div className="overflow-h">
          <label className='hidden__contact__text' htmlFor="email">Email</label>
        </div>
        <input
          className='hidden__contact__form'
          id='email'
          type='email'
          name='email'
          placeholder='Email address'
          />
        <div className="overflow-h">
          <label className='hidden__contact__text' htmlFor="textarea">Message</label>
        </div>
        <textarea
          className='form-control formInput hidden__contact__form'
          id='textarea'
          rows={3}
          name='message'
          placeholder="Say 'Hi 👋!'"
        />
        <div className="overflow-h">
          <button className='contact__button hidden__contact__text' type='submit'>Get in touch</button>
        </div>
      </form>
    </div>
  )
}

export default Contact;