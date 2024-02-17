import React from 'react';

import './ReactQ.css';

function Home() {
  return (
    <div className='container'>
      <div className='text-center'>
        <h3>Unlock Your Career Potential: Explore, Learn, and Excel with InterviewPrep</h3>
      </div>
      <div className='row mar'>
        <div className='col-6'>
          <div className='row mar1'>
            <div className='col-4 imgs'>
              <img src="./logo/java-logo-1.png" alt='Image 1' className='img-fluid img-thumbnail' />
            </div>
            <div className='col-4 imgs'>
              <img src='./logo/angular-icon-logo.png' alt='mage 2' className='img-fluid img-thumbnail' />
            </div>
            <div className='col-4 imgs'>
              <img src='./logo/react-logo-1.png' alt='mage 3' className='img-fluid img-thumbnail' />
            </div>
          </div>
          <div className='row mar1'>
            <div className='col-4 imgs'>
              <img src='./logo/html5-logo.png' alt='mage 4' className='img-fluid img-thumbnail' />
            </div>
            <div className='col-4 imgs'>
              <img src='./logo/css3-logo.png' alt='mage 5' className='img-fluid img-thumbnail' />
            </div>
            <div className='col-4 imgs'>
              <img src='./logo/javascript-logo.png' alt='mage 6' className='img-fluid img-thumbnail' />
            </div>
          </div>
          <div className='row mar1'>
            <div className='col-4 imgs'>
              <img src='./logo/mysql-logo-3.png' alt='mage 7' className='img-fluid img-thumbnail' />
            </div>
            <div className='col-4 imgs'>
              <img src='./logo/nodejs-logo.png' alt='mage 8' className='img-fluid img-thumbnail' />
            </div>
            <div className='col-4 imgs'>
              <img src='./logo/dotnet-logo.png' alt='mage 9' className='img-fluid img-thumbnail' />
            </div>
          </div>
        </div>
        <div className='col-6 '>
          <h4>Description</h4>
          <p className='mar2'>
            InterviewPrep is your one-stop destination for preparing for interviews and excelling in your career. We provide a comprehensive collection of interview questions covering various topics, industries, and job roles to help you ace your interviews. Our platform offers insightful feedback on each question, enabling you to understand your strengths and areas for improvement. Dive into our vast database of real interview questions, gain valuable insights, and elevate your interview performance. With InterviewPrep, take the next step towards achieving your career goals.
          </p>
        </div>
      </div>
  
    </div>
  )
}

export default Home;
