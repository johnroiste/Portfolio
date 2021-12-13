import React from 'react'
import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"




const Footer = () => {
    return (
        <div className="footer bg-dark">
            <div className='container' id="footer">
            <div className='row'>
            <div className="col-md-5 item social"><a id="contact"><FaEnvelope/></a><span>Contact: <em>johnroiste@gmail.com</em></span></div>            
            <div className="col-md-6 item social"><a href="https://github.com/johnroiste" target="_blank" rel="noopener noreferrer"><FaGithub fontSize="1.5em"/></a>
            <a href="https://www.linkedin.com/in/john-roche-front-end-developer-ba144aa7" target="_blank" rel="noopener noreferrer"><FaLinkedinIn fontSize="1.5em"/></a>
            </div>
            <span></span>
            <span></span>
            </div>
            </div>
        </div>
    )}

export default Footer