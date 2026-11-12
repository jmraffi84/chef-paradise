import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>

            {/* <!-- Footer Start --> */}
            <div className="container-fluid footer py-6 my-6 mb-0 bg-light wow bounceInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h1 className="text-primary">Chef<span className="text-dark">Paradise</span></h1>
                                <p className="lh-lg mb-4">There cursus massa at urnaaculis estieSed aliquamellus vitae ultrs condmentum leo massamollis its estiegittis miristum.</p>
                                <div className="footer-icon d-flex">
                                    <Link className="btn btn-primary btn-sm-square me-2 rounded-circle" to="https://www.facebook.com/chefs.paradise"><i className="fab fa-facebook-f"></i></Link>
                                    <Link src="#" className="btn btn-primary btn-sm-square me-2 rounded-circle" to="https://www.instagram.com/_chefs_paradise_/s"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="mb-4">Special Facilities</h4>
                                <div className="d-flex flex-column align-items-start">
                                    <Link className="text-body mb-3" to=""><i className="fa fa-check text-primary me-2"></i>Cheese Burger</Link>
                                    <Link className="text-body mb-3" to=""><i className="fa fa-check text-primary me-2"></i>Sandwich</Link>
                                    <Link className="text-body mb-3" to=""><i className="fa fa-check text-primary me-2"></i>Panner Burger</Link>
                                    <Link className="text-body mb-3" to=""><i className="fa fa-check text-primary me-2"></i>Special Sweets</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="mb-4">Contact Us</h4>
                                <div className="d-flex flex-column align-items-start">
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i> 22, Nelson Manickam Rd, Collectorate Colony, Aminjikarai, Chennai, Tamil Nadu 600030</p>
                                    <p><i className="fa fa-phone-alt text-primary me-2"></i> +91 99627 88036</p>
                                    <p><i className="fa fa-clock text-primary me-2"></i> 11 Am to 11 Pm </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="mb-4">Social Gallery</h4>
                                <div className="row g-2">
                                    <div className="col-4">
                                        <img src="/assets/img/menu-01.jpg" className="img-fluid rounded-circle border border-primary p-2" alt="" />
                                    </div>
                                    <div className="col-4">
                                        <img src="/assets/img/menu-02.jpg" className="img-fluid rounded-circle border border-primary p-2" alt="" />
                                    </div>
                                    <div className="col-4">
                                        <img src="/assets/img/menu-03.jpg" className="img-fluid rounded-circle border border-primary p-2" alt="" />
                                    </div>
                                    <div className="col-4">
                                        <img src="/assets/img/menu-04.jpg" className="img-fluid rounded-circle border border-primary p-2" alt="" />
                                    </div>
                                    <div className="col-4">
                                        <img src="/assets/img/menu-05.jpg" className="img-fluid rounded-circle border border-primary p-2" alt="" />
                                    </div>
                                    <div className="col-4">
                                        <img src="/assets/img/menu-06.jpg" className="img-fluid rounded-circle border border-primary p-2" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}


            {/* <!-- Copyright Start --> */}
            <div className="container-fluid copyright bg-dark py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <span className="text-light"><Link to="https://chefparadise.in"><i className="fas fa-copyright text-light me-2"></i>ChefParadise</Link>, All right reserved.</span>
                        </div>
                        <div className="col-md-6 my-auto text-center text-md-end text-white">
                            Developed By <Link className="border-bottom" to="https://mohammed-protfolio.netlify.app/">Mohammed Raffi</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Copyright End --> */}


            {/* <!-- Back to Top --> */}
            <Link src="#" className="btn btn-md-square btn-primary rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></Link>

        </>
    )
}

export default Footer