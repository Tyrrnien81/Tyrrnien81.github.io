import React, { useState, useEffect } from "react";
import "./About.css";
import imoticon from "../assets/About/imoticon.png";

const About = () => {
    const [activeTab, setActiveTab] = useState("experience");

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     entry.target.classList.add("animate");
    //                 }
    //             });
    //         },
    //         { threshold: 0.1 }
    //     );

    //     const elements = document.querySelectorAll(".animate-on-scroll");
    //     elements.forEach((el) => observer.observe(el));

    //     return () => observer.disconnect();
    // }, []);

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

                        <div
                            className={`tab-content ${
                                activeTab === "education"
                                    ? "education"
                                    : "experience"
                            }`}
                        >
                            <div
                                className={`tab-pane ${
                                    activeTab === "experience" ? "active" : ""
                                }`}
                            >
                                <div className="timeline-item">
                                    <h4>Software Engineer Intern</h4>
                                    <span className="date">
                                        February 2025 - Current
                                    </span>
                                    <p>AQUA ZONE</p>
                                    <ul>
                                        <li>
                                            Develop and maintain an{" "}
                                            <b>
                                                automated inventory management
                                                system
                                            </b>{" "}
                                            using{" "}
                                            <b>
                                                Node.js, Express.js, WebSockets,
                                                and MySQL,
                                            </b>{" "}
                                            enabling{" "}
                                            <b>real-time stock tracking</b> and
                                            reducing mismanagement risks by
                                            optimizing concurrency control.
                                        </li>
                                        <li>
                                            <b>
                                                Collaborate with
                                                cross-functional teams
                                            </b>{" "}
                                            to refine system functionalities,
                                            provide user training, and deliver
                                            troubleshooting support for seamless
                                            adoption.
                                        </li>
                                    </ul>
                                </div>
                                <div className="timeline-item">
                                    <h4>Executive Board Member</h4>
                                    <span className="date">
                                        April 2024 - Current
                                    </span>
                                    <p>LIKELION Wisconsin at UW-Madison</p>
                                    <ul>
                                        <li>
                                            Develop a functional service in{" "}
                                            <b>
                                                collaboration with team members
                                            </b>{" "}
                                            under the guidance of a mentor.
                                        </li>
                                        <li>
                                            Wisconsin chapter of{" "}
                                            <b>LIKELION US,</b> the{" "}
                                            <b>
                                                largest nonprofit coding
                                                bootcamp company{" "}
                                            </b>{" "}
                                            in South Korea.
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
                                            Led a 4-member development team
                                            using{" "}
                                            <b>React.js, Django, and MySQL, </b>
                                            adopting <b>
                                                Scrum methodologies
                                            </b>{" "}
                                            via <b>Jira</b> for efficient sprint
                                            planning and backlog management.
                                        </li>
                                        <li>
                                            Provided technical oversight by
                                            conducting code reviews on{" "}
                                            <b>
                                                GitHub, implementing ESLint and
                                                Prettier,
                                            </b>{" "}
                                            and facilitating sprint retros,
                                            resulting in a{" "}
                                            <b>20% reduction in defects </b> and
                                            improved team collaboration.
                                        </li>
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
                                            Established and managed the{" "}
                                            <b>
                                                Army Tactical Command
                                                Information System (ATCIS)
                                            </b>{" "}
                                            using{" "}
                                            <b>
                                                Linux servers and networking
                                                protocols,
                                            </b>{" "}
                                            ensuring real-time data
                                            communication and operational
                                            efficiency at the border.
                                        </li>
                                        <li>
                                            Performed{" "}
                                            <b>
                                                technical support and software
                                                installations
                                            </b>{" "}
                                            for mission-critical systems,
                                            leveraging <b>Bash scripting</b> and
                                            teamwork to resolve issues quickly,{" "}
                                            <b>reducing downtime by 30%.</b>
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
