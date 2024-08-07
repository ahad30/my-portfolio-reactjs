
import './contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast ,{ Toaster }  from 'react-hot-toast';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ddclsy4', 'template_adedo21', form.current, {
        publicKey: 'DzHQI_VoICLyCfAau',
      })
      .then(
        () => {
          toast.success('Thank you for your message')
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email. </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input required type="text" name="to_name" className="contact__form-input"
                placeholder='Insert your name' />
            </div>

            <div className="contact__form-div">
              <input required type="email" name="from_email"  className="contact__form-input"
                placeholder='Insert your email' />
            </div>
            </div>
{/* 
            <div className="contact__form-div">
              <input type="text" className="contact__form-input"
                placeholder='Insert your subject' />
            </div> */}

            <div className="contact__form-div contact__form-area">
          <textarea required name="message"  id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your message'>
          </textarea>
          </div>
        <div className='flex justify-end'>
        <button type='submit' className='btn'>Send Message</button>
        <Toaster/>
        </div>
          
        </form>
      </div>
    </section>
  )
}

export default Contact