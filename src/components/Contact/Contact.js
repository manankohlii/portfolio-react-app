import React from 'react'
import emailjs from 'emailjs-com';
import './Contact.css'

export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_4rl8rvj', 'template_yp0m9t1', e.target, 'user_l7X5EufoE26TKMKT3vCOQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return(
        <section className="contact">
            <div className="contact_div">
            <div className="section_title"><h2>CONTACT</h2></div>
            <div className="contact_info">
                <form onSubmit={sendEmail}>
                    <input type="text" className="textField" placeholder="Your Name" name="from_name" required=""></input>
                    <input type="text" className="textField" placeholder="Email Address" name="email" required=""></input>
                    <textarea className="textField messageField" placeholder="Your Message" name="message"></textarea>
                    <input type="submit" className="textField submitButton" value="Send Message"></input>
                </form>
            </div>
            </div>
        </section>
    )
}
