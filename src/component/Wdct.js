import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Wdct() {
    return (
        <>
            <div>
              
            </div>
            <div className="footer" id="footer">
                <footer className="page-footer font-small special-color-dark pt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <form className="form-inline">
                                    <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                                        aria-label="Search" />
                                    <i className="fas fa-search" aria-hidden="true"></i>
                                </form>

                            </div>
                            <div className="col-md-6 mb-4">

                                <form className="input-group">
                                    <input type="email" className="form-control form-control-sm" placeholder="Your email"
                                        aria-label="Your email" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-sm btn-outline-white my-0" style={{ color: "aliceblue" }} type="button">Sign up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer-container"
                        style={{ marginBottom: "2 em" }}>
                        <div className="footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        <div className="footer-heading footer-1">
                                            <h2 style={{ color: "white" }}>About Us</h2>
                                            <a href="#" style={{ textDecoration: "none" }}>Blog</a><br />
                                            <a href="#" style={{ textDecoration: "none" }}>Demo</a><br />
                                            <a href="#" style={{ textDecoration: "none" }}>Investors</a><br />
                                            <a href="#" style={{ textDecoration: "none" }}>Customers</a>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="footer-heading footer-3">
                                            <h2 style={{ color: "white" }}>Social Media</h2>
                                            <a href="#" style={{ textDecoration: "none" }}>Instagram</a><br />
                                            <a href="#" style={{ textDecoration: "none" }}>Facebook</a><br />
                                            <a href="#" style={{ textDecoration: "none" }}>Linkedin</a><br />
                                            <a href="#" style={{ textDecoration: "none" }}>E-mail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}