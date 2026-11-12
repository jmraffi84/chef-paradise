import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Services = () => {
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
        <div>
            {/* <!-- Hero Start --> */}
            <div className="container-fluid bg-light py-6 my-6 mt-0">
                <div className="container text-center animated bounceInDown">
                    <h1 className="display-1 mb-4">Services</h1>
                    <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/pages">Pages</Link></li>
                        <li className="breadcrumb-item text-dark" aria-current="page">Services</li>
                    </ol>
                </div>
            </div>
            {/* <!-- Hero End -->


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
                                <div className="position-absolute" style={{ top: '15px', right: '20px' }}>
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
                                <div className="position-absolute" style={{ top: '15px', right: '20px' }}>
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
                                <div className="position-absolute" style={{ top: '15px', right: '20px' }}>
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
                                <div className="position-absolute" style={{ top: '15px', right: '20px' }}>
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
                                <div className="position-absolute" style={{ top: '15px', right: '20px' }}>
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
                                <div className="position-absolute" style={{ top: '15px', right: '20px' }}>
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
                                <div className="position-absolute" style={{ top: '15px', right: '20px' }}>
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
                                <div className="position-absolute" style={{ top: '15px', right: '20px' }}>
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
        </div>
    )
}

export default Services