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
                                        <label htmlFor="email" className="mx-0">البريد الالكتروني :</label>
                                        <input type="text" id="" name="" className="text-right w-100" required/>
                                    </div>
                                    <div className="email">
                                        <label htmlFor="email" className="mx-0">عنوان موقع الشركة (URL) :</label>
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
                                <label htmlFor="nameMeaning">:نوع العمل</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="CONSULTANT" name="CONSULTANT"/>
                                            <label className="custom-control-label text-primary" htmlFor="CONSULTANT">مستشار</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="HEALTHCARE" name="HEALTHCARE"/>
                                            <label className="custom-control-label text-primary" htmlFor="HEALTHCARE">رعاىة صحية</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="RETAIL" name="RETAIL"/>
                                            <label className="custom-control-label text-primary" htmlFor="RETAIL">تجارة بالتجزئه</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="DENTISTRY" name="DENTISTRY"/>
                                            <label className="custom-control-label text-primary" htmlFor="DENTISTRY">طب الأسنان</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="RESTAURANT" name="RESTAURANT"/>
                                            <label className="custom-control-label text-primary" htmlFor="RESTAURANT">مطعم</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="WHOLESALE" name="WHOLESALE"/>
                                            <label className="custom-control-label text-primary" htmlFor="WHOLESALE">تجارة بالجملة</label>
                                        </div>
                                    </div>
                                </div>
                                <input className="w-100 mt-3 text-right" type="text" placeholder=":غير ذلك، يرجى التّحديد" />
                            </div>

                            {/* question 2 */}
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="">:من يتخذ قرارات التسويق؟ (يرجى تقديم الاسم)</label>
                                <textarea className="text-right" name="" id="" cols="30" rows="2" required></textarea>
                            </div>

                            {/* question 3 */}
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="">:معلومات الاتصال بصانع القرار (رقم الهاتف والبريد الإلكتروني وما إلى ذلك)</label>
                                <textarea className="text-right" name="" id="" cols="30" rows="2" required></textarea>
                            </div>

                            {/* question 4 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">:دور صانع القرار</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="CEO/OWNER" name="CEO/OWNER"/>
                                            <label className="custom-control-label text-primary" htmlFor="CEO/OWNER">الرئيس التنفيذي / المالك</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="OPERATION MANAGER" name="OPERATION MANAGER"/>
                                            <label className="custom-control-label text-primary" htmlFor="OPERATION MANAGER">مدير العمليات</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="MARKETING SPECIALIST" name="MARKETING SPECIALIST"/>
                                            <label className="custom-control-label text-primary" htmlFor="MARKETING SPECIALIST">اخصائي تسويق</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 5 */}
                            <div className="col-lg-8 mx-auto">
                                <h4 className="pb-3">معلومات العمل</h4>
                                <label htmlFor="">:من فضلك أخبرنا عن عملك (ما هي الشركة؟ ماذا تعمل وتقدّم؟)</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 6 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">:ماذا تقدمون (المنتج / الخدمة)؟ أخبرنا قليلاً عن أفضل العروض أداءً (إن وجد)</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 7 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">:من هم المنافسين الرئيسيين لك؟ قم بتضمين عناوين URL الخاصة بهم إن أمكن</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 8 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">هل تشعر بأن هناك أي شيء يجعل من منافسيك أفضل؟</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 9 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">.هل هناك شيء يجعل شركتك / منتجك / خدمتك مختلفة عنهم</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 10 */}
                            <div className="col-lg-10 mx-auto">
                                <label htmlFor="">ما هو مصدر معظم عملك؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="REFERRAL" name="REFERRAL"/>
                                            <label className="custom-control-label text-primary" htmlFor="REFERRAL">ترشيح من العملاء</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="PASSING BY" name="PASSING BY"/>
                                            <label className="custom-control-label text-primary" htmlFor="PASSING BY">الاشخاص اللذين يمرون بجانبك</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="SOCIAL MEDIA" name="SOCIAL MEDIA"/>
                                            <label className="custom-control-label text-primary" htmlFor="SOCIAL MEDIA">وسائل التواصل الاجتماعي</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="RETURN CUSTOMERS" name="RETURN CUSTOMERS"/>
                                            <label className="custom-control-label text-primary" htmlFor="RETURN CUSTOMERS">عودة العملاء</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="GOOGLE ADS" name="GOOGLE ADS"/>
                                            <label className="custom-control-label text-primary" htmlFor="GOOGLE ADS">إعلانات جوجل</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="SEARCH ENGINE" name="SEARCH ENGINE"/>
                                            <label className="custom-control-label text-primary" htmlFor="SEARCH ENGINE">محرك البحث</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 11 */}
                            <div className="col-lg-8 mx-auto">
                                <h4 className="pb-3">معلومات الجمهور</h4>
                                <label htmlFor="">ما هو جنس جمهورك المستهدف؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="MALE" name="MALE"/>
                                            <label className="custom-control-label text-primary" htmlFor="MALE">ذكر</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="FEMALE" name="FEMALE"/>
                                            <label className="custom-control-label text-primary" htmlFor="FEMALE">أنثى</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="BOTH " name="BOTH "/>
                                            <label className="custom-control-label text-primary" htmlFor="BOTH ">كلاهما</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 12 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">ما هي الفئة العمرية لجمهورك المستهدف؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="18-35" name="18-35"/>
                                            <label className="custom-control-label text-primary" htmlFor="18-35">18-35</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="35-50" name="35-50"/>
                                            <label className="custom-control-label text-primary" htmlFor="35-50">35-50</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="50-65 " name="50-65"/>
                                            <label className="custom-control-label text-primary" htmlFor="50-65 ">50-65</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="OVER 65 " name="OVER 65"/>
                                            <label className="custom-control-label text-primary" htmlFor="OVER 65 ">فوق 65</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 13 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">ما هو هدف التسويق الخاص بتوقعات البيئة العالمية؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" name="vnvb"/>
                                            <label className="custom-control-label text-primary" htmlFor="">في نطاق 10 أميال</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" name="fgfd"/>
                                            <label className="custom-control-label text-primary" htmlFor="">في نطاق 25 ميلا</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" name="dgsfg"/>
                                            <label className="custom-control-label text-primary" htmlFor=" ">على مستوى المدينة</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" name="fhsfdh"/>
                                            <label className="custom-control-label text-primary" htmlFor="">المحافظة / الولاية على نطاق واسع</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 14 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">ما هي المنصة الأكثر تفاعلاً مع عملائك؟</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 15 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">.ما هي نسبة المرور التي تتلقّاها من ترشيح الزبائن ؟ (في حالة حسابها)</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">اقل من %10</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">بين %10-%30</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">اكثر من %30</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 16 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">.ما هي نسبة المرور التي يتلقّاها متجرك من العملاء العائدين؟ (في حالة حسابها)</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">اقل من %10</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">بين %10-%30</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">اكثر من %30</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 17 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">.ما هي نسبة المرور التي تتلقّاها من وسائل التواصل الاجتماعي؟ (في حالة حسابها)</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">اقل من %10</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">بين %10-%30</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">اكثر من %30</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 18 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">.ما هي نسبة المرور التي تتلقّاها من جوجل؟ (في حالة حسابها)</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">اقل من %10</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">بين %10-%30</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">اكثر من %30</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 19 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">عند البحث عن منتجاتك / خدماتك على جوجل ، ما الكلمات / العبارات التي تعتقد أن الأشخاص سيستخدمونها؟</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 20 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">من هو جمهورك المستهدف؟ ماذا يمكنك أن تخبرنا عنهم اكثر؟</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 21 */}
                            <div className="col-lg-8 mx-auto">
                                <h4 className="pb-3">معلومات وسائل التواصل الاجتماعي</h4>
                                <label htmlFor="">ما هي منصات التواصل الاجتماعي التي تستخدمها حاليا؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="FACEBOOK" name="FACEBOOK"/>
                                            <label className="custom-control-label text-primary" htmlFor="FACEBOOK">الفيسبوك</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="INSTAGRAM" name="INSTAGRAM"/>
                                            <label className="custom-control-label text-primary" htmlFor="INSTAGRAM">انستغرام</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="TWITTER" name="TWITTER"/>
                                            <label className="custom-control-label text-primary" htmlFor="TWITTER">تويتر </label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="SNAP" name="SNAP"/>
                                            <label className="custom-control-label text-primary" htmlFor="SNAP">سناب شات</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="LINKEDIN" name="LINKEDIN"/>
                                            <label className="custom-control-label text-primary" htmlFor="LINKEDIN">لينكدين</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 22 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">.هل هناك أي منصات وسائل اجتماعية أخرى ترغب في إضافتها في التسويق الخاص بك ؟ (إذا كانت الإجابة بنعم ، يرجى تحديد المنصّة)</label>
                                <textarea className="text-right w-100 text-right" type="text" id="" name="" required/>
                            </div>

                            {/* question 23 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">حاليًا ، من يدير وسائل التواصل الاجتماعية الخاصة بعملك؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="INTERNAL" name="INTERNAL"/>
                                            <label className="custom-control-label text-primary" htmlFor="INTERNAL">داخلي</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="EXTERNAL" name="EXTERNAL"/>
                                            <label className="custom-control-label text-primary" htmlFor="EXTERNAL">خارجي</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 24 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">هل تقوم بتشغيل إعلانات وسائل التواصل الاجتماعية؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">نعم </label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">لا</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 24 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="" className="text-right">أو كليهما؟ SEO أو PPC هل تقوم بـ</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">لا</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">تحسين محركات البحث (SEO)</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">الدفع بالنقرة (PPC)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 25 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">.من يدير حساب جوجل الخاص بعملك؟ (إذا كنت تستخدم إعلانات جوجل)</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 26 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">هل تدير حملات عبر البريد الإلكتروني؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">نعم</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">لا</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 27 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">هل تستخدم صفحة هبوط للتسويق الرقمي؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">نعم</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">لا</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 28 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">من ناحية التسويق ما هي أهدافك؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">الوعي بالعلامة التجارية</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">تقديم منتج أو خدمة جديدة</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">زيادة حركة المرور على الإنترنت</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">دعوة للاتصال</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">استهداف عملاء جدد</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">زيادة حركة المرور على الأقدام</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 29 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">ما هي توقعاتك من التسويق الرقمي؟</label>
                                <div className="container d-flex flex-row-reverse flex-wrap mt-2 checkboxes-container mb-0">
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">المزيد من العملاء المحتملين</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">زيادة مبيعاتك</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">تحسين معدل التحويل الخاص بك</label>
                                        </div>
                                    </div>
                                    <div className="col-auto my-1">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="" name=""/>
                                            <label className="custom-control-label text-primary" htmlFor="">زيادة حركة المرور</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* question 30 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">هل هناك أي جوانب لا تعجبك في حملتك التسويقية الحالية؟</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>
                            
                            {/* question 31 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">كم تنفق على التسويق الرقمي شهريًا ($)؟</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            {/* question 32 */}
                            <div className="col-lg-8 mx-auto">
                                <label htmlFor="">كم تنفق على إعلانات جوجل شهريًا ($)؟</label>
                                <textarea className="text-right w-100" type="text" id="" name="" required/>
                            </div>

                            <div className="col-12 mx-auto text-center mb-5 mt-3" style={{color:"#f8931f"}}>
                                <h5 className="font-weight-bold">
                                شكرا لملء هذا الاستبيان.
                                سنبني أفضل خطّة لإدارة وسائل التواصل الاجتماعيّة التي تناسب عملك! 
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
