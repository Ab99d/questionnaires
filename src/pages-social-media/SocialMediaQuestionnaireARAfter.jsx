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
                    <div className="container">
                        <div className="d-flex justify-content-center pt-5 position-relative">
                            <span className="lang-btn-strok"></span>
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
                                    <label htmlFor="brandName" className="text-primary mx-0">اسم الشركة :</label>
                                    <input type="text" id="brandName" name="brandName" className="text-center w-100" required/>
                                    <div className="email w-100">
                                        <label htmlFor="email" className="mx-0">اسم جهة الاتصال الأساسية:</label>
                                        <input type="text" id="" name="" className="text-right w-100" required/>
                                    </div>
                                    <div className="email">
                                        <label htmlFor="email" className="mx-0">دور جهة الاتصال الأساسية:</label>
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
                                <label htmlFor="nameMeaning">معلومات عن جهة الاتصال الأساسية (البريد الإلكتروني ، رقم الهاتف ، إلخ.):</label>
                                <textarea className="text-right" name="" id="" cols="30" rows="2" required></textarea>
                            </div>

                            {/* question 2 */}
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="">من هي جهة الاتصال الثانوية التي تُفضّلها في حال تعذّر الوصول الى الجهة الاساسيّة؟ (يرجى ذكر معلومات الاتصال):</label>
                                <textarea className="text-right" name="" id="" cols="30" rows="2" required></textarea>
                            </div>

                            {/* question 3 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">ما هي طريقة الاتصال المفضلة؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">البريد الالكتروني</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">اجتماع / مكالمة افتراضية</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">مكالمة هاتفية</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">شخصياً</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 4 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">PNG يرجى تقديم شعار الشركة بجميع أشكاله وأنماطه الحالية. إن أمكن ، قم بتوفير الصور بتنسيق على خلفية شفافة.</label>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input"/>
                                    <label className="custom-file-label">Choose file</label>
                                </div>
                            </div>

                            {/* question 5 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">يرجى تقديم الخط الأساسي والخطوط الثانوية المستخدمة في المواد الرقمية للشركة.</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 6 */}
                            <div className="col-lg-8 mx-auto">
                                <h4 className="pb-3">معلومات عامة</h4>
                                <label htmlFor="">هل ستزودنا بمواد المحتوى؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">نعم</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">لا</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 7 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">هل أنت موافق على استخدام الصور المخزنة؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">نعم</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">لا</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 8 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">هل لديك أي عروض أو عروض ترويجية يمكننا استخدامها لحملتك؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">نعم</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">لا</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 9 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">إذا كانت إجابتك بنعم ، فيرجى ذكر هذه العروض.</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 10 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">ما هي عبارة الحث على اتخاذ إجراء (CTA) المفضلة لديك في المنشور؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">احجز الآن</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">يتعلم أكثر</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">أرسل رسالة WhatsApp</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">تسوق موقعنا</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">قم بزيارة متجرنا</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">اتصل بنا الآن</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">ارسل رسالة</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">تسوق متجرنا</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">اشتراك</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 11 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">إذا لم تقم بمراجعة المحتوى / الإعلانات في الوقت المناسب ، فهل تريد منا نشرها أو انتظار الموافقة عليها؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">نشر</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">انتظار</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 12 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">يرجى تزويدنا بقائمة الأسئلة الشائعة وإجاباتها (ساعات العمل ، المنتج ، الخدمات ، إلخ)؟</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 13 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">كيف ترد على استفسار السعر؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">طلب الاتّصال</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">الرد في تعليق</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">إرسال رسالة</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">الرجوع إلى الموقع</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 14 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">كيف ترد على طلب معلومات إضافية؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">طلب الاتّصال</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">الرد في تعليق</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">إرسال رسالة</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label text-primary">الرجوع إلى الموقع</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 15 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">إذا كانت إجابتك "الرّد في تعليق" أو "إرسال رسالة" ، يرجى إرفاق كامل المعلومات حول منتجاتك و / أو خدماتك (بما في ذلك الأسعار ، والعبارة التي تحث المستخدم على اتخاذ الإجراء ، إلخ ..).</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 16 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">إذا تلقينا بريدًا عشوائيًا أو منشورات ضارة أو تعليقات ، فكيف تريد منا الرد؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">حذف</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">إجابة</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">اتصل بنا قبل الرد</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">دعونا نحن نرد</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mx-auto text-center mb-5 mt-3" style={{color:"#f8931f"}}>
                                <h5 className="font-weight-bold">
                                شكرا لملء هذا الاستبيان.
                                سنبني أفضل خطّة لإدارة وسائل التواصل الاجتماعيّة التي تناسب عملك! 
                                </h5>
                            </div>
                            
                            <div className='sub-btn pb-5 mb-0'>
                                <input className="btn btn-primary w-auto" type="submit" value="إرسال"></input>
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

export default SocialMediaQuestionnaireAR
