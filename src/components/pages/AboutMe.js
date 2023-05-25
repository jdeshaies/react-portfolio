import React from 'react';
import profilePicture from '../../images/profile-picture.png';

export default function AboutMe() {
    const imageStyle = { width: '50%' };
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi and welcome to my portfolio! My name is Joey Deshaies and I am from Seabrook, NH. I am currently an IT Business Analyst at John Hancock in Boston.
        I have a dog and 2 cats. When I am not working, in class, or doing homework, I like to hang out with friends and family, hike, and run (I even got to run in the Boston Marathon this year!)
        Feel free to checkout some of my projects in my portfolio, submit a form to contact me, or take a look at my experience on my resume. You can also connect with me
        through GitHub, LinkedIn, or Facebook by clicking the links at the bottom of the page.
      </p>
      <img style={imageStyle} src={profilePicture} alt="Man sitting on beach"/>
    </div>
  );
}