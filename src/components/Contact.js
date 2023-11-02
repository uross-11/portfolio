import React from 'react';
import { VscArrowDown } from 'react-icons/vsc';

const Contact = () => {
  return (
    <div id='contact' className='contact container__big'>
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
          <div className="hidden__contact__text">ME?&nbsp;</div>
        </div>
        <br />
        <a className="hidden__contact__text contact__mail" href="mailto:u.ignjatovic00@gmail.com">
          <div className="overflow-h-ib">
            <div className="hidden__contact__text">LET'S&nbsp;</div>
          </div>
          <div className="overflow-h-ib">
            <div className="hidden__contact__text">TALK<VscArrowDown className='contact__title__arrow' /></div>
          </div>
        </a>
      </h1>
    </div>
  )
}

export default Contact;
