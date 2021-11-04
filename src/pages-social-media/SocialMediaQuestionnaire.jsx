import React from 'react'
import osgLogo from '../assets/images/logo.png'
import heroIcon from '../assets/images/hero-social-icon.png'
import heroText from '../assets/images/hero-social-text.png'
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
                    <div className="container">
                        <div className="d-flex justify-content-center pt-5 position-relative">
                            <span className="lang-btn-strok"></span>
                            <Link className="btn btn-primary position-relative" to="/ar">عربي</Link>
                        </div>
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
                                        <label htmlFor="">EMAIL:</label>
                                        <input type="email" id="" name="" className="text-left w-100" required/>
                                    </div>
                                    <div className="email">
                                        <label htmlFor="">COMPANY WEBSITE ADDRESS (URL):</label>
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
                                <label htmlFor="nameMeaning">BUSINESS CATEGORY</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="CONSULTANT" name="CONSULTANT" />
                                            <label className="custom-control-label text-primary" htmlFor="CONSULTANT">CONSULTANT</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="HEALTHCARE" name="HEALTHCARE" />
                                            <label className="custom-control-label text-primary" htmlFor="HEALTHCARE">HEALTHCARE</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="RETAIL" name="RETAIL" />
                                            <label className="custom-control-label text-primary" htmlFor="RETAIL">RETAIL</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="DENTISTRY" name="DENTISTRY" />
                                            <label className="custom-control-label text-primary" htmlFor="DENTISTRY">DENTISTRY</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="RESTAURANT" name="RESTAURANT" />
                                            <label className="custom-control-label text-primary" htmlFor="RESTAURANT">RESTAURANT</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="WHOLESALE" name="WHOLESALE" />
                                            <label className="custom-control-label text-primary" htmlFor="WHOLESALE">WHOLESALE</label>
                                        </div>
                                    </div>
                                </div>
                                <input className="w-100 mt-3" type="text" placeholder="OTHERS:" />
                            </div>

                            {/* question 2 */}
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="">WHO MAKES THE MARKETING DECISIONS? (PLEASE PROVIDE THE NAME)</label>
                                <textarea className="text-left" name="" id="" cols="30" rows="2" required></textarea>
                            </div>

                            {/* question 3 */}
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="">DECISION MAKER CONTACT INFORMATION (PHONE NUMBER, EMAIL ETC.):</label>
                                <textarea className="text-left" name="" id="" cols="30" rows="2" required></textarea>
                            </div>

                            {/* question 4 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">DECISION MAKER ROLE</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="CEO/OWNER" name="CEO/OWNER" />
                                            <label className="custom-control-label text-primary" htmlFor="CEO/OWNER">CEO/OWNER</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="OPERATION MANAGER" name="OPERATION MANAGER" />
                                            <label className="custom-control-label text-primary" htmlFor="OPERATION MANAGER">OPERATION MANAGER</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="MARKETING SPECIALIST" name="MARKETING SPECIALIST" />
                                            <label className="custom-control-label text-primary" htmlFor="MARKETING SPECIALIST">MARKETING SPECIALIST</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 5 */}
                            <div className="col-lg-8 mx-auto">
                                <h4 className="pb-3">BUSINESS INFORMATION</h4>
                                <label htmlFor="">PLEASE TELL US ABOUT YOUR BUSINESS (WHO ARE YOU? WHAT DO YOU DO?):</label>
                                <textarea className="text-left w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 6 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">WHAT DO YOU OFFER (PRODUCT/SERVICE)? TELL US A LITTLE BIT ABOUT <br /> YOUR TOP-PERFORMING OFFERS (IF AVAILABLE).</label>
                                <textarea className="text-left w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 7 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">WHO ARE YOUR MAIN COMPETITORS? INCLUDE THEIR URLS IF POSSIBLE.</label>
                                <textarea className="text-left w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 8 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">WHAT DO YOU OFFER THAT YOUR COMPETITORS DO NOT OFFER?</label>
                                <textarea className="text-left w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 9 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">WHAT DOES YOUR COMPETITORS OFFER THAT YOU DO NOT OFFER?</label>
                                <textarea className="text-left w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 10 */}
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="">WHAT IS THE SOURCE OF MOST OF YOUR BUSINESS?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="REFERRAL" name="REFERRAL" />
                                            <label className="custom-control-label text-primary" htmlFor="REFERRAL">REFERRAL</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="PASSING BY" name="PASSING BY" />
                                            <label className="custom-control-label text-primary" htmlFor="PASSING BY">PASSING BY</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="SOCIAL MEDIA" name="SOCIAL MEDIA" />
                                            <label className="custom-control-label text-primary" htmlFor="SOCIAL MEDIA">SOCIAL MEDIA</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="RETURN CUSTOMERS" name="RETURN CUSTOMERS" />
                                            <label className="custom-control-label text-primary" htmlFor="RETURN CUSTOMERS">RETURN CUSTOMERS</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="GOOGLE ADS" name="GOOGLE ADS" />
                                            <label className="custom-control-label text-primary" htmlFor="GOOGLE ADS">GOOGLE ADS</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="SEARCH ENGINE" name="SEARCH ENGINE" />
                                            <label className="custom-control-label text-primary" htmlFor="SEARCH ENGINE">SEARCH ENGINE</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 11 */}
                            <div className="col-lg-8 mx-auto">
                                <h4 className="pb-3">AUDIENCE INFORMATION</h4>
                                <label htmlFor="">WHAT IS YOUR TARGET AUDIENCE GENDER?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="MALE" name="MALE" />
                                            <label className="custom-control-label text-primary" htmlFor="MALE">MALE</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="FEMALE" name="FEMALE" />
                                            <label className="custom-control-label text-primary" htmlFor="FEMALE">FEMALE</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="BOTH" name="BOTH" />
                                            <label className="custom-control-label text-primary" htmlFor="BOTH">BOTH</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 12 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">WHAT IS THE AGE RANGE OF YOUR TARGET AUDIENCE?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">18-35</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">35-50</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">50-65</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">OVER 65</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 13 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">WHAT IS YOUR GEO TARGET MARKETING?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">WITHIN 10 MILES RADIUS</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">WITHIN 25 MILES RADIUS</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id=" " name="" />
                                            <label className="custom-control-label text-primary" htmlFor=" ">CITY WIDE</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">STATE WIDE</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 14 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">WHICH PLATFORM IS MOST INTERACTIVE WITH YOUR CUSTOMERS?</label>
                                <textarea className="text-left w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 15 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">WHAT IS THE AMOUNT OF FOOT TRAﬃC YOU RECEIVE FROM <br /> REFERRALS? (IN CASE IT’S CALCULATED).</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">LESS THAN 10%</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">BETWEEN 10-30%</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">OVER 30%</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 16 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">HOW MUCH FOOT TRAﬃC DOES YOUR STORE RECEIVE FROM <br /> RETURNING CUSTOMERS? (IN CASE IT’S CALCULATED).</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">LESS THAN 10%</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">BETWEEN 10-30%</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">OVER 30%</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 17 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">WHAT IS THE AMOUNT OF TRAﬃC YOU RECEIVE FROM <br /> SOCIAL MEDIA? (IN CASE IT’S CALCULATED).</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">LESS THAN 10%</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">BETWEEN 10-30%</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">OVER 30%</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 18 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">FROM GOOGLE, HOW MUCH TRAﬃC DO YOU RECEIVE? (IN CASE IT’S CALCULATED).</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">LESS THAN 10%</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">BETWEEN 10-30%</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">OVER 30%</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 19 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">WHEN LOOKING FOR PRODUCTS/SERVICES ON GOOGLE, WHICH WORDS/PHRASES DO YOU BELIEVE PEOPLE WILL USE?</label>
                                <textarea className="text-left w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 20 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">WHO'S YOUR TARGET AUDIENCE? WHAT ELSE CAN YOU TELL US ABOUT THEM?</label>
                                <textarea className="text-left w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 21 */}
                            <div className="col-lg-8 mx-auto">
                                <h4 className="pb-3">SOCIAL MEDIA INFORMATION</h4>
                                <label htmlFor="">WHAT SOCIAL MEDIA PLATFORMS ARE YOU CURRENTLY USING?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="FACEBOOK" name="FACEBOOK" />
                                            <label className="custom-control-label text-primary" htmlFor="FACEBOOK">FACEBOOK</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="INSTAGRAM" name="INSTAGRAM" />
                                            <label className="custom-control-label text-primary" htmlFor="INSTAGRAM">INSTAGRAM</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="TWITTER" name="TWITTER" />
                                            <label className="custom-control-label text-primary" htmlFor="TWITTER">TWITTER</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 22 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">ARE THERE ANY OTHER SOCIAL MEDIA PLATFORMS YOU WOULD LIKE TO INCORPORATE INTO YOUR MARKETING CAMPAIGN? (IF YES, PLEASE SPECIFY WHICH PLATFORM).</label>
                                <textarea className="text-left w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 23 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">CURRENTLY, WHO MANAGES YOUR SOCIAL MEDIA?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="INTERNAL" name="INTERNAL" />
                                            <label className="custom-control-label text-primary" htmlFor="INTERNAL">INTERNAL</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="EXTERNAL" name="EXTERNAL" />
                                            <label className="custom-control-label text-primary" htmlFor="EXTERNAL">EXTERNAL</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 24 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">ARE YOU RUNNING SOCIAL MEDIA ADS?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">YES</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">NO</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 24 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">DO YOU DO SEO, PPC OR BOTH?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">NO</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">SEARCH ENGINE OPTIMIZATION (SEO)</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">PAY PER CLICK (PPC)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 25 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">WHO MANAGES YOUR GOOGLE ACCOUNT? (IF YOU USE GOOGLE ADS).</label>
                                <textarea className="text-left w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 26 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">DO YOU CONDUCT EMAIL CAMPAIGNS?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">YES</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">NO</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 27 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">ARE YOU USING A LANDING PAGE FOR DIGITAL MARKETING?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">YES</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">NO</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 28 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">ARE YOU USING A LANDING PAGE FOR DIGITAL MARKETING?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">BRAND AWARENESS</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">INTRODUCE NEW PRODUCT OR SERVICE</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">INCREASE ONLINE TRAFFIC</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">CALL TO ACTION</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">TARGET NEW CUSTOMERS</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">INCREASE FOOT TRAFFIC</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 29 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">WHAT ARE YOUR EXPECTATIONS FROM DIGITAL MARKETING?</label>
                                <div className="container d-flex flex-row flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">GENERATE MORE LEADS</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">INCREASE YOUR SALES</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">IMPROVE YOUR CONVERSION RATE</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name="" />
                                            <label className="custom-control-label text-primary" htmlFor="">INCREASE TRAFFIC</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 30 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">ARE THERE ANY ASPECTS OF YOUR CURRENT MARKETING CAMPAIGN THAT YOU DISLIKE?</label>
                                <textarea className="text-left w-100" type="text" id="" name="" required/>
                            </div>
                            
                            {/* question 31 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">HOW MUCH DO YOU SPEND ON DIGITAL MARKETING MONTHLY ($)?</label>
                                <textarea className="text-left w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 32 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">HOW MUCH DO YOU SPEND ON GOOGLE ADS MONTHLY ($)?</label>
                                <textarea className="text-left w-100" type="text" id="" name="" required/>
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
