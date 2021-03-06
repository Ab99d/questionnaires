import React from 'react'
import osgLogo from './assets/images/logo.png'
import heroAR from './assets/images/hero-ar-brand.png'
import brandNameBg1 from './assets/images/brandname-bg-1-ar.png'
import brandNameBg2 from './assets/images/brandname-bg-2.png'
import brandNameBgDesignIcon from './assets/images/brandname-design-icon.png'
import fedexLogo from './assets/images/fedex-logo.png'
import pepsiLogo from './assets/images/pepsi-logo.png'
import burgerLogo from './assets/images/burger-king.jpg'
import { Link } from 'react-router-dom'

const BrandIdentityQuestionnaireAR = () => {
    return (
        <div className="main-parent main-parent-AR bg"> {/* this main div is holding the full site */}
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
                        <div className="d-flex flex-column">
                            <img src={heroAR} alt="" className='mt-5 col-4 align-self-center'/>
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
                                    <label htmlFor="brandName">?????? ????????????/?????????????? <br /><span id='en-lang'>?????? ???????????? :</span></label>
                                    <input type="text" id="brandName" name="brandName" className="text-center w-100" required/>
                                    <div className="tag-line">
                                        <label htmlFor="tagline">???????? <br /> <span>(?????? ?????? ????????) :</span></label>
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
                                <label htmlFor="nameMeaning" className='text-right'>???? ???????????? ???????? ???????????? ?????? ?????????????? ??????????????????</label>
                                <textarea className="text-right" name="nameMeaning" id="nameMeaning" cols="30" rows="2" required></textarea>
                            </div>

                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="organizations-history">???????? ?????????????? ???????????? ??????????/???? ???? ???????? ????????????</label>
                                <textarea className="text-right" name="organizations-history" id="organizations-history" cols="30" rows="2" required></textarea>
                            </div>

                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="companyProduct/service">???????? ?????????????? ?????????????? (????????????????) / ???????????? (??????????????) ???????? ????????????</label>
                                <textarea className="text-right" name="companyProduct/service" id="companyProduct/service" cols="30" rows="2" required></textarea>
                            </div>

                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="people-part-of-company">???? ?????? ?????????????? ?????????? ???????????? ?????????? ???? ?????????? / ??????????????</label>
                                <textarea className="text-right" name="people-part-of-company" id="people-part-of-company" cols="30" rows="2" required></textarea>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="Location">?????? ?????????? (????????????/????????????)??</label>
                                <textarea className="text-right w-100" type="text" id="Location" name="Location" required/>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="Summary">???????????? ????????????????. ?????? ???? ???????? ???? ?????????? ?????????? ???? ???????????? ??????????</label>
                                <input className="text-right" type="text" name="Vision" id="" placeholder=":????????????"/>
                                <input className="text-right" type="text" name="mission" id="" placeholder=":??????????????"/>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="previousLogotype">.???? ???????? ???????? / ?????????? ???????????? ???????????? (???????? ???????? ???? ????????)</label>
                                <textarea className="text-right w-100" type="text" id="previousLogotype" name="previousLogotype" required/>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="inputGroupFile01"/>
                                    <label className="custom-file-label " htmlFor="inputGroupFile01">?????? ??????</label>
                                </div>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="purposeOfCompany">?????????????? (?????????? ???????? ????????) ?????? ?????????? ???? ?????????? ????????????
                                ???? ???? ?????????? ???? ?????????????? / ??????????????</label>
                                <textarea className="text-right w-100" type="text" id="purposeOfCompany" name="purposeOfCompany" required/>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="competitors">?????????????????? <br /> ?????????? 3 ?????????????? ?????????????? ???????????? ???????????? ?????? ??????????</label>
                                <ol className="w-100 col-12">
                                    <li><input className="text-right" type="text" name='Competitors' required/></li>
                                    <li><input className="text-right" type="text" name='Competitors'/></li>
                                    <li><input className="text-right" type="text" name='Competitors'/></li>
                                </ol>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="isYourProductDifferent">???? ???????? ?????? ???????? ?????????? / ?????????? / ?????????? ???????????? ????????</label>
                                <textarea className="w-100 text-right" type="text" id="isYourProductDifferent" name="isYourProductDifferent" required/>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="competitors-better">???? ???????? ?????? ???????? ???? ?????? ???????? ???? ?????????????? ??????????</label>
                                <textarea className="text-right w-100" type="text" id="competitors-better" name="competitors-better" required/>
                            </div>

                            <div className="col-lg-11 mx-auto checkboxes-container">
                                <label htmlFor="information-about-company">?????????? ?????? ?????????????????? ???????????????? ???????? 4/5 ????????
                                ?????????? ??????????</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-5 checkboxes-container" required>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Masculine" name="Masculine"/>
                                            <label className="custom-control-label text-primary" htmlFor="Masculine">???????? ????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Feminine" name="Feminine"/>
                                            <label className="custom-control-label text-primary" htmlFor="Feminine">???????? ????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Simple" name="Simple"/>
                                            <label className="custom-control-label text-primary" htmlFor="Simple">????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Complex" name="Complex"/>
                                            <label className="custom-control-label text-primary" htmlFor="Complex">????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Monochrome" name="Monochrome"/>
                                            <label className="custom-control-label text-primary" htmlFor="Monochrome">?????????? ??????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Colorful" name="Colorful"/>
                                            <label className="custom-control-label text-primary" htmlFor="Colorful">???????? ??????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Modern" name="Modern"/>
                                            <label className="custom-control-label text-primary" htmlFor="Modern">????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Classic" name="Classic"/>
                                            <label className="custom-control-label text-primary" htmlFor="Classic">??????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Casual" name="Casual"/>
                                            <label className="custom-control-label text-primary" htmlFor="Casual">?????? ????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Professional" name="Professional"/>
                                            <label className="custom-control-label text-primary" htmlFor="Professional">??????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Fun" name="Fun"/>
                                            <label className="custom-control-label text-primary" htmlFor="Fun">??????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Serious" name="Serious"/>
                                            <label className="custom-control-label text-primary" htmlFor="Serious">????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Necessary" name="Necessary"/>
                                            <label className="custom-control-label text-primary" htmlFor="Necessary">??????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Luxury" name="Luxury"/>
                                            <label className="custom-control-label text-primary" htmlFor="Luxury">????????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Sport" name="Sport"/>
                                            <label className="custom-control-label text-primary" htmlFor="Sport">??????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Elegant" name="Elegant"/>
                                            <label className="custom-control-label text-primary" htmlFor="Elegant">????????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Safe" name="Safe"/>
                                            <label className="custom-control-label text-primary" htmlFor="Safe">??????</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="Extremely" name="Extremely"/>
                                            <label className="custom-control-label text-primary" htmlFor="Extremely">?????????? ??????</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="logotype-client-like">???? ???????? ???? ???????? / ?????????? ???????????? ?????? ???????? ????
                                ?????????? / ???????????? ???????? ???????????? <br /> (???????? ?????????? ?????????????? ???? ??????????)
                                </label>
                                <textarea className="text-right w-100" type="text" id="logotype-client-like" name="logotype-client-like" required/>
                                <div className="input-group mb-3 mt-2">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile01"/>
                                        <label className="custom-file-label " htmlFor="inputGroupFile01">?????? ??????</label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="clientRequirements">??????????????????: (?????? ?????? ???????? ???? ????????. ?????????? ??????
                                ?????????????? ?????????????????? ?? ???????????????? ???????? ?????? ???????????? ?? ?????????????? / ?????????? ?????????????? ?? ?????????????? 
                                "????????" ?? "???? ????????") ???????? ?????????????? ????????</label>
                                <textarea className="text-right w-100" type="text" id="clientRequirements" name="clientRequirements" required/>
                            </div>
                        </div>
                    </div>
                    <div className="logo-type">
                        <div className="container">
                            <div className="col-12 mx-auto text-center mb-5">
                                <p className="h5 mt-5">?????????????? (??????????????)</p>
                                <p>???? ???????? ???? ???????? / ?????????? ???????????? ?????????? ???? ????????????
                                ???????? ???? ?????????? / ???????????? ???????? ????????????</p>
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
                                <h5 className="font-weight-bold">???????? ???????? ?????? ??????????????????. ?????? ???????? ??????????
                                ???????? ???????? ?????????????? ???????????????? ???????? ???????? ??????????</h5>
                            </div>
                            
                            <div className='sub-btn pb-5'>
                                <input className="btn btn-primary" type="submit" value="??????????"></input>
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

export default BrandIdentityQuestionnaireAR
