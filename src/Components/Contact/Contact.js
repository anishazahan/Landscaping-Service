import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            

           <h2 className='contact-heading'>This is my Contact</h2>
           <div className="contact-info">
           <p>Your name</p>
           <input type="text" />
           <p>Your Phone or Email</p>
           <input type="text" />
           <p>Your Description</p>
           <textarea name="" id="" cols="30" rows="6"></textarea>
          <div className="btn">
              <button>Submit</button>
          </div>
           </div>
        </div>
    );
};

export default Contact;