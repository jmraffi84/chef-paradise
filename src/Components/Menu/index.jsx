import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
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
                <div className="container text-center animated bounceInDown">
                    <h1 className="display-1 mb-4">Menu</h1>
                    <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/pages">Pages</Link></li>
                        <li className="breadcrumb-item text-dark" aria-current="page">Menu</li>
                    </ol>
                </div>
            </div>
            {/* <!-- Hero End --> */}


            {/* <!-- Menu Start --> */}
            <div className="container-fluid menu py-6">
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-01.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-02.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-03.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-04.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-05.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-06.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-07.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-08.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-01.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-03.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-05.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-07.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-08.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-03.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-02.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-01.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-01.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-02.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-03.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-04.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-05.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-06.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-07.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-08.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-06.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-07.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-09.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-02.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-03.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-05.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-07.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-09.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-06.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-07.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-09.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-02.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-03.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-05.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-07.jpg" alt="" />
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
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src="img/menu-09.jpg" alt="" />
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
            {/* <!-- Menu End --> */}

        </div>
    )
}

export default Menu