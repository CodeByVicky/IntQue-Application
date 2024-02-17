import React, { useState, useEffect } from "react";
import axios from "axios";
import './ReactQ.css';

function SqlQ(){
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
        axios.get('http://qwe1234.somee.com/api/QApp/sqlQuations')
            .then((response) => {
                const shuffledData = response.data.sort(() => Math.random() - 0.5);
                setData(shuffledData);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
                // If API fails, use default data
                const defaultData = [
                  { QNumber: 1, qName: "What is SQL Stored Procedure? What is Type and Example?" },
                  { QNumber: 2, qName: "How to Write Parameter In Store Procedure?" },
                  { QNumber: 3, qName: "What is Parameter with Default value in Store Procedure?" },
                  { QNumber: 4, qName: "What is out Parameter in Store Procedure?" },
                  { QNumber: 5, qName: "What is Difference between Primary Key and Unique Key?" },
                  { QNumber: 6, qName: "What is SQL?" },
                  { QNumber: 7, qName: "What is DBMS? Types of DBMS?" },
                  { QNumber: 8, qName: "What is CRUD?" },
                  { QNumber: 9, qName: "What is Relational Database (RDBMS)?" },
                  { QNumber: 10, qName: "List of SQL Database?" },
                  { QNumber: 11, qName: "What is a Database Table?" },
                  { QNumber: 12, qName: "What are the Categories of Datatypes?" },
                  { QNumber: 13, qName: "What is Create Table Syntax?" },
                  { QNumber: 14, qName: "Types of SQL Statements?" },
                  { QNumber: 15, qName: "What are the List of Command?" },
                  { QNumber: 16, qName: "What is Insert into Single Row Syntax?" },
                  { QNumber: 17, qName: "What is Insert into Multiple Rows Syntax?" },
                  { QNumber: 18, qName: "What is Clause? Explain with Syntax?" },
                  { QNumber: 19, qName: "What is condition use in SQL?" },
                  { QNumber: 20, qName: "What are the SQL Constraints?" },
                  { QNumber: 21, qName: "What is Operator? With Syntax?" },
                  { QNumber: 22, qName: "What is IN Operator Explain with Syntax?" },
                  { QNumber: 23, qName: "Explain Like Operator?" },
                  { QNumber: 24, qName: "Explain Between and Not Between Operator?" },
                  { QNumber: 25, qName: "Explain Distinct?" },
                  { QNumber: 26, qName: "Explain IS NULL and IS NOT NULL Operator?" },
                  { QNumber: 27, qName: "Explain LIMIT Operator?" },
                  { QNumber: 28, qName: "Explain OFFSET Operator?" },
                  { QNumber: 29, qName: "Explain Function?" },
                  { QNumber: 30, qName: "Explain alter command?" },
                  { QNumber: 31, qName: "Explain Commit and RollBack?" },
                  { QNumber: 32, qName: "Explain Primary Key?" },
                  { QNumber: 33, qName: "Explain Foreign Key?" },
                  { QNumber: 34, qName: "What is Join? Explain types of Join with Example?" },
                  { QNumber: 35, qName: "What is Self Join?" },
                  { QNumber: 36, qName: "Difference between DDL and DML?" },
                  { QNumber: 37, qName: "What is View in SQL? And Advantages of View?" },
                  { QNumber: 38, qName: "What is PL/SQL?" },
                  { QNumber: 39, qName: "What is SubQuery?" },
                  { QNumber: 40, qName: "Difference between Function and Procedure?" },
                  { QNumber: 41, qName: "What is Trigger Explain With Example?" },
                  { QNumber: 42, qName: "What is Normalization of Database?" },
                  { QNumber: 43, qName: "Difference between MYSQL and MSSQL?" },
                  { QNumber: 44, qName: "What is Index?" }
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

export default SqlQ;
