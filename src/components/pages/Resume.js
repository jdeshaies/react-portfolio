import React from 'react';
import resumeFile from '../../files/Joseph_Deshaies_Resume.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        Download my <a href={resumeFile} target="_blank" download>resume</a>
      </p>
      <h2>Front-End Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h2>Back-End Proficiencies</h2>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySql, Sequelize</li>
        <li>MongoDB, Mongoose</li>
      </ul>
    </div>
  );
}