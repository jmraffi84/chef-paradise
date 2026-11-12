import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            {/* <!-- Hero Start --> */}
            <div className="container-fluid bg-light py-6 my-6 mt-0">
                <div className="container text-center animated bounceInDown">
                    <h1 className="display-1 mb-4">Login</h1>
                    <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/pages">Pages</Link></li>
                        <li className="breadcrumb-item text-dark" aria-current="page">Login</li>
                    </ol>
                </div>
            </div>
            <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-1">
                        </div>
                        <div className="col-10">
                            <div className="border-bottom border-top border-primary bg-light py-5 px-4">
                                <div className="text-center">
                                </div>
                                <div className="container py-5">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-sm-8 col-md-6 col-lg-4">

                                            <form className="card p-4 p-md-5 border-0 rounded-4">

                                                <div className="mb-3">
                                                    <label className="form-label text-muted small">Username</label>
                                                    <input
                                                        type="text"
                                                        className="form-control border-primary p-2"
                                                        placeholder="Enter your username"
                                                    />
                                                </div>

                                                <div className="mb-4">
                                                    <label className="form-label text-muted small">Password</label>
                                                    <input
                                                        type="password"
                                                        className="form-control border-primary p-2"
                                                        placeholder="Enter your password"
                                                    />
                                                </div>

                                                <div className="d-grid">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary py-2 rounded-pill fw-semibold"
                                                    >
                                                        Submit Now
                                                    </button>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login