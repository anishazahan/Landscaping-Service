import React from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    return (
        <div>
            <div className="service-banner">
                <h2>My Services</h2>
            </div>

           {<Service></Service>}


            <div className="services">
               

               <div className="service-plan">
                   <h2>Basic Plan</h2>
                   <h1>$50</h1>
                   <ul>
                   <p>Architecto beatae vitae</p>
                       <p>Dicta sunt explicabo</p>
                       <p>enim ad minima veniam</p>
                       <p className='service-list'>Architecto beatae vitae</p>
                   </ul>
                   <a href="#">Choose It</a>
               </div>
               <div className="service-plan">
                   <h2>Medium Plan</h2>
                   <h1>$100</h1>
                   
                       <p>Architecto beatae vitae</p>
                       <p>Dicta sunt explicabo</p>
                       <p>enim ad minima veniam</p>
                       <p className='service-list'>Architecto beatae vitae</p>
                   
                   <a href="#">Choose It</a>
               </div>
               <div className="service-plan">
                   <h2>Creative Plan</h2>
                   <h1>$200</h1>
                
                   <p>Architecto beatae vitae</p>
                       <p>Dicta sunt explicabo</p>
                       <p>enim ad minima veniam</p>
                       <p className='service-list'>Architecto beatae vitae</p>
                   
                   <a href="#">Choose It</a>
               </div>
            </div>
        </div>
    );
};

export default Services;