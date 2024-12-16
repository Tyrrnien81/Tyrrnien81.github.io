import React from "react";
import "./Projects.css";

import LikeLionUWM from "../assets/Projects/LikeLionUWM.png";
import Bascom from "../assets/Projects/Bascom.jpg";
import LeNet_miniplaces from "../assets/Projects/LeNet_miniplaces.png";
import BubbleBurster from "../assets/Projects/BubbleBurster.png";

const Projects = () => {
    const projects = [
        {
            title: "Possibility to Reality",
            description:
                "The official website for LikeLion Wisconsin, a student-led tech community focusing on web development and programming education.",
            image: LikeLionUWM,
            technologies: ["React.js", "HTML", "CSS", "JavaScript"],
            githubLink: "https://github.com/LikeLion-ProjectTeam/UWM",
            demoLink: "https://likelion-projectteam.github.io/UWM",
        },
        {
            title: "Shortest Path Finder",
            description:
                "Developed a Java application with an interactive JavaFX UI, using Dijkstra's algorithm to compute efficient campus routes.",
            image: Bascom,
            technologies: ["Java", "JavaFX", "Linux(Ubuntu)"],
            githubLink: "https://github.com/Tyrrnien81/shortest-path-finder",
            // demoLink: "https://likelion-projectteam.github.io/UWM",
        },
        {
            title: "LeNet-MiniPlaces",
            description:
                "Implemented the LeNet-5 CNN with PyTorch to classify 100 scene categories from the MiniPlaces dataset.",
            image: LeNet_miniplaces,
            technologies: ["Python", "PyTorch"],
            githubLink: "https://github.com/Tyrrnien81/LeNet-MiniPlaces",
            // demoLink: "https://likelion-projectteam.github.io/UWM",
        },
        {
            title: "Bubble Burster",
            description:
                "Developed an HTML5 Canvas game where players control a paddle to pop falling bubbles, featuring multiple difficulty levels and real-time statistics.",
            image: BubbleBurster,
            technologies: ["HTML", "JavaScript"],
            githubLink: "https://github.com/Tyrrnien81/bubble-buster",
            // demoLink: "https://likelion-projectteam.github.io/UWM",
        },
    ];

    return (
        <section className="projects" id="projects">
            <h2 className="projects-title animate-on-scroll">
                Recent Projects
            </h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card animate-on-scroll" key={index}>
                        <div
                            className="project-image"
                            style={{
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: "cover", // 추가: 이미지 크기 조정
                                backgroundPosition: "center", // 추가: 이미지 위치 조정
                            }}
                        >
                            <div className="project-overlay">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="technologies">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub <span>↗</span>
                                    </a>
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Demo <span>↗</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
