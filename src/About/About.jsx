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
                                        May 2025 - August 2025
                                    </span>
                                    <p>AQUA ZONE | Los Angeles, CA</p>
                                    <ul>
                                        <li>
                                            Developed core features for{" "}
                                            <b>
                                                a real-time inventory platform
                                            </b>{" "}
                                            that centralized stock across three
                                            distributed warehouses, directly
                                            supporting the company's expansion.
                                        </li>
                                        <li>
                                            Built a real-time inventory system
                                            with WebSockets to handle inventory
                                            changes with{" "}
                                            <b>
                                                an average latency of under
                                                200ms.
                                            </b>
                                        </li>
                                        <li>
                                            Designed a JWT-secured REST API with
                                            role-based access control that
                                            processed <b>over 100,000 daily</b>{" "}
                                            inventory write operations securely.
                                        </li>
                                    </ul>
                                </div>
                                <div className="timeline-item">
                                    <h4>Software Developer Intern</h4>
                                    <span className="date">
                                        January 2025 - May 2025
                                    </span>
                                    <p>LIKELION US | Los Angeles, CA</p>
                                    <ul>
                                        <li>
                                            Enhanced the front-end performance
                                            and accessibility of{" "}
                                            <b>
                                                a web application for 300+
                                                users,
                                            </b>{" "}
                                            while also owning the release of new
                                            features.
                                        </li>
                                        <li>
                                            Drove a front-end performance
                                            initiative,{" "}
                                            <b>
                                                cutting page load time by 27%
                                                and API payloads by 25%
                                            </b>{" "}
                                            using code splitting and SWR.
                                        </li>
                                        <li>
                                            <b>
                                                Reduced critical WCAG issues by
                                                20%{" "}
                                            </b>
                                            with Lighthouse CI and GitHub
                                            Actions gates, unblocking releases.
                                        </li>
                                    </ul>
                                </div>
                                <div className="timeline-item">
                                    <h4>Software Coordinator</h4>
                                    <span className="date">
                                        September 2023 - January 2025
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
