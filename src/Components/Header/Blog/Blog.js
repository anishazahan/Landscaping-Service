import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <h2 className="blog-heading">This is My blog</h2>
      <div className="first-blog">
        <h2>Difference between authorization and authentication?</h2>
        <p>
          {" "}
          1.Authentication verifies who the user is, Authorization determines
          what resources a user can access, 2.Authentication works through
          passwords, one-time pins,biometric information, and other information
          provided or entered by the user, Authorization works through settings
          that are implemented and maintained by the organization,
          3.Authentication is the first step of a good identity and access
          management process, Authorization always takes place after
          authentication, 4.Authentication is visible to and partially
          changeable by the user, Authorization isn’t visible to or changeable
          by the user, 5.Example: By verifying their identity, employees can
          gain access to an HR application that includes their personal pay
          information, vacation time, and 401K data, Example: Once their level
          of access is authorized, employees and HR managers can access
          different levels of data based on the permissions set by the
          organization
        </p>
        <div className="second-blog">
          <h2>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p>
            I'm Using Firebase For Multipurpose First of all i'm using firebase
            for Authorized user and also i can build Authentication system using
            firebase Second Of all i'm Hosting Website Using Firebase and
            firebase is a data base thats why i can used firebase for store data
            .At this moment i have lot of firebase alternative for implement
            authentication for example : 1.Parse, 2.Back4App, 3.AWS Amplify,
            4.Kuzzle, 5.Couchbase Here are some examples and many more are able
            Firebase Alternative for implement authentication !!
          </p>
        </div>
        <div className="third-blog">
          <h2>
          What other services does firebase provide other than authentication?
          </h2>
          <p>
          Firebase provide Lot of services we can Host websites fully free in firebase. Firebase has real time database we can use firebase as a database. Firebase provide cloud we can used cloud function. Firebase provide lot of extensions we can use them our projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
