import React from "react";
import "./Contact.css";

import email from "../assets/Home/email.png";
import linkedin from "../assets/Home/linkedin.png";
import github from "../assets/Home/github.png";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2 className="contact-title animate-on-scroll">Contact Me</h2>
            <div className="contact-content animate-on-scroll">
                <div className="contact-text">
                    <p>
                        I'm currently looking for new opportunities. <br /> Feel
                        free to reach out!
                    </p>
                </div>

                <div className="contact-social animate-on-scroll">
                    {/* <a
                                    href="tel:(920) 297-0501"
                                    target="_blank"
                                    className="home-social-links"
                                >
                                    <img src={phone} alt="Phone" />
                                </a> */}
                    <a
                        href="mailto:june121284@gmail.com"
                        target="_blank"
                        className="contact-social-links"
                    >
                        <img src={email} alt="Email" />
                    </a>
                    <a
                        href="https://github.com/Tyrrnien81"
                        target="_blank"
                        className="contact-social-links"
                    >
                        <img src={github} alt="GitHub" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/june121284/"
                        target="_blank"
                        className="contact-social-links"
                    >
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
