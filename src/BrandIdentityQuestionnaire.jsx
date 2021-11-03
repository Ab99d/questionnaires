import React from 'react'
import osgLogo from './assets/images/logo.png'
import hero from './assets/images/hero.png'
import brandNameBg1 from './assets/images/brandname-bg-1.png'
import brandNameBg2 from './assets/images/brandname-bg-2.png'
import brandNameBgDesignIcon from './assets/images/brandname-design-icon.png'
import fedexLogo from './assets/images/fedex-logo.png'
import pepsiLogo from './assets/images/pepsi-logo.png'
import burgerLogo from './assets/images/burger-king.jpg'
import { Link } from 'react-router-dom'

const BrandIdentityQuestionnaire = () => {
    return (
        <div className="main-parent en"> {/* this main div is holding the full site */}
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
            {/* hero section */}
            <div className="bg">
                <div className="hero">
                    <div className="container">
                        <div className="d-flex flex-column">
                            <img src={hero} alt="" className='mt-5 col-4 align-self-center'/>
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
                                    <label htmlFor="brandName">COMPANY/ORGANIZATION DESCRIPTION: <br /><span id='en-lang'>BRAND NAME:</span></label>
                                    <input type="text" id="brandName" name="brandName" className="text-center w-100" required/>
                                    <div className="tag-line">
                                        <label htmlFor="tagline">TAGLINE: <br /> <span>(IF THERE IS ANY):</span></label>
                                        <textarea className="w-100" name="tagline" id="tagline" cols="30" rows="3" required></textarea>
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
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="nameMeaning">What’s the meaning behind the brand name?</label>
                                <textarea className="text-left" name="nameMeaning" id="nameMeaning" cols="30" rows="2" required></textarea>
                            </div>

                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="organizations-history">Please give a timeline of your company/ organization’s history.</label>
                                <textarea className="text-left" name="organizations-history" id="organizations-history" cols="30" rows="2" required></textarea>
                            </div>

                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="companyProduct/service">Please tell us about the product(s)/service(s) that you provide.</label>
                                <textarea className="text-left" name="companyProduct/service" id="companyProduct/service" cols="30" rows="2" required></textarea>
                            </div>

                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="people-part-of-company">How many people are a part of your company/organization?</label>
                                <textarea className="text-left" name="people-part-of-company" id="people-part-of-company" cols="30" rows="2" required></textarea>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="Location">Where are you located?</label>
                                <textarea className="text-left w-100" type="text" id="Location" name="Location" required/>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="Summary">Vision and mission. summarize each one in few words or short phrases</label>
                                <input type="text" name="Vision" id="" placeholder="VISION:"/>
                                <input type="text" name="mission" id="" placeholder="MISSION:"/>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="previousLogotype">Do you have a previous Logotype/branding? (attach image or link)</label>
                                <textarea className="text-left w-100" type="text" id="previousLogotype" name="previousLogotype" required/>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="inputGroupFile01"/>
                                    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                </div>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="purposeOfCompany">OPTIONAL (but quite useful) Beyond money and profit what`s the purpose of the organization/- company?</label>
                                <textarea className="text-left w-100" type="text" id="purposeOfCompany" name="purposeOfCompany" required/>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="customers-contact">How do customers contact you for product(s) or service(s) currently?</label>
                                <textarea className="text-left w-100" type="text" id="customers-contact" name="customers-contact" required/>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="competitors">Competitors <br /> Who are your three main primary competitors? <br /> (Please include their URLs).</label>
                                <ol className="w-100">
                                    <li><input type="text" name='Competitors' required/></li>
                                    <li><input type="text" name='Competitors'/></li>
                                    <li><input type="text" name='Competitors'/></li>
                                </ol>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="isYourProductDifferent">Is there something that makes you/your product/service, <br /> different to them</label>
                                <textarea className="text-left w-100" type="text" id="isYourProductDifferent" name="isYourProductDifferent" required/>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="competitors-better">Is there anything that you feel that makes your competitors better?</label>
                                <textarea className="text-left w-100" type="text" id="competitors-better" name="competitors-better" required/>
                            </div>

                            <div className="col-lg-11 mx-auto checkboxes-container">
                                <label htmlFor="information-about-company">Based on the previous information, choose 4/5 attributes that fits your company: </label>
                                <div className="container d-flex flex-row flex-wrap mt-5 checkboxes-container">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Masculine" name="Masculine" required/>
                                            <label className="custom-control-label text-primary" htmlFor="Masculine">Masculine</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Feminine" name="Feminine"/>
                                            <label className="custom-control-label text-primary" htmlFor="Feminine">Feminine</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Simple" name="Simple"/>
                                            <label className="custom-control-label text-primary" htmlFor="Simple">Simple</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Complex" name="Complex"/>
                                            <label className="custom-control-label text-primary" htmlFor="Complex">Complex</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Safe" name="Safe"/>
                                            <label className="custom-control-label text-primary" htmlFor="Safe">Safe</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Monochrome" name="Monochrome"/>
                                            <label className="custom-control-label text-primary" htmlFor="Monochrome">Monochrome</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Colorful" name="Colorful"/>
                                            <label className="custom-control-label text-primary" htmlFor="Colorful">Colorful</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Modern" name="Modern"/>
                                            <label className="custom-control-label text-primary" htmlFor="Modern">Modern</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Classic" name="Classic"/>
                                            <label className="custom-control-label text-primary" htmlFor="Classic">Classic</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Casual" name="Casual"/>
                                            <label className="custom-control-label text-primary" htmlFor="Casual">Casual</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Professional" name="Professional"/>
                                            <label className="custom-control-label text-primary" htmlFor="Professional">Professional</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Fun" name="Fun"/>
                                            <label className="custom-control-label text-primary" htmlFor="Fun">Fun</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Serious" name="Serious"/>
                                            <label className="custom-control-label text-primary" htmlFor="Serious">Serious</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Necessity" name="Necessity"/>
                                            <label className="custom-control-label text-primary" htmlFor="Necessity">Necessity</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Luxury" name="Luxury"/>
                                            <label className="custom-control-label text-primary" htmlFor="Luxury">Luxury</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Sporty" name="Sporty"/>
                                            <label className="custom-control-label text-primary" htmlFor="Sporty">Sporty</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Elegant" name="Elegant"/>
                                            <label className="custom-control-label text-primary" htmlFor="Elegant">Elegant</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Extreme" name="Extreme"/>
                                            <label className="custom-control-label text-primary" htmlFor="Extreme">Extreme</label>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="logotype-client-like">References <br /> Are there any logotype/brand that has a logotype withthe style/look that you like? (Please include links or images). </label>
                                <textarea className="text-left w-100" type="text" id="logotype-client-like" name="logotype-client-like" required/>
                                <div className="input-group mb-3 mt-2">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile01"/>
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="clientRequirements">Requirements: (If you have any. Things like:
                                mandatory colors, colors to avoid, specific look/theme, In short, your 
                                "wants" and "don't wants") Also explain why.</label>
                                <textarea className="text-left w-100" type="text" id="clientRequirements" name="clientRequirements" required/>
                            </div>
                        </div>
                    </div>
                    <div className="logo-type">
                        <div className="container">
                            <div className="col-12 mx-auto text-center mb-5">
                                <p className="h5 mt-5">Design (OPTIONAL):</p>
                                <p>Is it any a big or renown logotype/brand that has a logotype with the style/look you want?</p>
                            </div>
                            
                            <div className="row d-flex justify-content-center mx-auto col-12 align-items-center">
                                <div className="card-container mr-5 pr-lg-5">
                                    <div className="col-sm">
                                        <div className="card border-none fedex border-0">                                    
                                            <br />
                                            <div>
                                                <img src={fedexLogo} alt="" className="fedexLogo"/>
                                            </div>
                                            <br />
                                            <div className="card-body text-center">
                                                <label htmlFor="text-logotype"></label>
                                                <input type="radio" name="logotype" id="text-logotype" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-container mr-lg-5 mr-md-5 pr-lg-5">
                                    <div className="col-sm">
                                        <div className="card border-0">
                                            <div>
                                                <img src={pepsiLogo} alt="" className="pepsiLogo"/>
                                            </div>
                                            <div className="card-body text-center">
                                                <label htmlFor="text-logotype"></label>
                                                <input type="radio" name="logotype" id="icon-logotype" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="col-sm">
                                        <div className="card border-0">
                                            <div>
                                                <img src={burgerLogo} alt="" className="burgerLogo"/>
                                            </div>
                                            <div className="card-body text-center">
                                                <label htmlFor="text-logotype"></label>
                                                <input type="radio" name="logotype" id="text+icon-logotype" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mx-auto text-center mb-5 mt-3">
                                <h5 className="font-weight-bold text-uppercase">Thank you for filling out this questionnaire. 
                                <br /> We will build the best Brand Identity you are aiming for!</h5>
                            </div>
                            
                            <div className='sub-btn pb-5'>
                                <input className="btn btn-primary" type="submit" value="Submit"></input>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <footer className='brand-footer'>
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

export default BrandIdentityQuestionnaire
