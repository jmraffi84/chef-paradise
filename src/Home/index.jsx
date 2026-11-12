import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [videoSrc, setVideoSrc] = useState('');

    useEffect(() => {
        const $ = window.jQuery;
        if ($ && $.fn.owlCarousel) {
            $(".testimonial-carousel-1").owlCarousel({
                loop: true,
                dots: false,
                margin: 25,
                autoplay: true,
                slideTransition: 'linear',
                autoplayTimeout: 0,
                autoplaySpeed: 10000,
                autoplayHoverPause: false,
                responsive: {
                    0: { items: 1 },
                    575: { items: 1 },
                    767: { items: 2 },
                    991: { items: 3 }
                }
            });

            $(".testimonial-carousel-2").owlCarousel({
                loop: true,
                dots: false,
                rtl: true,
                margin: 25,
                autoplay: true,
                slideTransition: 'linear',
                autoplayTimeout: 0,
                autoplaySpeed: 10000,
                autoplayHoverPause: false,
                responsive: {
                    0: { items: 1 },
                    575: { items: 1 },
                    767: { items: 2 },
                    991: { items: 3 }
                }
            });
        }
    }, []);

    return (
        <>


            {/* <!-- Modal Search Start --> */}
            <div className="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center">
                            <div className="input-group w-75 mx-auto d-flex">
                                <input type="search" className="form-control bg-transparent p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal Search End --> */}
            {/* <!-- Hero Start --> */}
            <div className="container-fluid bg-light py-6 my-6 mt-0">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div class="col-lg-7 col-md-12">
                            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown">Welcome to Chef Paradise</small>
                            <h1 className="display-1 mb-4 animated bounceInDown">Book <span className="text-primary">Chef</span>Paradise For Your Event</h1>
                            <Link to="/book" className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft">Book Now</Link>
                            <Link to="/about" className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 animated bounceInLeft">Know More</Link>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <img src="/assets/img/hero.png" className="img-fluid rounded animated zoomIn" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}


            {/* <!-- About Satrt --> */}
            <div className="container-fluid py-6">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
                            <img src="/assets/img/about.jpg" className="img-fluid rounded" alt="" />
                        </div>
                        <div className="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
                            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">About Us</small>
                            <h1 className="display-5 mb-4">Trusted By 200 + satisfied clients</h1>
                            <p className="mb-4">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eit esdioilore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor iesdein reprehendeerit in voluptate velit esse cillum dolore.</p>
                            <div className="row g-4 text-dark mb-5">
                                <div className="col-sm-6">
                                    <i className="fas fa-share text-primary me-2"></i>Fresh and Fast food Delivery
                                </div>
                                <div className="col-sm-6">
                                    <i className="fas fa-share text-primary me-2"></i>24/7 Customer Support
                                </div>
                                <div className="col-sm-6">
                                    <i className="fas fa-share text-primary me-2"></i>Easy Customization Options
                                </div>
                                <div className="col-sm-6">
                                    <i className="fas fa-share text-primary me-2"></i>Delicious Deals for Delicious Meals
                                </div>
                            </div>
                            <Link to="/about" className="btn btn-primary py-3 px-5 rounded-pill">About Us<i className="fas fa-arrow-right ps-2"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End -->


            <!-- Fact Start--> */}
            <div className="container-fluid faqt py-6">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-7">
                            <div className="row g-4">
                                <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.3s">
                                    <div className="faqt-item bg-primary rounded p-4 text-center">
                                        <i className="fas fa-users fa-4x mb-4 text-white"></i>
                                        <h1 className="display-4 fw-bold" data-toggle="counter-up">689</h1>
                                        <p className="text-dark text-uppercase fw-bold mb-0">Happy Customers</p>
                                    </div>
                                </div>
                                <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.5s">
                                    <div className="faqt-item bg-primary rounded p-4 text-center">
                                        <i className="fas fa-users-cog fa-4x mb-4 text-white"></i>
                                        <h1 className="display-4 fw-bold" data-toggle="counter-up">107</h1>
                                        <p className="text-dark text-uppercase fw-bold mb-0">Expert Chefs</p>
                                    </div>
                                </div>
                                <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.7s">
                                    <div className="faqt-item bg-primary rounded p-4 text-center">
                                        <i className="fas fa-check fa-4x mb-4 text-white"></i>
                                        <h1 className="display-4 fw-bold" data-toggle="counter-up">253</h1>
                                        <p className="text-dark text-uppercase fw-bold mb-0">Events Complete</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
                            <div className="video">
                                <button type="button"
                                    className="btn btn-play"
                                    data-bs-toggle="modal"
                                    data-bs-target="#videoModal"
                                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                                    onClick={() => setVideoSrc("https://www.youtube.com/embed/DWRcNpR6Kdc")}
                                >
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal Video --> */}
            <div
                className="modal fade"
                id="videoModal"
                tabIndex="-1"
                aria-labelledby="videoModalLabel"
                aria-hidden="true"
                onClick={() => setVideoSrc('')}
            >
                <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="videoModalLabel">Youtube Video</h5>
                            <button type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => setVideoSrc('')}
                            >
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* <!-- 16:9 aspect ratio --> */}
                            <div className="ratio ratio-16x9">
                                <iframe
                                    id="video"
                                    className="embed-responsive-item"
                                    src={videoSrc ? `${videoSrc}?autoplay=1&modestbranding=1&showinfo=0` : ""}
                                    allowFullScreen
                                    allow="autoplay; encrypted-media"
                                    title="YouTube video"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Fact End -->
   <!-- Team Start --> */}
            <div className="container-fluid team py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Team</small>
                        <h1 className="display-5 mb-5">We have experienced chef Team</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded">
                                <img className="img-fluid rounded-top " src="/assets/img/team-1.jpg" alt="" />
                                <div className="team-content text-center py-3 bg-dark rounded-bottom">
                                    <h4 className="text-primary">Henry</h4>
                                    <p className="text-white mb-0">Decoration Chef</p>
                                </div>
                                <div className="team-icon d-flex flex-column justify-content-center m-4">
                                    <Link className="share btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fas fa-share-alt"></i></Link>
                                    <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.3s">
                            <div className="team-item rounded">
                                <img className="img-fluid rounded-top " src="/assets/img/team-2.jpg" alt="" />
                                <div className="team-content text-center py-3 bg-dark rounded-bottom">
                                    <h4 className="text-primary">Jemes Born</h4>
                                    <p className="text-white mb-0">Executive Chef</p>
                                </div>
                                <div className="team-icon d-flex flex-column justify-content-center m-4">
                                    <Link className="share btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fas fa-share-alt"></i></Link>
                                    <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.5s">
                            <div className="team-item rounded">
                                <img className="img-fluid rounded-top " src="/assets/img/team-3.jpg" alt="" />
                                <div className="team-content text-center py-3 bg-dark rounded-bottom">
                                    <h4 className="text-primary">Martin Hill</h4>
                                    <p className="text-white mb-0">Kitchen Porter</p>
                                </div>
                                <div className="team-icon d-flex flex-column justify-content-center m-4">
                                    <Link className="share btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fas fa-share-alt"></i></Link>
                                    <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.7s">
                            <div className="team-item rounded">
                                <img className="img-fluid rounded-top " src="/assets/img/team-4.jpg" alt="" />
                                <div className="team-content text-center py-3 bg-dark rounded-bottom">
                                    <h4 className="text-primary">Adam Smith</h4>
                                    <p className="text-white mb-0">Head Chef</p>
                                </div>
                                <div className="team-icon d-flex flex-column justify-content-center m-4">
                                    <Link className="share btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fas fa-share-alt"></i></Link>
                                    <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team End -->

            <!-- Service Start --> */}
            <div className="container-fluid service py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Services</small>
                        <h1 className="display-5 mb-5">What We Offer</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
                            <div className="bg-light rounded service-item">
                                <div className="service-content d-flex align-items-center justify-content-center p-4">
                                    <div className="service-content-icon text-center">
                                        <i className="fas fa-cheese fa-7x text-primary mb-4"></i>
                                        <h4 className="mb-3">Wedding Services</h4>
                                        <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                                        <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.3s">
                            <div className="bg-light rounded service-item">
                                <div className="service-content d-flex align-items-center justify-content-center p-4">
                                    <div className="service-content-icon text-center">
                                        <i className="fas fa-pizza-slice fa-7x text-primary mb-4"></i>
                                        <h4 className="mb-3">Corporate Catering</h4>
                                        <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                                        <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.5s">
                            <div className="bg-light rounded service-item">
                                <div className="service-content d-flex align-items-center justify-content-center p-4">
                                    <div className="service-content-icon text-center">
                                        <i className="fas fa-hotdog fa-7x text-primary mb-4"></i>
                                        <h4 className="mb-3">Cocktail Reception</h4>
                                        <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                                        <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.7s">
                            <div className="bg-light rounded service-item">
                                <div className="service-content d-flex align-items-center justify-content-center p-4">
                                    <div className="service-content-icon text-center">
                                        <i className="fas fa-hamburger fa-7x text-primary mb-4"></i>
                                        <h4 className="mb-3">Bento Catering</h4>
                                        <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                                        <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
                            <div className="bg-light rounded service-item">
                                <div className="service-content d-flex align-items-center justify-content-center p-4">
                                    <div className="service-content-icon text-center">
                                        <i className="fas fa-wine-glass-alt fa-7x text-primary mb-4"></i>
                                        <h4 className="mb-3">Pub Party</h4>
                                        <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                                        <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.3s">
                            <div className="bg-light rounded service-item">
                                <div className="service-content d-flex align-items-center justify-content-center p-4">
                                    <div className="service-content-icon text-center">
                                        <i className="fas fa-walking fa-7x text-primary mb-4"></i>
                                        <h4 className="mb-3">Home Delivery</h4>
                                        <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                                        <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.5s">
                            <div className="bg-light rounded service-item">
                                <div className="service-content d-flex align-items-center justify-content-center p-4">
                                    <div className="service-content-icon text-center">
                                        <i className="fas fa-wheelchair fa-7x text-primary mb-4"></i>
                                        <h4 className="mb-3">Sit-down Catering</h4>
                                        <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                                        <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.7s">
                            <div className="bg-light rounded service-item">
                                <div className="service-content d-flex align-items-center justify-content-center p-4">
                                    <div className="service-content-icon text-center">
                                        <i className="fas fa-utensils fa-7x text-primary mb-4"></i>
                                        <h4 className="mb-3">Buffet Catering</h4>
                                        <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                                        <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End -->


            <!-- Events Start --> */}
            <div className="container-fluid event py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Latest Events</small>
                        <h1 className="display-5 mb-5">Our Social & Professional Events Gallery</h1>
                    </div>
                    <div className="tab-class text-center">
                        <ul className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp" data-wow-delay="0.1s">
                            <li className="nav-item p-2">
                                <Link className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" data-bs-target="#tab-1" to="#tab-1">
                                    <span className="text-dark" style={{ width: '150px' }}>All Events</span>
                                </Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link className="d-flex py-2 mx-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" data-bs-target="#tab-2" to="#tab-2">
                                    <span className="text-dark" style={{ width: '150px' }}>Wedding</span>
                                </Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" data-bs-target="#tab-3" to="#tab-3">
                                    <span className="text-dark" style={{ width: '150px' }}>Corporate</span>
                                </Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" data-bs-target="#tab-4" to="#tab-4">
                                    <span className="text-dark" style={{ width: '150px' }}>Cocktail</span>
                                </Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" data-bs-target="#tab-5" to="#tab-5">
                                    <span className="text-dark" style={{ width: '150px' }}>Buffet</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src="/assets/img/event-1.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Wedding</h4>
                                                        <Link to="/assets/img/event-1.jpg" data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.3s">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src="/assets/img/event-2.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Corporate</h4>
                                                        <Link to="/assets/img/event-2.jpg" data-lightbox="event-2" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.5s">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src="/assets/img/event-3.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Wedding</h4>
                                                        <Link to="/assets/img/event-3.jpg" data-lightbox="event-3" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.7s">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src="/assets/img/event-4.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Buffet</h4>
                                                        <Link to="/assets/img/event-4.jpg" data-lightbox="event-4" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src="/assets/img/event-5.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Cocktail</h4>
                                                        <Link to="/assets/img/event-5.jpg" data-lightbox="event-5" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.3s">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src="/assets/img/event-6.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Wedding</h4>
                                                        <Link to="/assets/img/event-6.jpg" data-lightbox="event-6" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.5s">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src="/assets/img/event-7.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Buffet</h4>
                                                        <Link to="/assets/img/event-7.jpg" data-lightbox="event-7" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.7s">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src="/assets/img/event-8.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Corporate</h4>
                                                        <Link to="/assets/img/event-8.jpg" data-lightbox="event-17" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-3">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src="/assets/img/event-1.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Wedding</h4>
                                                        <Link to="/assets/img/event-1.jpg" data-lightbox="event-8" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src="/assets/img/event-2.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Wedding</h4>
                                                        <Link to="/assets/img/event-2.jpg" data-lightbox="event-9" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-3" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-3">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src="/assets/img/event-3.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Corporate</h4>
                                                        <Link to="/assets/img/event-3.jpg" data-lightbox="event-10" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src="/assets/img/event-4.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Corporate</h4>
                                                        <Link to="/assets/img/event-4.jpg" data-lightbox="event-11" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-4" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-3">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src="/assets/img/event-5.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Cocktail</h4>
                                                        <Link to="/assets/img/event-5.jpg" data-lightbox="event-12" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src="/assets/img/event-6.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Cocktail</h4>
                                                        <Link to="/assets/img/event-6.jpg" data-lightbox="event-13" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-5" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-3">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src="/assets/img/event-7.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Buffet</h4>
                                                        <Link to="/assets/img/event-7.jpg" data-lightbox="event-14" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src="/assets/img/event-8.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Buffet</h4>
                                                        <Link to="/assets/img/event-8.jpg" data-lightbox="event-15" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Events End -->


            <!-- Menu Start --> */}
            <div className="container-fluid menu bg-light py-6 my-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Menu</small>
                        <h1 className="display-5 mb-5">Most Popular Food in the World</h1>
                    </div>
                    <div className="tab-class text-center">
                        <ul className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp" data-wow-delay="0.1s">
                            <li className="nav-item p-2">
                                <Link className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill active" data-bs-toggle="pill" data-bs-target="#tab-6" to="#tab-6">
                                    <span className="text-dark" style={{ width: "150px" }}>Starter</span>
                                </Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" data-bs-target="#tab-7" to="#tab-7">
                                    <span className="text-dark" style={{ width: "150px" }}>Main Course</span>
                                </Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" data-bs-target="#tab-8" to="#tab-8">
                                    <span className="text-dark" style={{ width: "150px" }}>Drinks</span>
                                </Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" data-bs-target="#tab-9" to="#tab-9">
                                    <span className="text-dark" style={{ width: "150px" }}>Offers</span>
                                </Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" data-bs-target="#tab-10" to="#tab-10">
                                    <span className="text-dark" style={{ width: "150px" }}>Our Special</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="tab-6" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.1s">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-01.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Paneer</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.2s">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-02.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sweet Potato</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.3s">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-03.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sabudana Tikki</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.4s">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-04.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Pizza</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.5s">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-05.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Bacon</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.6s">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-06.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Chicken</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.7s">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-07.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Blooming</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.8s">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-08.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sweet</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-7" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-01.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Argentinian</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-03.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Crispy</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-05.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sabudana Tikki</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-07.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Blooming</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-08.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Argentinian</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-03.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Lemon</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-02.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Water Drink</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-01.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Salty lemon</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-8" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-01.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Crispy water</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-02.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Juice</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-03.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Orange</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-04.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Apple Juice</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-05.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Banana</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-06.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sweet Water</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-07.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Hot Coffee</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-08.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sweet Potato</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-9" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-06.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sabudana Tikki</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-07.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Crispy</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-09.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Pizza</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-02.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Bacon</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-03.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Chicken</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-05.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Blooming</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-07.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sweet</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-09.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Argentinian</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-10" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-06.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sabudana Tikki</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-07.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Crispy</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-09.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Pizza</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-02.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Bacon</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-03.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Chicken</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-05.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Blooming</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-07.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sweet</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="/assets/img/menu-09.jpg" alt="" />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Argentinian</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Menu End -->


        


         


            <!-- Testimonial Start --> */}
            <div className="container-fluid py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Testimonial</small>
                        <h1 className="display-5 mb-5">What Our Customers says!</h1>
                    </div>
                    <div className="owl-carousel owl-theme testimonial-carousel testimonial-carousel-1 mb-4 wow bounceInUp" data-wow-delay="0.1s">
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src="/assets/img/testimonial-1.jpg" className="img-fluid rounded-circle flex-shrink-0" alt="" />
                                <div className="position-absolute" style={{ top: "15px", right: "20px" }}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src="/assets/img/testimonial-2.jpg" className="img-fluid rounded-circle flex-shrink-0" alt="" />
                                <div className="position-absolute" style={{ top: "15px", right: "20px" }}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src="/assets/img/testimonial-3.jpg" className="img-fluid rounded-circle flex-shrink-0" alt="" />
                                <div className="position-absolute" style={{ top: "15px", right: "20px" }}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src="/assets/img/testimonial-4.jpg" className="img-fluid rounded-circle flex-shrink-0" alt="" />
                                <div className="position-absolute" style={{ top: "15px", right: "20px" }}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="owl-carousel testimonial-carousel testimonial-carousel-2 wow bounceInUp" data-wow-delay="0.3s">
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src="/assets/img/testimonial-1.jpg" className="img-fluid rounded-circle flex-shrink-0" alt="" />
                                <div className="position-absolute" style={{ top: "15px", right: "20px" }}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src="/assets/img/testimonial-2.jpg" className="img-fluid rounded-circle flex-shrink-0" alt="" />
                                <div className="position-absolute" style={{ top: "15px", right: "20px" }}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src="/assets/img/testimonial-3.jpg" className="img-fluid rounded-circle flex-shrink-0" alt="" />
                                <div className="position-absolute" style={{ top: "15px", right: "20px" }}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src="/assets/img/testimonial-4.jpg" className="img-fluid rounded-circle flex-shrink-0" alt="" />
                                <div className="position-absolute" style={{ top: "15px", right: "20px" }}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}


            {/* <!-- Blog Start --> */}
            <div className="container-fluid blog py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Blog</small>
                        <h1 className="display-5 mb-5">Be First Who Read News</h1>
                    </div>
                    <div className="row gx-4 justify-content-center">
                        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                            <div className="blog-item">
                                <div className="overflow-hidden rounded">
                                    <img src="/assets/img/blog-1.jpg" className="img-fluid w-100" alt="" />
                                </div>
                                <div className="blog-content mx-4 d-flex rounded bg-light">
                                    <div className="text-dark bg-primary rounded-start">
                                        <div className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                                            <p className="fw-bold mb-0">16</p>
                                            <p className="fw-bold mb-0">Sep</p>
                                        </div>
                                    </div>
                                    <Link to="#" className="h5 lh-base my-auto h-100 p-3">How to get more test in your food from</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.3s">
                            <div className="blog-item">
                                <div className="overflow-hidden rounded">
                                    <img src="/assets/img/blog-2.jpg" className="img-fluid w-100" alt="" />
                                </div>
                                <div className="blog-content mx-4 d-flex rounded bg-light">
                                    <div className="text-dark bg-primary rounded-start">
                                        <div className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                                            <p className="fw-bold mb-0">16</p>
                                            <p className="fw-bold mb-0">Sep</p>
                                        </div>
                                    </div>
                                    <Link to="#" className="h5 lh-base my-auto h-100 p-3">How to get more test in your food from</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.5s">
                            <div className="blog-item">
                                <div className="overflow-hidden rounded">
                                    <img src="/assets/img/blog-3.jpg" className="img-fluid w-100" alt="" />
                                </div>
                                <div className="blog-content mx-4 d-flex rounded bg-light">
                                    <div className="text-dark bg-primary rounded-start">
                                        <div className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                                            <p className="fw-bold mb-0">16</p>
                                            <p className="fw-bold mb-0">Sep</p>
                                        </div>
                                    </div>
                                    <Link to="#" className="h5 lh-base my-auto h-100 p-3">How to get more test in your food from</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Blog End --> */}

        </>
    )
}

export default Home