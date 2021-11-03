import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const WebQuestionnaire = () => {
    return (
        <>
        {/* navbar */}
        <div className="web-nav">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="container-fluid">
                        <a className="navbar-brand" href><img className="" src={logo} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-2">
                                <a className="nav-link" aria-current="page" href>Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href>About Us</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href>Our Services</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href>Pricing Plans</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href>FAQs</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href>Contact</a>
                            </li>
                        </ul>
                        <Link className="btn btn-primary" to="/ar">عربي</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        {/* form  */}
        <div className="bg-web">
            <form action="" className='web-en-form web'>
            <div className="container">
                <div className="form-title">
                    <h2>Web On-boarding Questionnaire</h2>
                    <p>Kindly provide required information about your work in order to conceive the specifications of your business</p>
                </div>

                <div className="full-name">
                    <label htmlFor="fname" className="form-label">Full Name</label><br/>
                    <input type="text" id="fname" name="fname" required/>
                </div>

                <div className="phone-number">
                    <label htmlFor="fname" className="form-label">Phone Number</label><br/>
                    <input type="number" id="fname" name="fname" required/>
                </div>

                <div className="email">
                    <label htmlFor="fname" className="form-label">Email</label><br/>
                    <input type="email" id="fname" name="fname" required/>
                </div>

                <div className="company-name">
                    <label htmlFor="fname" className="form-label">Business/Company Name</label><br/>
                    <input type="text" id="fname" name="fname" required/>
                </div>

                <div className="your-business">
                    <label htmlFor="fname" className="form-label">Please tell us about your business (Who are you? What do you do?)</label><br/>
                    <input type="text" id="fname" name="fname" required/>
                </div>

                <div className="your-offer">
                    <label htmlFor="fname" className="form-label">What do you offer (Product/Service)?</label><br/>
                    <input type="text" id="fname" name="fname" required/>
                </div>

                <div className="provide-the-current-Website">
                    <label htmlFor="fname" className="form-label">Please provide the current Website URL (if available)</label><br/>
                    <input type="text" id="fname" name="fname"/>
                </div>

                <div className="your-opinion">
                    <label htmlFor="fname" className="form-label">If there is a website, what is wrong with the current website in your opinion?</label><br/>
                    <input type="text" id="fname" name="fname"/>
                </div>

                <div className="your-domains">
                    <label htmlFor="fname" className="form-label">If your answer was yes, please tell us the domain's name (we will need an access later on)</label><br/>
                    <input type="text" id="fname" name="fname"/>
                </div>

                <div className="choose-radio">
                    <label htmlFor="fname" className="form-label">Is the content of your website available (Textual content: info, articles, copyrights, Graphic Content: logo, colors, images, videos, etc..)?</label><br/>
                    <br/>
                    <input type="radio" name="choose-websita-available" required/>
                    <label htmlFor="html">Yes</label><br/>
                    <input type="radio" name="choose-websita-available"/>
                    <label htmlFor="html">No</label><br/>
                </div>

                <div className="choose-radio">
                    <label htmlFor="fname" className="form-label">If your answer was no, do you have a content creator?</label><br/>
                    <br/>
                    <input type="radio" name="choose-contact-creator"/>
                    <label>Yes</label><br/>
                    <input type="radio" name="choose-contact-creator"/>
                    <label>No</label><br/>
                </div>

                <div className="choose-radio">
                    <label htmlFor="fname" className="form-label">Do you want a single language or multilingual site?</label><br/>
                    <br/>
                    <input type="radio" name="choose-site" required/>
                    <label>Single language</label><br/>
                    <input type="radio" name="choose-site"/>
                    <label>Multilingual</label><br/>
                </div>

                <div className="choose-check-box">
                    <label htmlFor="fname" className="form-label">What are the pages / sections that you need to include in your website?</label><br/>
                    <br/>
                    <input type="checkbox" name="choose-pages-you-want" value="About"/>
                    <label>About</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="Home"/>
                    <label>Home</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="Contact"/>
                    <label>Contact</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="Archives"/>
                    <label>Archives</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="Portfolio"/>
                    <label>Portfolio</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="Services"/>
                    <label>Services</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="FAQ"/>
                    <label>FAQ</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="Location-map"/>
                    <label>Location map</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="Testimonials"/>
                    <label>Testimonials</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="News"/>
                    <label>News</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="Authentication"/>
                    <label>Authentication (Sign-up / Login)</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="E-commerce"/>
                    <label>Store (E-commerce)</label><br/> 
                    <input type="checkbox" name="choose-pages-you-want" value="Blog"/>
                    <label>Blog</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="Else"/>
                    <label>Else</label> <input type="text" name="" id=""/> 
                </div>

                <div className="choose-radio">
                    <label htmlFor="fname" className="form-label">Do you want social media icons on your site?</label><br/>
                    <br/>
                    <input type="radio" name="choose-social-media" required/>
                    <label>Yes</label><br/>
                    <input type="radio" name="choose-social-media"/>
                    <label>No</label><br/>
                </div>

                <div className="choose-check-box">
                    <label htmlFor="fname" className="form-label">If your answer is yes, which platforms do you use?</label><br/>
                    <br/>
                    <input type="checkbox" name="choose-platforms" value="Twitter"/>
                    <label>Twitter</label><br/>
                    <input type="checkbox" name="choose-platforms" value="Facebook"/>
                    <label>Facebook</label><br/>
                    <input type="checkbox" name="choose-platforms" value="Instagram"/>
                    <label>Instagram</label><br/>
                    <input type="checkbox" name="choose-platforms" value="LinkedIn"/>
                    <label>LinkedIn</label><br/>
                    <input type="checkbox" name="choose-platforms" value="Pinterest"/>
                    <label>Pinterest</label><br/> 
                    <input type="checkbox" name="choose-platforms" value="Snapchat"/>
                    <label>Snapchat</label><br/>
                    <input type="checkbox" name="choose-platforms" value="Else"/>
                    <label>Else</label> <input type="text" name="" id=""/> 
                </div>

                <div className="choose-radio">
                    <label htmlFor="fname" className="form-label">Are you interested in our Brand Identity Service?</label><br/>
                    <br/>
                    <input type="radio" name="choose-our-brand" required/>
                    <label>Yes</label><br/>
                    <input type="radio" name="choose-our-brand"/>
                    <label>No</label><br/>
                </div>  

                <div className="additional-information">
                    <label htmlFor="fname" className="form-label">Please write any additional information or requirement</label><br/>
                    <input type="text" id="fname" name="fname" required />
                </div>

                <div className="thank-you">
                    <h4>We will study the specifications of your project and will contact you soon to set a business meeting. Thank you.</h4>
                </div>

                <main>
                    <a href="./form-3.html"><input type="submit"/></a>
                </main>
            </div>
        </form>
        </div>
        <div className="web-footer">
            <footer className='brand-footer'>
                    <div className="container d-flex text-light">
                        <div>
                            <img className="w-75" src={logo} alt="" />
                        </div>
                        <div>
                            <p>We're on a mission to build a better <br />
                            future where technology creates <br />
                            good jobs for everyone</p>
                            <i className="fas fa-phone-alt"></i> +90 212 855 90 74
                            <br />
                            <i className="fab fa-whatsapp"></i> +90 533 614 90 74
                            <br />
                            <i className="far fa-map"></i> Istanbul, Turkey
                            <p>Copyright © 2021. All Rights Reserved</p>
                        </div>
                        <div className="social-icon">
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </div>
            </footer>
        </div>
        </>
    )
}

export default WebQuestionnaire
