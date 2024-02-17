import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ReactQ.css';
function Navbar() {
    // State to keep track of the active link
    const [activeLink, setActiveLink] = useState(null);

    // Function to handle click on a link
    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    // Function to determine if a link is active
    const isLinkActive = (linkName) => {
        return activeLink === linkName ? 'active' : '';
    };

    return (
        <nav className="navbar navbar-expand-lg  custom-navbar">
            <div className="container-fluid">
                <Link
                    className={`nav-link navbar-brand ${activeLink === null ? 'active' : ''}`}
                    to="/"
                    onClick={() => handleLinkClick(null)}
                >
                    IntQueations
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isLinkActive('ReactQ')}`}
                                to="/ReactQ"
                                onClick={() => handleLinkClick('ReactQ')}
                            >
                                React JS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isLinkActive('JsQ')}`}
                                to="/JsQ"
                                onClick={() => handleLinkClick('JsQ')}
                            >
                                JavaScript
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isLinkActive('DotnetQ')}`}
                                to="/DotnetQ"
                                onClick={() => handleLinkClick('DotnetQ')}
                            >
                                Dot.Net
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isLinkActive('AdoQ')}`}
                                to="/AdoQ"
                                onClick={() => handleLinkClick('AdoQ')}
                            >
                                Ado.Net
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isLinkActive('AspQ')}`}
                                to="/AspQ"
                                onClick={() => handleLinkClick('AspQ')}
                            >
                                Asp.Net
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isLinkActive('MvcQ')}`}
                                to="/MvcQ"
                                onClick={() => handleLinkClick('MvcQ')}
                            >
                                MVC
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isLinkActive('ApiQ')}`}
                                to="/ApiQ"
                                onClick={() => handleLinkClick('ApiQ')}
                            >
                                Web Api
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isLinkActive('CsQ')}`}
                                to="/CsQ"
                                onClick={() => handleLinkClick('CsQ')}
                            >
                                C#
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isLinkActive('SqlQ')}`}
                                to="/SqlQ"
                                onClick={() => handleLinkClick('SqlQ')}
                            >
                                SQL
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isLinkActive('JavaQ')}`}
                                to="/JavaQ"
                                onClick={() => handleLinkClick('JavaQ')}
                            >
                                JAVA
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isLinkActive('ManualQ')}`}
                                to="/ManualQ"
                                onClick={() => handleLinkClick('ManualQ')}
                            >
                                Manual
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isLinkActive('AngularQ')}`}
                                to="/AngularQ"
                                onClick={() => handleLinkClick('AngularQ')}
                            >
                               Angular
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isLinkActive('LogicQ')}`}
                                to="/LogicQ"
                                onClick={() => handleLinkClick('LogicQ')}
                            >
                                Logical Coding
                            </Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
