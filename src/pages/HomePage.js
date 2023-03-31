import React from 'react';

function HomePage() {
  return (
    <div>

      <h2>Welcome to My Full-Stack MERN Website</h2>

      <article>
        <section>
          <h3>Technologies Used:</h3>

          <dl>

            <dt><strong>JavaScript</strong></dt>
            <dd>To program and control the behavior of this web page, through DOM-manipulation, event listeners, etc.</dd>

            <dt><strong>Express</strong></dt>
            <dd>Implemented an Express server to handle the Random User API.</dd>

            <dt><strong>MongoDB</strong></dt>
            <dd>Used MongoDB for the database storage.</dd>

            <dt><strong>Mongoose</strong></dt>
            <dd>Used Mongoose to establish a connection between MongoDB and Node.</dd>

            <dt><strong>Node.js</strong></dt>
            <dd>Allowed me to set up the Express servers, use NPM and Nodemon and to run JavaScript outside of the browser.</dd>

            <dt><strong>React</strong></dt>
            <dd>Used react components to handle the pages' navigation bar, header and footer as well as the gallery feature, etc.</dd>

            <dt><strong>REST API</strong></dt>
            <dd>Used the random user API via Restful HTTP requests to access and random users data found in the staff page.</dd>

            <dt><strong>HTML & CSS</strong></dt>
            <dd>Used CSS and HTML for the overall formatting and styling of the website.</dd>

            <dt><strong>Image Optimization</strong></dt>
            <dd>Optimized all the images used on the site for better Search Engine Optimization (SEO), faster page loading and overall performance</dd>

            <dt><strong>Google Font, React Icons & favicon</strong></dt>
            <dd>These were used to personalize the pages.</dd>

          </dl>
        </section>

        <section>
          <p>I've created this MERN project to showcase my full- stack development skills. This site includes a front-end display layer using React, back-end with Express and Node.js, and a database using MongoDB. </p>

        </section>
        <p><bold> Thank you for visiting this website! </bold></p>
      </article>
    </div>
  );
}


export default HomePage;
