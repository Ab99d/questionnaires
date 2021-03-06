import React from 'react'
import heroText from '../assets/images/motion png.png'
import heroImg from '../assets/images/motionqustionneen-text-ar.png'
import brandNameBg1 from '../assets/images/brandname-bg-1-ar.png'
import brandNameBg2 from '../assets/images/brandname-bg-2.png'
import rocketImg from '../assets/images/motion2.png'
import osgLogo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const MotionQuestionnaireAr = () => {
    return (
        // main parent
        <div className="main-parent-motion motion-ar">
            {/* navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="container-fluid">
                        <a className="navbar-brand" href><img className="" src={osgLogo} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-2">
                                <a className="nav-link text-center w-100" aria-current="page" href={"https://osgpro.com/"}>Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-center w-100" href={"https://osgpro.com/about/"}>About Us</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-center w-100" href={"https://osgpro.com/services/"}>Our Services</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-center w-100" href={"https://osgpro.com/pricing/"}>Pricing Plans</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-center w-100" href={"https://osgpro.com/faq/"}>FAQs</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-center w-100" href={"https://osgpro.com/contact/"}>Contact</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="bg-motion">
                {/* hero section */}
                <div className="container position-relative">
                        <div className="d-flex justify-content-end col-12 pr-4 mx-right lang-btn-container">
                            <Link className="btn btn-primary position-relative" to="/">English</Link>
                        </div>
                <div className="hero d-flex justify-content-center p-3 flex-xl-row flex-lg-row flex-md-row flex-sm-column">
                    <div className="hero-img">
                        <img className="mt-5 col-12 align-self-center" src={heroText} alt="" />
                    </div>
                    <div className="hero-context">
                        <img className="mt-5 col-12 align-self-center" src={heroImg} alt="" />
                    </div>
                </div>
            </div>
            {/* form */}
            <form className="form mt-5 motion-form-ar">
                <div className="container">
                    <div className="d-flex justify-content-center flex-row-reverse">
                        <div className="context-bg d-flex position-relative">
                            <img src={brandNameBg1} alt=""/>
                            <div className="brand-name-tagline position-absolute">
                                <label htmlFor="brandName" className="text-primary">?????? ????????????/??????????????<br /><span id='en-lang' className="text-uppercase fs-6" style={{color:'#f8931f',}}>?????? ?????????????? ???????????????? (?????????????? ?????? ?????? ????????)</span></label>
                                <input type="text" id="brandName" name="brandName" placeholder="?????? ?????????????? ????????????????" className="w-100 mt-2" required/>
                                <div className="tag-line w-100">
                                    <input type="text" id="Tagline" name="Tagline" placeholder="??????????" className=" w-100 mt-2" required/>
                                </div>
                                <div className="w-100 mt-3">
                                    <label htmlFor="" className="fs-6">???? ???????? ???????????? ???? ????????</label>
                                    <textarea className=" out-textarea mt-2 w-100" name="" id="" cols="30" rows="2" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="position-relative design-icon-container d-flex justify-content-end col-md-5">
                            <img src={rocketImg} alt="" className="design-icon position-absolute w-100 rocket-img"/>
                            <img src={brandNameBg2} alt="" className=""/>
                        </div>
                    </div>
                </div>
                <div className="questions">
                    <div className="container">
                        <div className="col-lg-10 mx-auto">
                            <label htmlFor="nameMeaning">???????? ???????????? ?????? ????????????</label>
                            <textarea className="" name="" id="" cols="30" rows="2" required></textarea>
                        </div>

                        <div className="col-lg-10 mx-auto">
                            <label htmlFor="organizations-history">???????? ??????????????<br /> ???????? ?????????????? ?????????? / ?????????? ?????? ??????????????</label>
                            <textarea className="" name="" id="" cols="30" rows="2" required></textarea>
                        </div>

                        <div className="col-lg-10 mx-auto">
                            <label htmlFor="companyProduct/service">???? ???? ?????????????? ???????????????? ???????? ????????????????</label>
                            <textarea className="" name="" id="" cols="30" rows="2" required></textarea>
                        </div>

                        <div className="col-lg-10 mx-auto">
                            <label htmlFor="people-part-of-company">???? ?????? ???? ?????????????? ????????</label>
                            <div className="d-flex flex-row flex-wrap">
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2 flex-row mx-2 checkboxes my-0">
                                        <input type="checkbox" className="custom-control-input" id="ENTHUSIASTIC-vid" name="ENTHUSIASTIC-vid" required/>
                                        <label className="custom-control-label text-primary mx-2" htmlFor="ENTHUSIASTIC-vid">??????????</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2 flex-row mx-2 checkboxes my-0">
                                        <input type="checkbox" className="custom-control-input" id="EDUCATIONAL/AWARENESS" name="EDUCATIONAL/AWARENESS"/>
                                        <label className="custom-control-label text-primary mx-2" htmlFor="EDUCATIONAL/AWARENESS">?????????? / ??????????</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2 flex-row mx-2 checkboxes my-0">
                                        <input type="checkbox" className="custom-control-input" id="INSPIRATIONAL" name="INSPIRATIONAL"/>
                                        <label className="custom-control-label text-primary mx-2" htmlFor="INSPIRATIONAL">????????</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 mx-auto">
                            <label htmlFor="Location">???? ???? ?????????????? ??????????????????</label>
                            <input type="text" name="" id="" className="line-solid"/>
                        </div>

                        <div className="col-lg-10 mx-auto">
                            <label htmlFor="people-part-of-company">???? ?????? ?????????? ???????? ????????????</label>
                            <div className="d-flex flex-row flex-wrap">
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2 flex-row mx-2 checkboxes my-0">
                                        <input type="checkbox" className="custom-control-input" id="FUNNY" name="FUNNY" required/>
                                        <label className="custom-control-label text-primary mx-2" htmlFor="FUNNY">????????</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2 flex-row mx-2 checkboxes my-0">
                                        <input type="checkbox" className="custom-control-input" id="SERIOUS" name="SERIOUS"/>
                                        <label className="custom-control-label text-primary mx-2" htmlFor="SERIOUS">????????</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2 flex-row mx-2 checkboxes my-0">
                                        <input type="checkbox" className="custom-control-input" id="FORMAL" name="FORMAL"/>
                                        <label className="custom-control-label text-primary mx-2" htmlFor="FORMAL">????????</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2 flex-row mx-2 checkboxes my-0">
                                        <input type="checkbox" className="custom-control-input" id="CASUAL" name="CASUAL"/>
                                        <label className="custom-control-label text-primary mx-2" htmlFor="CASUAL">?????? ????????</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2 flex-row mx-2 checkboxes my-0">
                                        <input type="checkbox" className="custom-control-input" id="ENTHUSIASTIC" name="ENTHUSIASTIC"/>
                                        <label className="custom-control-label text-primary mx-2" htmlFor="ENTHUSIASTIC">??????????</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2 flex-row mx-2 checkboxes my-0">
                                        <input type="checkbox" className="custom-control-input" id="MATTER-OF-FACT" name="MATTER-OF-FACT"/>
                                        <label className="custom-control-label text-primary mx-2" htmlFor="MATTER-OF-FACT">?????? ??????</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-10 mx-auto">
                            <label htmlFor="people-part-of-company">???? ???????? ?????? ?????? ???? ??????????</label>
                            <div className="d-flex flex-row flex-wrap checkboxes">
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2 flex-row mx-2 checkboxes my-0">
                                        <input type="checkbox" className="custom-control-input" id="MALE" name="MALE" required/>
                                        <label className="custom-control-label text-primary mx-2" htmlFor="MALE">??????</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2 flex-row mx-2 checkboxes my-0">
                                        <input type="checkbox" className="custom-control-input" id="FEMALE" name="FEMALE"/>
                                        <label className="custom-control-label text-primary mx-2" htmlFor="FEMALE">????????</label>
                                    </div>
                                </div>
                            </div>
                            <div className="w-75">
                            </div>
                        </div>

                        <div className="col-lg-8 mx-auto">
                            <label htmlFor="purposeOfCompany">???? ???????? ???????????????? ?????? ???????? ?????????????? ?????????? ???????? ??????????????</label>
                            <input type="text" name="" id="" className="line-solid"/>
                        </div>

                        <div className="col-lg-8 mx-auto">
                            <label htmlFor="purposeOfCompany">???? ???? ?????????? ?????????? ?????????? ???? ?????????? ????????????????</label>
                            <input type="text" name="" id="" className="line-solid"/>
                        </div>

                        <div className="col-lg-8 mx-auto">
                            <label htmlFor="isYourProductDifferent">???? ???????? ???? ?????????? ?????????? ???????????? ???? ?????????? ???????????? ???? ???????????? ???????? ???? ?????? ???????????????? ???????? ?????????? ??????????????</label>
                            <textarea className=" w-100" type="text" required/>
                        </div>

                        <div className="col-12 mx-auto text-center mb-5 mt-3">
                            <h5 className="font-weight-bold text-center" style={{color: "#f8931f"}}>???????? ???????? ?????? ??????????????????. ?????? ???????? ???????????? ???????? ?????????? ?????????????? ???????????? ?????????? ??????!</h5>
                        </div>
                        <div className='sub-btn pb-5 w-auto'>
                            <input className="btn btn-primary text-center w-auto" type="submit" value="??????????"></input>
                        </div>
                    </div>
                </div>
            </form>
            </div>
            <div className="motion-footer">
            <footer className='brand-footer'>
                    <div className="container d-flex text-light">
                        <div className="text-left">
                            <img className="w-75 text-left" src={osgLogo} alt="" />
                        </div>
                        <div className="text-left">
                            <p className="text-left">We're on a mission to build a better <br />
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
        </div>
    )
}

export default MotionQuestionnaireAr
