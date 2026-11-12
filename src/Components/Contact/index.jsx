import React from 'react'

const Contact = () => {
    return (
        <div>

            {/* <!-- Hero Start --> */}
            <div className="container-fluid bg-light py-6 my-6 mt-0">
                <div className="container text-center animated bounceInDown">
                    <h1 className="display-1 mb-4">Contact</h1>
                    <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-dark" aria-current="page">Contact</li>
                    </ol>
                </div>
            </div>
            {/* <!-- Hero End -->


            <!-- Contact Start --> */}
            <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="p-5 bg-light rounded contact-form">
                        <div className="row g-4">
                            <div className="col-12">
                                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Get in touch</small>
                                <h1 className="display-5 mb-0">Contact Us For Any Queries!</h1>
                            </div>
                            <div className="col-md-6 col-lg-7">
                                <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                                <form>
                                    <input type="text" className="w-100 form-control p-3 mb-4 border-primary bg-light" placeholder="Your Name" />
                                    <input type="email" className="w-100 form-control p-3 mb-4 border-primary bg-light" placeholder="Enter Your Email" />
                                    <textarea className="w-100 form-control mb-4 p-3 border-primary bg-light" rows="4" cols="10" placeholder="Your Message"></textarea>
                                    <button className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill" type="submit">Submit Now</button>
                                </form>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div>
                                    <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
                                        <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                                        <div className="">
                                            <h4>Address</h4>
                                            <p>22, Nelson Manickam Rd, Collectorate Colony, Aminjikarai, Chennai, Tamil Nadu 600030</p>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
                                        <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                                        <div className="">
                                            <h4>Mail Us</h4>
                                            <p className="mb-2">info@chefparadise.in</p>
                                            <p className="mb-0">support@chefparadise.in</p>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex w-100 border border-primary p-4 rounded">
                                        <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                                        <div className="">
                                            <h4>Telephone</h4>
                                            <p className="mb-2">(+91) 99627 88036</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}
        </div>
    )
}

export default Contact