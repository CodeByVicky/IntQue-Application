import React, { useState, useEffect } from "react";
import axios from "axios";
import './ReactQ.css';

function JavaQ(){
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
        axios.get('http://qwe1234.somee.com/api/QApp/javaQuations')
            .then((response) => {
                const shuffledData = response.data.sort(() => Math.random() - 0.5);
                setData(shuffledData);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
                // If API fails, use default data
                const defaultData = [
                    { QNumber: 1, qName: "What is Java?" },
                    { QNumber: 2, qName: "Explain the features of Java." },
                    { QNumber: 3, qName: "What is Variable in Java and its types?" },
                    { QNumber: 4, qName: "What is Method in Java?" },
                    { QNumber: 5, qName: "What is Datatypes and define its types?" },
                    { QNumber: 6, qName: "What is Initializers in Java?" },
                    { QNumber: 7, qName: "What is Class in Java?" },
                    { QNumber: 8, qName: "What are the Members of the Class in Java?" },
                    { QNumber: 9, qName: "Difference between Print() and Println() Statement." },
                    { QNumber: 10, qName: "What are the Tokens in Java?" },
                    { QNumber: 11, qName: "What is Identifiers?" },
                    { QNumber: 12, qName: "What is Components in Java?" },
                    { QNumber: 13, qName: "What are the Conventions in Java?" },
                    { QNumber: 14, qName: "What is Literals in Java?" },
                    { QNumber: 15, qName: "What is Primitive Datatype?" },
                    { QNumber: 16, qName: "What is Non-Primitive Datatypes?" },
                    { QNumber: 17, qName: "What is Primitive Variable?" },
                    { QNumber: 18, qName: "What is Non-Primitive Variable?" },
                    { QNumber: 19, qName: "What is Constructor and its types?" },
                    { QNumber: 20, qName: "What is TypeCast Operator?" },
                    { QNumber: 21, qName: "What are the loops in Java?" },
                    { QNumber: 22, qName: "Difference between While loop and Do While loop?" },
                    { QNumber: 23, qName: "Why we use For loop?" },
                    { QNumber: 24, qName: "What are the Decision Making statement in Java?" },
                    { QNumber: 25, qName: "What are Conditional statements in Java?" },
                    { QNumber: 26, qName: "What are the Keywords in Java?" },
                    { QNumber: 27, qName: "Why Java is platform independent?" },
                    { QNumber: 28, qName: "What is Class File?" },
                    { QNumber: 29, qName: "What are the Modifiers and its types?" },
                    { QNumber: 30, qName: "What are the Bytecode in Java?" },
                    { QNumber: 31, qName: "What is Source file in Java?" },
                    { QNumber: 32, qName: "What is Static?" },
                    { QNumber: 33, qName: "What is ClassLoader?" },
                    { QNumber: 34, qName: "What is Interpreter in Java?" },
                    { QNumber: 35, qName: "Difference between Instance variable and Local variable?" },
                    { QNumber: 36, qName: "What are the Parameters?" },
                    { QNumber: 37, qName: "What is Object in Java?" },
                    { QNumber: 38, qName: "Why we use Scanner Class in Java?" },
                    { QNumber: 39, qName: "What is Array?" },
                    { QNumber: 40, qName: "On which memory arrays are created in Java?" },
                    { QNumber: 41, qName: "What are the types of Array in Java?" },
                    { QNumber: 42, qName: "What are the Advantages and Disadvantages of Array?" },
                    { QNumber: 43, qName: "Syntax of Array declaration in Java." },
                    { QNumber: 44, qName: "Can we change the size of an array after creation?" },
                    { QNumber: 45, qName: "What is Anonymous Array in Java?" },
                    { QNumber: 46, qName: "What is OOPS in Java?" },
                    { QNumber: 47, qName: "Explain the 4 principles of OOPS." },
                    { QNumber: 48, qName: "What is Is-A relationship in Java?" },
                    { QNumber: 49, qName: "What is Has-a relationship in Java?" },
                    { QNumber: 50, qName: "What is Encapsulation?" },
                    { QNumber: 51, qName: "What is Data Hiding?" },
                    { QNumber: 52, qName: "For what purpose we use Encapsulation?" },
                    { QNumber: 53, qName: "Why we use Getter and Setter Method?" },
                    { QNumber: 54, qName: "How can we achieve Encapsulation in Java?" },
                    { QNumber: 55, qName: "What are the Advantages and Disadvantages of Encapsulation?" },
                    { QNumber: 56, qName: "Which Modifiers are used to achieve Encapsulation?" },
                    { QNumber: 57, qName: "What is Inheritance and its types?" },
                    { QNumber: 58, qName: "Why we use Inheritance in Java?" },
                    { QNumber: 59, qName: "How can we achieve Inheritance in Java?" },
                    { QNumber: 60, qName: "What is extends keyword in Java?" },
                    { QNumber: 61, qName: "Why java cannot support multiple inheritances?" },
                    { QNumber: 62, qName: "What is Polymorphism and its types?" },
                    { QNumber: 63, qName: "How can we achieve polymorphism?" },
                    { QNumber: 64, qName: "Why we use Polymorphism in Java?" },
                    { QNumber: 65, qName: "What is Abstraction?" },
                    { QNumber: 66, qName: "How can we achieve abstraction in Java?" },
                    { QNumber: 67, qName: "What is interface in Java?" },
                    { QNumber: 68, qName: "Why we use interface in Java?" },
                    { QNumber: 69, qName: "How can we achieve interface in java?" },
                    { QNumber: 70, qName: "Difference between abstract and interface." },
                    { QNumber: 71, qName: "Can we achieve multiple inheritance using interface and how?" },
                    { QNumber: 72, qName: "What is collection and its types?" },
                    { QNumber: 73, qName: "Difference between list and collection." },
                    { QNumber: 74, qName: "How to Create collection in Java?" },
                    { QNumber: 75, qName: "What is ArrayList?" },
                    { QNumber: 76, qName: "What is Collection framework in Java?" },
                    { QNumber: 77, qName: "What is Iterator in Java?" },
                    { QNumber: 78, qName: "What is the use of iterator?" },
                    { QNumber: 79, qName: "What are 3 types of iteration in Java?" },
                    { QNumber: 80, qName: "How can we achieve iteration? Give me all records." }
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

export default JavaQ;
