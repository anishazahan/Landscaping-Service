import React from 'react';
import Services from '../Sevices/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="Home-background">
            
               <div className="home-heading">
               <h1 className='text-1'>Home Landscaping Servising </h1>
               <h1 className='text-2'>Creative Solution For  </h1>
               <h1 className='text-3'> Your Best Quality</h1>
               </div>
               <h2>Natural Landscaping</h2>
               {/* <div className="home-btn">
                   <link to="/">Learn More</link>
                   <link to="/">About Us</link>
               </div> */}
               <div className="home-btn">
                   <a href="#">Learn More</a>
                   <a href="#">About Us</a>
               </div>
            </div>

               <Services></Services>

        </div>
    );
};

export default Home;
