import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
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
