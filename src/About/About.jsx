import React, { useState, useEffect } from "react";
import "./About.css";
import imoticon from "../assets/About/imoticon.png";

const About = () => {
    const [activeTab, setActiveTab] = useState("experience");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about" id="about">
            <div className="container">
                <h2 className="about-title animate-on-scroll">About Me</h2>
                <div className="about-content">
                    <div className="about-image animate-on-scroll">
                        <img src={imoticon} alt="Profile" />
                    </div>
                    <div className="tabs-container animate-on-scroll">
                        <div className="tabs">
                            <button
                                className={`tab-btn ${
                                    activeTab === "experience" ? "active" : ""
                                }`}
                                onClick={() => setActiveTab("experience")}
                            >
                                Experience
                            </button>
                            <button
                                className={`tab-btn ${
                                    activeTab === "education" ? "active" : ""
                                }`}
                                onClick={() => setActiveTab("education")}
                            >
                                Education
                            </button>
                        </div>

                        <div className="tab-content">
                            <div
                                className={`tab-pane ${
                                    activeTab === "experience" ? "active" : ""
                                }`}
                            >
                                <div className="timeline-item">
                                    <h4>Board Member</h4>
                                    <span className="date">
                                        April 2024 - Current
                                    </span>
                                    <p>LikeLion Wisconsin at UW-Madison</p>
                                    <ul>
                                        <li>
                                            Developing a functional service in
                                            collaboration with team members
                                            under the guidance of a mentor
                                        </li>
                                        <li>
                                            Wisconsin chapter of LikeLion, the
                                            largest nonprofit coding bootcamp
                                            company in South Korea
                                        </li>
                                    </ul>
                                </div>
                                <div className="timeline-item">
                                    <h4>Software Coordinator</h4>
                                    <span className="date">
                                        September 2023 - Current
                                    </span>
                                    <p>Computer Science Union at UW-Madison</p>
                                    <ul>
                                        <li>
                                            Leading a 4-member team, managing
                                            development and ensuring project
                                            success
                                        </li>
                                        {/* <li>
                                            Collaborated with cross-functional
                                            teams
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="timeline-item">
                                    <h4>Tactical C4I System Operator</h4>
                                    <span className="date">
                                        December 2018 - August 2020
                                    </span>
                                    <p>Republic of Korea Army</p>
                                    <ul>
                                        <li>
                                            Managed the ATCIS with Linux
                                            servers, ensuring real-time
                                            communication
                                        </li>
                                        <li>
                                            Provided mission-critical support
                                            through Bash scripting and effective
                                            teamwork
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className={`tab-pane ${
                                    activeTab === "education" ? "active" : ""
                                }`}
                            >
                                <div className="timeline-item">
                                    <h4>University of Wisconsin-Madison</h4>
                                    <span className="date">
                                        Expected May 2026
                                    </span>
                                    <p>B.S. in Computer Science</p>
                                    <ul>
                                        {/* <li>Dean's List: 2021-2023</li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
