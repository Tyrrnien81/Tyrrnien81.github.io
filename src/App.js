import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import StarBack from "./StarBack/StarBack";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Helmet>
                    <title>Leo Jeong's portfolio</title>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>
                {/* StarBack outside of Routes to display on all pages */}
                <StarBack />
                {/* Header outside of Routes to display on all pages */}
                <Header />
                <Routes>
                    {/* Default Home Page */}
                    <Route
                        path="/"
                        element={
                            <>
                                <div id="home">
                                    <Home />
                                </div>
                                <div id="about">
                                    <About />
                                </div>
                                <div id="skills">
                                    <Skills />
                                </div>
                                <div id="projects">
                                    <Projects />
                                </div>
                                <div id="contact">
                                    <Contact />
                                </div>
                            </>
                        }
                    />
                    {/* Redirect unknown paths to Home Page */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
