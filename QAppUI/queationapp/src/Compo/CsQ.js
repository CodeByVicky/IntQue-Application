import React, { useState, useEffect } from "react";
import axios from "axios";
import './ReactQ.css';

function CsQ(){
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
        axios.get('http://qwe1234.somee.com/api/QApp/c_Quations')
            .then((response) => {
                let fetchedData = response.data;
             
                const shuffledData = fetchedData.sort(() => Math.random() - 0.5);
                setData(shuffledData);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
                // If API fails, use default data
                const defaultData = [
                  { QNumber: 1, qName: "What is C#?" },
                  { QNumber: 2, qName: "What is Difference between c++ and c#?" },
                  { QNumber: 3, qName: "What is Difference between Java and c# ?" },
                  { QNumber: 4, qName: "What is Features of c# ?" },
                  { QNumber: 5, qName: "What is Variables ?" },
                  { QNumber: 6, qName: "What is Data Types ?" },
                  { QNumber: 7, qName: "What is Operators ?" },
                  { QNumber: 8, qName: "What is Keywords ?" },
                  { QNumber: 9, qName: "What is Control Statements ?" },
                  { QNumber: 10, qName: "What is Function ?" },
                  { QNumber: 11, qName: "What is Call by Value ?" },
                  { QNumber: 12, qName: "What is Call by Reference ?" },
                  { QNumber: 13, qName: "What is Out Parameter ?" },
                  { QNumber: 14, qName: "What is Arrays ?" },
                  { QNumber: 15, qName: "What is Array to Function ?" },
                  { QNumber: 16, qName: "What is Multidimensional Array ?" },
                  { QNumber: 17, qName: "What is Jagged Arrays ?" },
                  { QNumber: 18, qName: "What is Params Keyword ?" },
                  { QNumber: 19, qName: "What is Array Class ?" },
                  { QNumber: 20, qName: "What is Object and Class ?" },
                  { QNumber: 21, qName: "What is Constructor ?" },
                  { QNumber: 22, qName: "What is Destructor ?" },
                  { QNumber: 23, qName: "What is This Keyword ?" },
                  { QNumber: 24, qName: "What is Static ?" },
                  { QNumber: 25, qName: "What is Static Class ?" },
                  { QNumber: 26, qName: "What is Static Constructor ?" },
                  { QNumber: 27, qName: "What is Structs ?" },
                  { QNumber: 28, qName: "What is Enum ?" },
                  { QNumber: 29, qName: "What is Properties ?" },
                  { QNumber: 30, qName: "What is Inheritance ?" },
                  { QNumber: 31, qName: "What is Aggergation ?" },
                  { QNumber: 32, qName: "What is Member Overloading ?" },
                  { QNumber: 33, qName: "What is Member Overriding ?" },
                  { QNumber: 34, qName: "What is Base Keyword ?" },
                  { QNumber: 35, qName: "What is Polymorphism ?" },
                  { QNumber: 36, qName: "What is Sealed ?" },
                  { QNumber: 37, qName: "What is Abstraction ?" },
                  { QNumber: 38, qName: "What is Abstract class ?" },
                  { QNumber: 39, qName: "What is Interface ?" },
                  { QNumber: 40, qName: "What is NameSpaces ?" },
                  { QNumber: 41, qName: "What is Access Modifiers ?" },
                  { QNumber: 42, qName: "What is Encapsulation ?" },
                  { QNumber: 43, qName: "What is Strings ?" },
                  { QNumber: 44, qName: "What is Exception Handling ?" },
                  { QNumber: 45, qName: "What is Try/Catch blocks ?" },
                  { QNumber: 46, qName: "What is Finally Keyword ?" },
                  { QNumber: 47, qName: "What is Custom Exception ?" },
                  { QNumber: 48, qName: "What is Checked and Unchecked Exception ?" },
                  { QNumber: 49, qName: "What is Collections ?" },
                  { QNumber: 50, qName: "What is List<T> ?" },
                  { QNumber: 51, qName: "What is HashSet<T> ?" },
                  { QNumber: 52, qName: "What is Stack<T> ?" },
                  { QNumber: 53, qName: "What is Queue<T> ?" },
                  { QNumber: 54, qName: "What is Dictionary<K,V> ?" },
                  { QNumber: 55, qName: "What is Generics ?" },
                  { QNumber: 56, qName: "What is Delegates ?" },
                  { QNumber: 57, qName: "What is Reflection ?" },
                  { QNumber: 58, qName: "What is Anonymous Function ?" },
                  { QNumber: 59, qName: "What is Multithreading ?" },
                  { QNumber: 60, qName: "What is Synchronization ?" },
                  { QNumber: 61, qName: "What is Static Classes ?" },
                  { QNumber: 62, qName: "What is Lambda Expression ?" },
                  { QNumber: 63, qName: "What is Goto Statement ?" },
                  { QNumber: 64, qName: "What is Difference between Convert.ToString() and ToString() ?" },
                  { QNumber: 65, qName: "What is Event ?" },
                  { QNumber: 66, qName: "What is SOLID principles ?" },
                  { QNumber: 67, qName: "What is Dependency Injection ?" },
                  { QNumber: 68, qName: "What is Recursion ?" },
                  { QNumber: 69, qName: "Can we Write the Variable in Interface ?" },
                  { QNumber: 70, qName: "Which keyword is used to restrict the class ?" },
                  { QNumber: 71, qName: "What is IDisposable interface ?" },
                  { QNumber: 72, qName: "Which types of interface Implementation ?" },
                  { QNumber: 73, qName: "What is ToString() ?" },
                  { QNumber: 74, qName: "What is Using Keyword?" },
                  { QNumber: 75, qName: "There is any another way to write namespace without using 'using' Keyword ?" },
                  { QNumber: 76, qName: "What is Difference between character array and string array ?" },
                  { QNumber: 77, qName: "What is Difference between Read() and ReadLine() ?" },
                  { QNumber: 78, qName: "What is Difference between Const and Readonly keyword ?" },
                  { QNumber: 79, qName: "What is Difference between IEnumerable and IQueryable ?" },
                  { QNumber: 80, qName: "What is Data Annotation ?" },
                  { QNumber: 81, qName: "How to Create Custom Annotation ?" }
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
                            <h1>C# QUESTIONS</h1>
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

export default CsQ;
