import React, { useState, useEffect } from "react";
import axios from "axios";
import './ReactQ.css';

function MvcQ() {
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

  const getData = () => {
    axios.get('http://qwe1234.somee.com/api/QApp/mvcQuations')
      .then((response) => {
        const shuffledData = response.data.sort(() => Math.random() - 0.5);
        setData(shuffledData);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        // If API fails, use default data
        const defaultData = [
          { QNumber: 1, qName: "What is MVC?" },
          { QNumber: 2, qName: "What is App_Data?" },
          { QNumber: 3, qName: "What is App_Start?" },
          { QNumber: 4, qName: "What is Content Folder?" },
          { QNumber: 5, qName: "What is Favicon.ico ?" },
          { QNumber: 6, qName: "What is Packages.config ?" },
          { QNumber: 7, qName: "What is Controller?" },
          { QNumber: 8, qName: "What is the Role of Controller?" },
          { QNumber: 9, qName: "How make Call From browser?" },
          { QNumber: 10, qName: "What is the Parameters in Action Method?" },
          { QNumber: 11, qName: "What is View?" },
          { QNumber: 12, qName: "Why view is Required?" },
          { QNumber: 13, qName: "Can we call view from Browser?" },
          { QNumber: 14, qName: "What is use of Shared Folder?" },
          { QNumber: 15, qName: "What is Model?" },
          { QNumber: 16, qName: "What is ViewData and ViewBag?" },
          { QNumber: 17, qName: "What is TempData?" },
          { QNumber: 18, qName: "What is Session?" },
          { QNumber: 19, qName: "What is Difference between MVC and API?" },
          { QNumber: 20, qName: "Which Version you use MVC?" },
          { QNumber: 21, qName: "Difference between ViewData and ViewBag?" },
          { QNumber: 22, qName: "What is MVC Request Life Cycle?" },
          { QNumber: 23, qName: "Explain Routing in MVC?" },
          { QNumber: 24, qName: "What is Data Annotation in Asp.net MVC?" },
          { QNumber: 25, qName: "How To Create Custom Annotation in asp.net MVC?" },
          { QNumber: 26, qName: "What is Advantages of MVC ?" },
          { QNumber: 27, qName: "What is MVC Life Cycle ?" }
        ];
        const shuffledDefaultData = defaultData.sort(() => Math.random() - 0.5);
        setData(shuffledDefaultData);
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
              <h1>MVC QUESTIONS</h1>
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

export default MvcQ;
