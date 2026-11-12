import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>

            <div className="container-fluid nav-bar">
                <div className="container">
                    <nav className="navbar navbar-light navbar-expand-lg py-4">
                        <Link to="/" className="navbar-brand">
                            <h1 className="text-primary fw-bold mb-0">Chef<span className="text-dark">Paradise</span> </h1>
                        </Link>
                        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav mx-auto">
                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <Link to="/about" className="nav-item nav-link">About</Link>
                                <Link to="/services" className="nav-item nav-link">Services</Link>
                                <Link to="/events" className="nav-item nav-link">Events</Link>
                                <Link to="/menu" className="nav-item nav-link">Menu</Link>
                                <div className="nav-item dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                    <div className="dropdown-menu bg-light">
                                        <Link to="book" className="dropdown-item">Booking</Link>
                                        <Link to="blog" className="dropdown-item">Our Blog</Link>
                                        <Link to="team" className="dropdown-item">Our Team</Link>
                                        <Link to="testimonial" className="dropdown-item">Testimonial</Link>
                                    </div>
                                </div>
                                <Link to="contact" className="nav-item nav-link">Contact</Link>
                                <Link to="Login" className="nav-item nav-link">Login</Link>

                            </div>
                            <button className="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                            <Link to="book" className="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill">Book Now</Link>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Modal Search Start --> */}
            <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content rounded-0">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Search by keyword</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body d-flex align-items-center">
                            <div class="input-group w-75 mx-auto d-flex">
                                <input type="search" class="form-control bg-transparent p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                <span id="search-icon-1" class="input-group-text p-3"><i class="fa fa-search"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal Search End --> */}
        </>
    )
}

export default Header