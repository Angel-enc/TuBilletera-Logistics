import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <span className="fs-4 fw-bold"> TuBilletera <span className="text-primary">Logistics</span></span>
                </Link>
                <div className="d-flex">
                    <Link to="/login" className="btn btn-outline-light me-2">Entrar</Link>
                    <Link to="/register" className="btn btn-primary">Registro</Link>
                </div>
            </div>
        </nav>
    );
};