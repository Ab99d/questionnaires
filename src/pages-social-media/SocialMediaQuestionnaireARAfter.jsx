import React from 'react'
import osgLogo from '../assets/images/logo.png'
import heroIcon from '../assets/images/hero-social-icon.png'
import heroText from '../assets/images/hero-social-text-ar-after.png'
import brandNameBg1 from '../assets/images/brandname-bg-1-ar.png'
import brandNameBg2 from '../assets/images/brandname-bg-2.png'
import brandNameBgDesignIcon from '../assets/images/social-design-icon-03.jpg'
import { Link } from 'react-router-dom'

const SocialMediaQuestionnaireAR = () => {
    return (
        <div className="main-parent-social-media social-ar bg"> {/* this main div is holding the full site */}
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
                                <a className="nav-link" aria-current="page" href={"https://osgpro.com/"}>Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href={"https://osgpro.com/about/"}>About Us</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href={"https://osgpro.com/services/"}>Our Services</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href={"https://osgpro.com/pricing/"}>Pricing Plans</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href={"https://osgpro.com/faq/"}>FAQs</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href={"https://osgpro.com/contact/"}>Contact</a>
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
                            <Link className="btn btn-primary position-relative" to="/">English</Link>
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
                        <div className="d-flex justify-content-between flip-img">
                            <div className="context-bg d-flex position-relative">
                                <img src={brandNameBg1} alt=""/>
                                <div className="brand-name-tagline position-absolute">
                                    <label htmlFor="brandName" className="text-primary mx-0">?????? ???????????? :</label>
                                    <input type="text" id="brandName" name="brandName" className="text-center w-100" required/>
                                    <div className="email w-100">
                                        <label htmlFor="email" className="mx-0">?????? ?????? ?????????????? ????????????????:</label>
                                        <input type="text" id="" name="" className="text-right w-100" required/>
                                    </div>
                                    <div className="email">
                                        <label htmlFor="email" className="mx-0">?????? ?????? ?????????????? ????????????????:</label>
                                        <input type="text" id="" name="" className="text-right w-100" required/>
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
                                <label htmlFor="nameMeaning">?????????????? ???? ?????? ?????????????? ???????????????? (???????????? ???????????????????? ?? ?????? ???????????? ?? ??????.):</label>
                                <textarea className="text-right" name="" id="" cols="30" rows="2" required></textarea>
                            </div>

                            {/* question 2 */}
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="">???? ???? ?????? ?????????????? ???????????????? ???????? ???????????????? ???? ?????? ?????????? ???????????? ?????? ?????????? ???????????????????? (???????? ?????? ?????????????? ??????????????):</label>
                                <textarea className="text-right" name="" id="" cols="30" rows="2" required></textarea>
                            </div>

                            {/* question 3 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???? ???? ?????????? ?????????????? ????????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_byEmailArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_byEmailArAfter">???????????? ????????????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_meetingArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_meetingArAfter">???????????? / ???????????? ????????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_phoneCallArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_phoneCallArAfter">???????????? ????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_personallyArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_personallyArAfter">????????????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 4 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">PNG ???????? ?????????? ???????? ???????????? ?????????? ???????????? ?????????????? ??????????????. ???? ???????? ?? ???? ???????????? ?????????? ???????????? ?????? ?????????? ??????????.</label>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input"/>
                                    <label className="custom-file-label">Choose file</label>
                                </div>
                            </div>

                            {/* question 5 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???????? ?????????? ???????? ?????????????? ?????????????? ???????????????? ?????????????????? ???? ???????????? ?????????????? ????????????.</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 6 */}
                            <div className="col-lg-8 mx-auto">
                                <h4 className="pb-3">?????????????? ????????</h4>
                                <label htmlFor="">???? ?????????????? ?????????? ????????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_yes3"/>
                                            <label className="custom-control-label text-primary" htmlFor="_yes3">??????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_no3"/>
                                            <label className="custom-control-label text-primary" htmlFor="_no3">????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 7 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???? ?????? ?????????? ?????? ?????????????? ?????????? ????????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_yes2"/>
                                            <label className="custom-control-label text-primary" htmlFor="_yes2">??????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_no2"/>
                                            <label className="custom-control-label text-primary" htmlFor="_no2">????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 8 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???? ???????? ???? ???????? ???? ???????? ?????????????? ???????????? ?????????????????? ??????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_yes1"/>
                                            <label className="custom-control-label text-primary" htmlFor="_yes1">??????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_no1"/>
                                            <label className="custom-control-label text-primary" htmlFor="_no1">????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 9 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">?????? ???????? ???????????? ???????? ?? ?????????? ?????? ?????? ????????????.</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 10 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???? ???? ?????????? ???????? ?????? ?????????? ?????????? (CTA) ?????????????? ???????? ???? ????????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_ReserArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_ReserArAfter">???????? ????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_learnMoreArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_learnMoreArAfter">?????????? ????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_whatsappArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_whatsappArAfter">???????? ?????????? WhatsApp</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_shopArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_shopArAfter">???????? ????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_visitUsArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_visitUsArAfter">???? ???????????? ????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_callUsArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_callUsArAfter">???????? ?????? ????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_sentmassArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_sentmassArAfter">???????? ??????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_shopUsArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_shopUsArAfter">???????? ????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_subscripeArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_subscripeArAfter">????????????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 11 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">?????? ???? ?????? ?????????????? ?????????????? / ?????????????????? ???? ?????????? ?????????????? ?? ?????? ???????? ?????? ?????????? ???? ???????????? ???????????????? ????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_publishArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_publishArAfter">??????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_waiteArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_waiteArAfter">????????????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 12 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???????? ?????????????? ???????????? ?????????????? ?????????????? ?????????????????? (?????????? ?????????? ?? ???????????? ?? ?????????????? ?? ??????)??</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 13 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">?????? ?????? ?????? ?????????????? ????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_callReqArAfterPrice"/>
                                            <label className="custom-control-label text-primary" htmlFor="_callReqArAfterPrice">?????? ????????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_inCommentArAfterPrice"/>
                                            <label className="custom-control-label text-primary" htmlFor="_inCommentArAfterPrice">???????? ???? ??????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_sentMessArAfterPrice"/>
                                            <label className="custom-control-label text-primary" htmlFor="_sentMessArAfterPrice">?????????? ??????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_getBackArAfterPrice"/>
                                            <label className="custom-control-label text-primary" htmlFor="_getBackArAfterPrice">???????????? ?????? ????????????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 14 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">?????? ?????? ?????? ?????? ?????????????? ??????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_callReqArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_callReqArAfter">?????? ????????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_inCommentArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_inCommentArAfter">???????? ???? ??????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_sentMessArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_sentMessArAfter">?????????? ??????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_getBackArAfter"/>
                                            <label className="custom-control-label text-primary" htmlFor="_getBackArAfter">???????????? ?????? ????????????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 15 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">?????? ???????? ???????????? "?????????? ???? ??????????" ???? "?????????? ??????????" ?? ???????? ?????????? ???????? ?????????????????? ?????? ?????????????? ?? / ???? ???????????? (?????? ???? ?????? ?????????????? ?? ???????????????? ???????? ?????? ???????????????? ?????? ?????????? ?????????????? ?? ?????? ..).</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 16 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">?????? ???????????? ???????????? ???????????????? ???? ?????????????? ???????? ???? ?????????????? ?? ???????? ???????? ?????? ??????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_delArAfter" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="_delArAfter">??????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_respArAfter" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="_respArAfter">??????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_callUsPreArAfter" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="_callUsPreArAfter">???????? ?????? ?????? ????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_letUsArAfter" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="_letUsArAfter">?????????? ?????? ??????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mx-auto text-center mb-5 mt-3" style={{color:"#f8931f"}}>
                                <h5 className="font-weight-bold">
                                ???????? ???????? ?????? ??????????????????.
                                ?????????? ???????? ???????? ???????????? ?????????? ?????????????? ?????????????????????? ???????? ?????????? ????????! 
                                </h5>
                            </div>
                            
                            <div className='sub-btn pb-5 mb-0'>
                                <input className="btn btn-primary w-auto" type="submit" value="??????????"></input>
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
                        <p>Copyright ?? 2021. All Rights Reserved</p>
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

export default SocialMediaQuestionnaireAR
