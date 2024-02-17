import React, { useState, useEffect } from "react";
import axios from "axios";
import './ReactQ.css';

function AdoQ(){
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
        axios.get('http://qwe1234.somee.com/api/QApp/AdoQuations')
            .then((response) => {
                let fetchedData = response.data;
             
                const shuffledData = fetchedData.sort(() => Math.random() - 0.5);
                setData(shuffledData);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
                // If API fails, use default data
                const defaultData = [
           
                    { QNumber: 1, qName: "What is ADO.net" },
                    { QNumber: 2, qName: "What is Difference between DataSet and DataReader?" },
                    { QNumber: 3, qName: "What is Important Classes in ADO.net?" },
                    { QNumber: 4, qName: "What is Connection Class in ADO.net?" },
                    { QNumber: 5, qName: "What is Command Class in ADO.net?" },
                    { QNumber: 6, qName: "What is DataReader Class in ADO.net?" },
                    { QNumber: 7, qName: "What is ExecuteReader Class in ADO.net?" },
                    { QNumber: 8, qName: "What is DataAdapter Class in ADO.net?" },
                    { QNumber: 9, qName: "What is ADO.net Architecture?" },
                    { QNumber: 10, qName: "What is ADO.net Connected and Disconnected Architecture?" },
                    { QNumber: 11, qName: "What is Connection String Process in ADO.net?" },
                    { QNumber: 12, qName: "What is Fill Method in ADO.net?" },
                    { QNumber: 13, qName: "What is Difference between ADO.net and Entity Framework?" }
                    // Add more default questions if needed
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
                            <h1>ADO.NET QUESTIONS</h1>
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

export default AdoQ;
