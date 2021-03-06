import React from 'react'
import osgLogo from '../assets/images/logo.png'
import heroIcon from '../assets/images/hero-social-icon.png'
import heroText from '../assets/images/hero-social-text-ar.png'
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
                                        <label htmlFor="email" className="mx-0">???????????? ???????????????????? :</label>
                                        <input type="text" id="" name="" className="text-right w-100" required/>
                                    </div>
                                    <div className="email">
                                        <label htmlFor="email" className="mx-0">?????????? ???????? ???????????? (URL) :</label>
                                        <input type="text" id="" name="" className="text-right w-100"/>
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
                                <label htmlFor="nameMeaning">:?????? ??????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_CONSULTANTPreAr"/>
                                            <label className="custom-control-label text-primary" htmlFor="_CONSULTANTPreAr">????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_HEALTHCAREPreAr"/>
                                            <label className="custom-control-label text-primary" htmlFor="_HEALTHCAREPreAr">?????????? ????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_RETAILPreAr"/>
                                            <label className="custom-control-label text-primary" htmlFor="_RETAILPreAr">?????????? ????????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_DENTISTRYPreAr"/>
                                            <label className="custom-control-label text-primary" htmlFor="_DENTISTRYPreAr">???? ??????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_RESTAURANTPreAr"/>
                                            <label className="custom-control-label text-primary" htmlFor="_RESTAURANTPreAr">????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_WHOLESALEPreAr"/>
                                            <label className="custom-control-label text-primary" htmlFor="_WHOLESALEPreAr">?????????? ??????????????</label>
                                        </div>
                                    </div>
                                </div>
                                <input className="w-100 mt-3 text-right" type="text" placeholder=":?????? ???????? ???????? ????????????????" />
                            </div>

                            {/* question 2 */}
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="">:???? ???????? ???????????? ???????????????? (???????? ?????????? ??????????)</label>
                                <textarea className="text-right" name="" id="" cols="30" rows="2" required></textarea>
                            </div>

                            {/* question 3 */}
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="">:?????????????? ?????????????? ?????????? ???????????? (?????? ???????????? ?????????????? ???????????????????? ?????? ?????? ??????)</label>
                                <textarea className="text-right" name="" id="" cols="30" rows="2" required></textarea>
                            </div>

                            {/* question 4 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">:?????? ???????? ????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="CEO/OWNEREnpre" name="CEO/OWNER"/>
                                            <label className="custom-control-label text-primary" htmlFor="CEO/OWNEREnpre">???????????? ???????????????? / ????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="OPERATION MANAGEREnpre" name="OPERATION MANAGER"/>
                                            <label className="custom-control-label text-primary" htmlFor="OPERATION MANAGEREnpre">???????? ????????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="MARKETING SPECIALISTEnpre" name="MARKETING SPECIALIST"/>
                                            <label className="custom-control-label text-primary" htmlFor="MARKETING SPECIALISTEnpre">???????????? ??????????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 5 */}
                            <div className="col-lg-8 mx-auto">
                                <h4 className="pb-3">?????????????? ??????????</h4>
                                <label htmlFor="">:???? ???????? ???????????? ???? ???????? (???? ???? ?????????????? ???????? ???????? ??????????????)</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 6 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">:???????? ???????????? (???????????? / ????????????)?? ???????????? ???????????? ???? ???????? ???????????? ?????????? (???? ??????)</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 7 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">:???? ???? ?????????????????? ?????????????????? ?????? ???? ???????????? ???????????? URL ???????????? ?????? ???? ????????</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 8 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???? ???????? ?????? ???????? ???? ?????? ???????? ???? ?????????????? ??????????</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 9 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">.???? ???????? ?????? ???????? ?????????? / ?????????? / ?????????? ???????????? ????????</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 10 */}
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="">???? ???? ???????? ???????? ??????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="REFERRALpreEn" name="REFERRAL"/>
                                            <label className="custom-control-label text-primary" htmlFor="REFERRALpreEn">?????????? ???? ??????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="PASSING BYpreEn" name="PASSING BY"/>
                                            <label className="custom-control-label text-primary" htmlFor="PASSING BYpreEn">?????????????? ???????????? ?????????? ????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="SOCIAL MEDIApreEn" name="SOCIAL MEDIA"/>
                                            <label className="custom-control-label text-primary" htmlFor="SOCIAL MEDIApreEn">?????????? ?????????????? ??????????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="RETURN CUSTOMERSpreEn" name="RETURN CUSTOMERS"/>
                                            <label className="custom-control-label text-primary" htmlFor="RETURN CUSTOMERSpreEn">???????? ??????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="GOOGLE ADSpreEn" name="GOOGLE ADS"/>
                                            <label className="custom-control-label text-primary" htmlFor="GOOGLE ADSpreEn">?????????????? ????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="SEARCH ENGINEpreEn" name="SEARCH ENGINE"/>
                                            <label className="custom-control-label text-primary" htmlFor="SEARCH ENGINEpreEn">???????? ??????????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 11 */}
                            <div className="col-lg-8 mx-auto">
                                <h4 className="pb-3">?????????????? ??????????????</h4>
                                <label htmlFor="">???? ???? ?????? ???????????? ??????????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="MALEpreEn" name="MALE"/>
                                            <label className="custom-control-label text-primary" htmlFor="MALEpreEn">??????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="FEMALEpreEn" name="FEMALE"/>
                                            <label className="custom-control-label text-primary" htmlFor="FEMALEpreEn">????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="BOTHpreEn " name="BOTH "/>
                                            <label className="custom-control-label text-primary" htmlFor="BOTHpreEn ">????????????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 12 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???? ???? ?????????? ?????????????? ?????????????? ??????????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_numPreEn1"/>
                                            <label className="custom-control-label text-primary" htmlFor="_numPreEn1">18-35</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_numPreEn2"/>
                                            <label className="custom-control-label text-primary" htmlFor="_numPreEn2">35-50</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_numPreEn3"/>
                                            <label className="custom-control-label text-primary" htmlFor="_numPreEn3">50-65</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_numPreEn4"/>
                                            <label className="custom-control-label text-primary" htmlFor="_numPreEn4">?????? 65</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 13 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???? ???? ?????? ?????????????? ?????????? ?????????????? ???????????? ??????????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_10millseEnPre"/>
                                            <label className="custom-control-label text-primary" htmlFor="_10millseEnPre">???? ???????? 10 ??????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_25millseEnPre"/>
                                            <label className="custom-control-label text-primary" htmlFor="_25millseEnPre">???? ???????? 25 ????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_allcitymillseEnPre"/>
                                            <label className="custom-control-label text-primary" htmlFor="_allcitymillseEnPre">?????? ?????????? ??????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_STATEWIDEPreEn"/>
                                            <label className="custom-control-label text-primary" htmlFor="_STATEWIDEPreEn">???????????????? / ?????????????? ?????? ???????? ????????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 14 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???? ???? ???????????? ???????????? ?????????????? ???? ??????????????</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 15 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">.???? ???? ???????? ???????????? ???????? ???????????????? ???? ?????????? ?????????????? ?? (???? ???????? ????????????)</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_10%1EnPre"/>
                                            <label className="custom-control-label text-primary" htmlFor="_10%1EnPre">?????? ???? %10</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_10%301EnPre"/>
                                            <label className="custom-control-label text-primary" htmlFor="_10%301EnPre">?????? %10-%30</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_30%1EnPre"/>
                                            <label className="custom-control-label text-primary" htmlFor="_30%1EnPre">???????? ???? %30</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 16 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">.???? ???? ???????? ???????????? ???????? ???????????????? ?????????? ???? ?????????????? ?????????????????? (???? ???????? ????????????)</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_10%2EnPre" />
                                            <label className="custom-control-label text-primary" htmlFor="_10%2EnPre">?????? ???? %10</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_10%30%2EnPre" />
                                            <label className="custom-control-label text-primary" htmlFor="_10%30%2EnPre">?????? %10-%30</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_30%2EnPre" />
                                            <label className="custom-control-label text-primary" htmlFor="_30%2EnPre">???????? ???? %30</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 17 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">.???? ???? ???????? ???????????? ???????? ???????????????? ???? ?????????? ?????????????? ???????????????????? (???? ???????? ????????????)</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_10%3EnPre" />
                                            <label className="custom-control-label text-primary" htmlFor="_10%3EnPre">?????? ???? %10</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_10%30%3EnPre" />
                                            <label className="custom-control-label text-primary" htmlFor="_10%30%3EnPre">?????? %10-%30</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_30%3EnPre" />
                                            <label className="custom-control-label text-primary" htmlFor="_30%3EnPre">???????? ???? %30</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 18 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">.???? ???? ???????? ???????????? ???????? ???????????????? ???? ?????????? (???? ???????? ????????????)</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_10%4EnPre" />
                                            <label className="custom-control-label text-primary" htmlFor="_10%4EnPre">?????? ???? %10</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_10%30%4EnPre" />
                                            <label className="custom-control-label text-primary" htmlFor="_10%30%4EnPre">?????? %10-%30</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_30%4EnPre" />
                                            <label className="custom-control-label text-primary" htmlFor="_30%4EnPre">???????? ???? %30</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 19 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">?????? ?????????? ???? ?????????????? / ???????????? ?????? ???????? ?? ???? ?????????????? / ???????????????? ???????? ?????????? ???? ?????????????? ????????????????????????</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 20 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???? ???? ???????????? ?????????????????? ???????? ?????????? ???? ???????????? ???????? ??????????</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 21 */}
                            <div className="col-lg-8 mx-auto">
                                <h4 className="pb-3">?????????????? ?????????? ?????????????? ??????????????????</h4>
                                <label htmlFor="">???? ???? ?????????? ?????????????? ?????????????????? ???????? ???????????????? ????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="FACEBOOK" name="FACEBOOK"/>
                                            <label className="custom-control-label text-primary" htmlFor="FACEBOOK">????????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="INSTAGRAM" name="INSTAGRAM"/>
                                            <label className="custom-control-label text-primary" htmlFor="INSTAGRAM">????????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="TWITTER" name="TWITTER"/>
                                            <label className="custom-control-label text-primary" htmlFor="TWITTER">?????????? </label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="SNAP" name="SNAP"/>
                                            <label className="custom-control-label text-primary" htmlFor="SNAP">???????? ??????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="LINKEDIN" name="LINKEDIN"/>
                                            <label className="custom-control-label text-primary" htmlFor="LINKEDIN">??????????????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 22 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">.???? ???????? ???? ?????????? ?????????? ???????????????? ???????? ???????? ???? ?????????????? ???? ?????????????? ?????????? ???? ?? (?????? ???????? ?????????????? ???????? ?? ???????? ?????????? ??????????????)</label>
                                <textarea className="text-right w-100 text-right" type="text" id="" name="" required/>
                            </div>

                            {/* question 23 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???????????? ?? ???? ???????? ?????????? ?????????????? ???????????????????? ???????????? ????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="INTERNAL" name="INTERNAL"/>
                                            <label className="custom-control-label text-primary" htmlFor="INTERNAL">??????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="EXTERNAL" name="EXTERNAL"/>
                                            <label className="custom-control-label text-primary" htmlFor="EXTERNAL">??????????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 24 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???? ???????? ???????????? ?????????????? ?????????? ?????????????? ??????????????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_yes-En-Pre" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="_yes-En-Pre">?????? </label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_no-En-Pre" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="_no-En-Pre">????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 24 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="" className="text-right">???? ?????????????? SEO ???? PPC ???? ???????? ????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_no-En-Pre-1" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="_no-En-Pre-1">????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="seo-En-pre" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="seo-En-pre">?????????? ???????????? ?????????? (SEO)</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="ppc-En-pre" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="ppc-En-pre">?????????? ?????????????? (PPC)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 25 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">.???? ???????? ???????? ???????? ?????????? ???????????? (?????? ?????? ???????????? ?????????????? ????????)</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 26 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???? ???????? ?????????? ?????? ???????????? ??????????????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_yes-En-Pre-2" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="_yes-En-Pre-2">??????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_no-En-Pre-2" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="_no-En-Pre-2">????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 27 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???? ???????????? ???????? ???????? ?????????????? ??????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_yes-En-Pre-3" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="_yes-En-Pre-3">??????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="_no-En-Pre-3" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="_no-En-Pre-3">????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 28 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???? ?????????? ?????????????? ???? ???? ??????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="9-En-pre"/>
                                            <label className="custom-control-label text-primary" htmlFor="9-En-pre">?????????? ???????????????? ????????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="10-En-pre"/>
                                            <label className="custom-control-label text-primary" htmlFor="10-En-pre">?????????? ???????? ???? ???????? ??????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="11-En-pre"/>
                                            <label className="custom-control-label text-primary" htmlFor="11-En-pre">?????????? ???????? ???????????? ?????? ????????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="12-En-pre"/>
                                            <label className="custom-control-label text-primary" htmlFor="12-En-pre">???????? ??????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="13-En-pre"/>
                                            <label className="custom-control-label text-primary" htmlFor="13-En-pre">?????????????? ?????????? ??????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="14-En-pre"/>
                                            <label className="custom-control-label text-primary" htmlFor="14-En-pre">?????????? ???????? ???????????? ?????? ??????????????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 29 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???? ???? ?????????????? ???? ?????????????? ??????????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="15-En-pre" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="15-En-pre">???????????? ???? ?????????????? ??????????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="16-En-pre" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="16-En-pre">?????????? ??????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="17-En-pre" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="17-En-pre">?????????? ???????? ?????????????? ?????????? ????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="18-En-pre" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="18-En-pre">?????????? ???????? ????????????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 30 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???? ???????? ???? ?????????? ???? ?????????? ???? ?????????? ?????????????????? ????????????????</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>
                            
                            {/* question 31 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???? ???????? ?????? ?????????????? ???????????? ???????????? ($)??</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 32 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">???? ???????? ?????? ?????????????? ???????? ???????????? ($)??</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            <div className="col-12 mx-auto text-center mb-5 mt-3" style={{color:"#f8931f"}}>
                                <h5 className="font-weight-bold">
                                ???????? ???????? ?????? ??????????????????.
                                ?????????? ???????? ???????? ???????????? ?????????? ?????????????? ?????????????????????? ???????? ?????????? ????????! 
                                </h5>
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
