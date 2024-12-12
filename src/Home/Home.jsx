import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import "./Home.css";

import Leo from "../assets/Home/Leo.png";

const Home = () => {
    const descriptionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            },
            { threshold: 0.1 }
        );

        if (descriptionRef.current) {
            observer.observe(descriptionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <section className="home">
                <div className="container">
                    <div className="home-content">
                        <div className="text-zone">
                            <h2 className="greeting">Hello, I'm</h2>
                            <h1 className="name">Leo Jeong</h1>
                            <h2 className="title">
                                A CS Junior at <span>UW-Madison</span>
                            </h2>
                            <h3 className="description" ref={descriptionRef}>
                                Passionate Aspiring Software Engineer
                                <br />
                                driven to craft human-centered, accessible
                                technology.
                            </h3>
                            <div className="buttons">
                                <a href="#projects" className="btn">
                                    View My Work
                                </a>
                                <a href="#contact" className="btn outline">
                                    Contact Me
                                </a>
                            </div>
                        </div>
                        <div className="image-zone">
                            <img src={Leo} alt="Leo Jeong" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
