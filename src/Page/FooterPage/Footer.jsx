import React from "react";
import "./footer.css";
import demo5 from "../../Images/demo1.jpg";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className="footer">
            <div className="footersections">
                <div className="footersection1">
                    <img className="footerlogo" src={demo5} alt="" />
                    <div className="footermsg">Research Methods For Women Empowerment</div>
                </div>
                <div className="footersection">
                    <ul>
                        <li className="footertitle">About</li>
                        Created for purpose of growth and understanding, helping minds in developing civilization.
                    </ul>
                </div>
                <div className="footersection">
                    <ul>
                        <li className="footertitle">By</li>
                        David Okani
                    </ul>
                    <ul>
                        <li className="footertitle">From:</li>
                        University of Abuja, Nigeria.
                    </ul>
                    <ul>
                        <li className="footertitle">In Honor Of:</li>
                        Bachelor of Arts in English
                    </ul>
                    <ul>
                        <li className="footertitle">Department Of:</li>
                        English &  Literary Studies
                    </ul>
                    <ul>
                        <li className="footertitle">Date Published:</li>
                        16th December, 2023.
                    </ul>
                </div>

            </div>
            <div className="credit">
                <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    )
};

export default Footer;
