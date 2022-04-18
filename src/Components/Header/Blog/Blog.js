import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h2 className='blog-heading'>This is My blog</h2>
            <h2>Difference between authorization and authentication?</h2>
            <p>  1.Authentication verifies who the user is, Authorization determines what resources a user can access, 2.Authentication works through passwords, one-time pins,biometric information, and other information provided or entered by the user, Authorization works through settings that are implemented and maintained by the organization, 3.Authentication is the first step of a good identity and access management process, Authorization always takes place after authentication, 4.Authentication is visible to and partially changeable by the user, Authorization isn’t visible to or changeable by the user, 5.Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data, Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization</p>
        </div>
    );
};

export default Blog;