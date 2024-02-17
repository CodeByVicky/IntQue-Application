import React, { useState, useEffect } from "react";
import axios from "axios";
import './ReactQ.css';

function ReactQ() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showQuestions, setShowQuestions] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const [goodQuestions, setGoodQuestions] = useState([]);
  const [notSureQuestions, setNotSureQuestions] = useState([]);
  const [improvementQuestions, setImprovementQuestions] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const defaultData = [
    { QNumber: 1, qName: "What is the role of React in Software Development?" },
  { QNumber: 2, qName: "What is React?" },
  { QNumber: 3, qName: "What is SPA?" },
  { QNumber: 4, qName: "What are the Advantages and Disadvantages of React?" },
  { QNumber: 5, qName: "What is the Difference between React and Angular?" },
  { QNumber: 6, qName: "What is the Difference between Real DOM and Virtual DOM?" },
  { QNumber: 7, qName: "What are React Components?" },
  { QNumber: 8, qName: "What is NPM?" },
  { QNumber: 9, qName: "What is the Role of Public folder in React?" },
  { QNumber: 10, qName: "What is the Role of SRC folder in React?" },
  { QNumber: 11, qName: "What is the Role of Index.Html page in React?" },
  { QNumber: 12, qName: "What is the Role of App.js file in React?" },
  { QNumber: 13, qName: "What is the Role of Function and Return inside App.js?" },
  { QNumber: 14, qName: "Can we have a Function without Return inside App.js?" },
  { QNumber: 15, qName: "What is the Role of export default inside App.js?" },
  { QNumber: 16, qName: "What is the Role of Index.js file, ReactDom and Render method in React?" },
  { QNumber: 17, qName: "How does React App Load and Display the Components in the Browser?" },
  { QNumber: 18, qName: "What is JSX?" },
  { QNumber: 19, qName: "What are the Advantages of JSX?" },
  { QNumber: 20, qName: "Can the Browser read the JSX file?" },
  { QNumber: 21, qName: "What is Babel?" },
  { QNumber: 22, qName: "What is a Transpiler?" },
  { QNumber: 23, qName: "What is the Role of Fragment in React?" },
  { QNumber: 24, qName: "What are Props in JSX?" },
  ];

  const getData = () => {
    axios.get('http://qwe1234.somee.com/api/QApp/ReactQuations')
      .then((response) => {
        const shuffledData = response.data.sort(() => Math.random() - 0.5);
        setData(shuffledData);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setData(defaultData);
      });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === data.length - 1) {
        alert("Task is completed!");
        setShowQuestions(false);
        setShowTable(true);
        return prevIndex;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        alert("No More Previous Questions!");
        return prevIndex;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleSelection = (selection) => {
    const currentQuestion = data[currentIndex];
    switch(selection) {
      case 'good':
        setGoodQuestions(prev => [...prev, currentQuestion]);
        break;
      case 'notsure':
        setNotSureQuestions(prev => [...prev, currentQuestion]);
        break;
      case 'improvement':
        setImprovementQuestions(prev => [...prev, currentQuestion]);
        break;
      default:
        break;
    }
    handleNext();
  };

  const handleToggleTables = () => {
    setShowTable((prevState) => !prevState);
  };

  const handleBack = () => {
    setShowQuestions(true);
    setShowTable(false);
  };

  return (
    <div className="container text-center">
      {showQuestions && (
        <>
          <div className="row">
            <div className="col">
              <h1>REACT QUESTIONS</h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">{"Question No-"+(currentIndex + 1)}</h2>
                  <p className="card-text">{data[currentIndex]?.qName}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <button className="btnw btnw btn btn-success " onClick={() => handleSelection('good')}>Good</button>
              <button className="btnw btnw btn btn-warning " onClick={() => handleSelection('notsure')}>Not Sure</button>
              <button className="btnw btnw btn btn-danger " onClick={() => handleSelection('improvement')}>Improvement</button>
              <button className="btn1 btn btn-outline-primary " onClick={handlePrevious}>Previous</button>
              <button className="btn1 btn btn-outline-primary " onClick={handleNext}>Next</button>
            </div>
          </div>
        </>
      )}
      <div className="row mt-4">
        <div className="col">
          <button className="btn2 btn btn-outline-secondary" onClick={handleToggleTables}>{showTable ? "Hide Response" : "Show Response"}</button>
        </div>
      </div>
      {showTable && (
        <div className="row mt-4">
          <div className="col">
            <h2>Good</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Question</th>
                </tr>
              </thead>
              <tbody>
                {goodQuestions.map((question, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{question.qName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col">
            <h2>Practice</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Question</th>
                </tr>
              </thead>
              <tbody>
                {notSureQuestions.map((question, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{question.qName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col">
            <h2>Improvement</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Question</th>
                </tr>
              </thead>
              <tbody>
                {improvementQuestions.map((question, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{question.qName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {!showQuestions && (
        <div className="row mt-4">
          <div className="col">
            <button className="btn2 btn btn-primary" onClick={handleBack}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReactQ;
