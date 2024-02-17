import React, { useState, useEffect } from "react";
import axios from "axios";
import './ReactQ.css';

function ManualQ(){
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
        axios.get('http://qwe1234.somee.com/api/QApp/manualQuation')
            .then((response) => {
                const shuffledData = response.data.sort(() => Math.random() - 0.5);
                setData(shuffledData);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
                // If API fails, use default data
                const defaultData = [
                    { QNumber: 1, qName: "What is Manual Testing?" },
                    { QNumber: 2, qName: "Why do we use Manual testing?" },
                    { QNumber: 3, qName: "What is Software testing?" },
                    { QNumber: 4, qName: "What are the different types of Software testing?" },
                    { QNumber: 5, qName: "Explain Functional Testing." },
                    { QNumber: 6, qName: "Explain Non-functional testing." },
                    { QNumber: 7, qName: "What is Regression Testing?" },
                    { QNumber: 8, qName: "What is Test Harness?" },
                    { QNumber: 9, qName: "Differentiate between Positive and Negative Testing." },
                    { QNumber: 10, qName: "Explain the process of testing." },
                    { QNumber: 11, qName: "Explain bugs, defects, and errors." },
                    { QNumber: 12, qName: "What is the software testing life cycle?" },
                    { QNumber: 13, qName: "What is black-box testing?" },
                    { QNumber: 14, qName: "What white-box testing?" },
                    { QNumber: 15, qName: "State the difference between bug leakage and bug release." },
                    { QNumber: 16, qName: "What do you mean by Critical bug?" },
                    { QNumber: 17, qName: "What is the purpose of Functional Testing?" },
                    { QNumber: 18, qName: "Why is functional testing important?" },
                    { QNumber: 19, qName: "What are different types of functional testing?" },
                    { QNumber: 20, qName: "Explain Adhoc testing." },
                    { QNumber: 21, qName: "How does 'Build' differ from 'Release'?" },
                    { QNumber: 22, qName: "Difference between functional and structural testing." },
                    { QNumber: 23, qName: "Explain Smoke testing and Sanity testing." },
                    { QNumber: 24, qName: "What is CRS?" },
                    { QNumber: 25, qName: "What is SRS?" },
                    { QNumber: 26, qName: "Who will do the requirement collection?" },
                    { QNumber: 27, qName: "Who will give the requirement?" },
                    { QNumber: 28, qName: "What is Waterfall Model?" },
                    { QNumber: 29, qName: "Who will do the Testing?" },
                    { QNumber: 30, qName: "Who will do the Coding?" },
                    { QNumber: 31, qName: "What is SDLC?" },
                    { QNumber: 32, qName: "What are the stages of SDLC?" },
                    { QNumber: 33, qName: "What is V model?" },
                    { QNumber: 34, qName: "What is V stands for?" },
                    { QNumber: 35, qName: "What is verification?" },
                    { QNumber: 36, qName: "What is validation?" },
                    { QNumber: 37, qName: "Why do we use V model?" },
                    { QNumber: 38, qName: "What are the advantages of V model?" },
                    { QNumber: 39, qName: "What are the disadvantages of V model?" },
                    { QNumber: 40, qName: "Explain the advantages and disadvantages of the waterfall model?" },
                    { QNumber: 41, qName: "What is LLD?" },
                    { QNumber: 42, qName: "What is HLD?" },
                    { QNumber: 43, qName: "What is the Prototype Model?" },
                    { QNumber: 44, qName: "When do we have to use the Prototype Model?" },
                    { QNumber: 45, qName: "What are the disadvantages of the Prototype model?" },
                    { QNumber: 46, qName: "What are the advantages of the Prototype model?" },
                    { QNumber: 47, qName: "What are the alternative names of White box testing?" },
                    { QNumber: 48, qName: "What are the types of White box testing?" },
                    { QNumber: 49, qName: "What are the alternative names of black box testing?" },
                    { QNumber: 50, qName: "What are the types of Black box testing?" },
                    { QNumber: 51, qName: "Difference between White and black box testing?" },
            
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
                            <h1>SQL QUESTIONS</h1>
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

export default ManualQ;
