import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div>
            <div className="service-banner">
                <h2>My Services</h2>
            </div>
            <div className="service-header">
            <h2>My SerVices For Yor<br/>Best Quality</h2>
            </div>
            <div className="services">
               <div className="service">
                   
               <img src="https://www.moneyunder30.com/wp-content/uploads/2021/05/shutterstock_499801255-648x364-c-default.jpg" alt="" />
               <h3>Creative Gardening</h3>
               <p>he decides to keep the fantasy alive by sending a similar letter to Susan.Are Landscapers funny.
                            Landscapers not only benefits from great performances by Colman and Thewlis, but it's a dark comedy </p>
                            <button>Learn More</button>
               </div>
               <div className="service">
               <img src="https://urbanfarmonline.com/wp-content/uploads/2020/06/What-does-a-professional-landscaper-do-700x468.jpg" alt="" />
               <h3>Creative Decorating</h3>
               <p>he decides to keep the fantasy alive by sending a similar letter to Susan.Are Landscapers funny.
                            Landscapers not only benefits from great performances by Colman and Thewlis, but it's a dark comedy </p>
                            <button>Learn More</button>
               </div>
               <div className="service">
               <img src="https://performancepersonnel.com/wp-content/uploads/2018/06/landscaper1.jpg" alt="" />
               <h3>Creative Planting</h3>
               <p>he decides to keep the fantasy alive by sending a similar letter to Susan.Are Landscapers funny.
                            Landscapers not only benefits from great performances by Colman and Thewlis, but it's a dark comedy </p>
                            <button>Learn More</button>
               </div>


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