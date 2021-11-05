import React from 'react'
import osgLogo from '../assets/images/logo.png'
import heroIcon from '../assets/images/hero-social-icon.png'
import heroText from '../assets/images/hero-social-text-after.png'
import brandNameBg1 from '../assets/images/brandname-bg-1.png'
import brandNameBg2 from '../assets/images/brandname-bg-2.png'
import brandNameBgDesignIcon from '../assets/images/social-design-icon-03.jpg'
import { Link } from 'react-router-dom'

const SocialMediaQuestionnaire = () => {
    return (
        <div className="main-parent-social-media social-en"> {/* this main div is holding the full site */}
            {/* navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="container-fluid">
                        <a className="navbar-brand" href><img className="w-50" src={osgLogo} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-2">
                                    <a className="nav-link" aria-current="page" href={'https://osgpro.com/'}>Home</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href={'https://osgpro.com/about/'}>About Us</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href={'https://osgpro.com/services/'}>Our Services</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href={'https://osgpro.com/pricing/'}>Pricing Plans</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href={'https://osgpro.com/faq/'}>FAQs</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href={'https://osgpro.com/contact/'}>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* hero section */}
            <div className="bg">
                <div className="hero">
                    <div className="container position-relative">
                        <div className="d-flex justify-content-end col-12 pr-4 mx-right lang-btn-container">
                            <Link className="btn btn-primary position-relative" to="/ar">عربي</Link>
                        </div>
                        {/* <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"><Link className="position-reative" to="/ar">Ar</Link></span>
                        </label> */}
                        <div className="d-flex justify-content-around hero-social">
                            <img src={heroIcon} alt="" className='mt-5 pt-5 col-4 w-50 align-self-center icon-none'/>
                            <img src={heroText} alt="" className='mt-5 pt-5 col-4 w-50 align-self-center width-100'/>
                        </div>
                    </div>
                </div>

                {/* form section */}
                <form className="form">
                    <div className="container">
                        <div className="d-flex justify-content-between">
                            <div className="context-bg d-flex position-relative">
                                <img src={brandNameBg1} alt=""/>
                                <div className="brand-name-tagline position-absolute">
                                    <label htmlFor="brandName" className="text-primary">COMPANY NAME:</label>
                                    <input type="text" id="brandName" name="brandName" className="text-center w-100" required/>
                                    <div className="email w-100">
                                        <label htmlFor="">PRIMARY CONTACT NAME:</label>
                                        <input type="text" id="" name="" className="text-left w-100" required/>
                                    </div>
                                    <div className="email">
                                        <label htmlFor="">PRIMARY CONTACT ROLE:</label>
                                        <input type="text" id="" name="" className="text-left w-100" />
                                    </div>
                                </div>
                            </div>
                            <div className="position-relative design-icon-container d-flex justify-content-end col-md-5">
                                <img src={brandNameBgDesignIcon} alt="" className="design-icon position-absolute w-100"/>
                                <img src={brandNameBg2} alt="" className=""/>
                            </div>
                        </div>
                    </div>
                    <div className="questions">
                        <div className="container">
                            {/* question 1 */}
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="">PRIMARY CONTACT INFORMATION (EMAIL, PHONE NUMBER, ETC.):</label>
                                <textarea className="text-left" name="" id="" cols="30" rows="2" required></textarea>
                            </div>

                            {/* question 2 */}
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="">WHO IS YOUR PREFERRED SECONDARY CONTACT? (PLEASE MENTION CONTACT INFORMATION):</label>
                                <textarea className="text-left" name="" id="" cols="30" rows="2" required></textarea>
                            </div>

                            {/* question 3 */}
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="nameMeaning">WHAT IS THE PREFERRED METHOD OF COMMUNICATION?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_emailEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_emailEnAfter">EMAIL</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_meetingEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_meetingEnAfter">VIRTUAL MEETING / CALL</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_phoneCallEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_phoneCallEnAfter">PHONE CALL</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"  id="_personEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_personEnAfter"> IN PERSON </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 4 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">PLEASE PROVIDE THE COMPANY LOGO IN ALL ITS CURRENT FORMATS AND STYLES. IF POSSIBLE, PROVIDE THE IMAGES IN PNG FORMAT ON A TRANSPARENT BACKGROUND.</label>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input"/>
                                    <label className="custom-file-label">Choose file</label>
                                </div>
                            </div>

                            {/* question 5 */}
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="">PLEASE PROVIDE THE PRIMARY FONT AND SECONDARY FONTS THAT ARE USED ON THE COMPANY’S DIGITAL MATERIALS.</label>
                                <textarea className="text-left" name="" id="" cols="30" rows="2" required></textarea>
                            </div>

                            {/* question 6 */}
                            <div className="col-lg-8 mx-auto">
                                <h4 className="pb-3">GENERAL INFORMATION</h4>
                                <label htmlFor="">ARE YOU GOING TO PROVIDE US WITH CONTENT MATERIALS?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"  id="_yesEnAfter1"/>
                                            <label className="custom-control-label text-primary" htmlFor="_yesEnAfter1">YES</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_yesEnAfter2"/>
                                            <label className="custom-control-label text-primary" htmlFor="_yesEnAfter2">NO</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 7 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">ARE YOU OKAY WITH USING STOCK PHOTOS?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"  id="_yesEnAfter3"/>
                                            <label className="custom-control-label text-primary" htmlFor="_yesEnAfter3">YES</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_yesEnAfter4"/>
                                            <label className="custom-control-label text-primary" htmlFor="_yesEnAfter4">NO</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 8 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">DO YOU HAVE ANY OFFERS OR PROMOTIONS THAT WE CAN USE FOR YOUR CAMPAIGN?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"  id="_yesEnAfter5"/>
                                            <label className="custom-control-label text-primary" htmlFor="_yesEnAfter5">YES</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_yesEnAfter6"/>
                                            <label className="custom-control-label text-primary" htmlFor="_yesEnAfter6">NO</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 9 */}
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="nameMeaning">WHAT IS YOUR PREFERABLE CALL TO ACTION (CTA) IN A POST?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_bookEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_bookEnAfter">BOOK NOW</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_learnmoreEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_learnmoreEnAfter">LEARN MORE</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_whatsappEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_whatsappEnAfter">SEND A WHATSAPP MESSAGE</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_shopEnAfter" />
                                            <label className="custom-control-label text-primary" htmlFor="_shopEnAfter">SHOP OUR WEBSITE</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_visitEnAfter" />
                                            <label className="custom-control-label text-primary" htmlFor="_visitEnAfter">VISIT OUR STORE</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_callUsEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_callUsEnAfter">CALL US NOW</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"  id="_sendmessEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_sendmessEnAfter">SEND A MESSAGE</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_shopstoreEnAfter" />
                                            <label className="custom-control-label text-primary" htmlFor="_shopstoreEnAfter">SHOP OUR STORE</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_signEnAfter" />
                                            <label className="custom-control-label text-primary" htmlFor="_signEnAfter">SIGN UP</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 10 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">DO YOU HAVE ANY OFFERS OR PROMOTIONS THAT WE CAN USE FOR YOUR CAMPAIGN?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_publishEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_publishEnAfter">PUBLISH</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_waitEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_waitEnAfter">WAIT</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 11 */}
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="">PLEASE PROVIDE US WITH A LIST OF FREQUENTLY ASKED QUESTIONS FAQ AND ITS ANSWERS (HOURS OF OPERATION, PRODUCT, SERVICES, ETC.)?.</label>
                                <textarea className="text-left" name="" id="" cols="30" rows="2" required></textarea>
                            </div>

                            {/* question 12 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">HOW TO REPLY ON A PRICE INQUIRY?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_giveacallEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_giveacallEnAfter">GIVE A CALL</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_replayEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_replayEnAfter">REPLY IN A COMMENT</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_sendinboxEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_sendinboxEnAfter">SEND AN INBOX MESSAGE</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"  id="_referEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_referEnAfter">REFER TO WEBSITE</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 13 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">HOW TO REPLY ON AN ADDITIONAL INFO REQUEST?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_giveacalllEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_giveacalllEnAfter">GIVE A CALL</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_replayinEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_replayinEnAfter">REPLY IN A COMMENT</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_sensaninpoxEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_sensaninpoxEnAfter">SEND AN INBOX MESSAGE</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_refertowebEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_refertowebEnAfter">REFER TO WEBSITE</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 13 */}
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="">IF YOUR ANSWER IS "MENTION IN A COMMENT" OR "SEND AN INBOX MESSAGE", PLEASE ATTACH THE FULL INFORMATION ABOUT YOUR PRODUCTS AND/OR SERVICES (INCLUDING PRICES, CALL TO ACTION, ETC..).</label>
                                <textarea className="text-left" name="" id="" cols="30" rows="2" required></textarea>
                            </div>

                            {/* question 14 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">IF WE RECEIVE SPAM, MALICIOUS POSTINGS, OR COMMENTS, HOW WOULD YOU LIKE US TO RESPOND?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_deleteEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_deleteEnAfter">DELETE</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_responsEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_responsEnAfter">RESPONSE</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_contactUsBefEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_contactUsBefEnAfter">CONTACT US BEFORE RESPONDING</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"  id="_letUsRespondEnAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_letUsRespondEnAfter">LET US RESPOND</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mx-auto text-center mb-5 mt-3" style={{color:"#f8931f"}}>
                                <h5 className="font-weight-bold">
                                THANK YOU FOR FILLING OUT THIS QUESTIONNAIRE.
                                WE WILL BUILD THE <br /> BEST SOCIAL MEDIA MANAGEMENT THAT SUITS YOUR BUSINESS!</h5>
                            </div>
                            
                            <div className='sub-btn pb-5 mb-0'>
                                <input className="btn btn-primary w-auto" type="submit" value="Submit"></input>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
            <footer className='social-footer'>
                <div className="container d-flex text-light">
                    <div>
                        <img className="w-75" src={osgLogo} alt="" />
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
    )
}

export default SocialMediaQuestionnaire
