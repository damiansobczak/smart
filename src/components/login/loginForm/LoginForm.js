import React, { useEffect, useRef } from "react";
import "./LoginForm.scss";
import Logo from "../../../assets/images/login-logo.svg";
import { TweenMax, Power2 } from "gsap";
import { Link } from "react-router-dom";

export default function LoginForm() {
    const logo = useRef(null);
    const info = useRef(null);
    const emailInput = useRef(null);
    const passwordInput = useRef(null);
    const submit = useRef(null);
    const forgot = useRef(null);

    useEffect(() => {
        TweenMax.staggerFrom([logo.current, info.current, emailInput.current, passwordInput.current, submit.current, forgot.current], 1, { ease: Power2.easeInOut, delay: 0.3, y: 30, opacity: 0 }, 0.05);
    }, []);

    return (
        <div className="loginForm">
            <img src={Logo} alt="" className="loginForm__img" ref={logo} />
            <div className="loginForm__info" ref={info}>
                <div className="loginForm__title">Access to Dashboard</div>
                <p>Log in to your admin dashboard using correct information.</p>
            </div>
            <form className="loginForm__form">
                <label htmlFor="#email" ref={emailInput}>
                    <input id="email" className="loginForm__input" value="damian@poczta.pl" type="text" placeholder="Enter your email" />
                </label>
                <label htmlFor="#password" ref={passwordInput}>
                    <input id="password" className="loginForm__input loginForm__input--password" value="admin" type="password" placeholder="Enter your password" />
                </label>
                <Link to="/dashboard" className="loginForm__submit" ref={submit}>Login to dashboard</Link>
            </form>
            <button className="loginForm__forgot" ref={forgot}>Forgot password? Send email with reminder.</button>
        </div>
    );
}
