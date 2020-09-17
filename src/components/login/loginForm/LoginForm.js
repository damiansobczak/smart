import React, { useEffect, useRef, useState } from "react";
import "./LoginForm.scss";
import Logo from "../../../assets/images/login-logo.svg";
import { TweenMax, Power2 } from "gsap";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";

const LoginForm = (props) => {
    const logo = useRef(null);
    const info = useRef(null);
    const emailInput = useRef(null);
    const passwordInput = useRef(null);
    const submit = useRef(null);
    const forgot = useRef(null);

    const [form, setForm] = useState({
        email: 'damian@poczta.pl',
        password: 'admin',
        err: null
    });

    const handleChange = (e) => {
        e.preventDefault();
        setForm({
            ...form, [e.target.name]: e.target.value
        });
    }

    const submitForm = (e) => {
        e.preventDefault();
        axios.post('/login', {
            email: form.email,
            password: form.password,
        })
            .then(res => {
                if (res.status === 200 && res.data.user) {
                    console.log("User logged in", res.data.user[0]._id, res.data.user[0].name, res.data.user[0].email);
                    console.log(props.history.push('/dashboard'));
                } else {
                    setForm({ ...form, err: res.data.message });
                }
            });
    }

    useEffect(() => {
        TweenMax.staggerTo([logo.current, info.current, emailInput.current, passwordInput.current, submit.current, forgot.current], 1, { ease: Power2.easeInOut, delay: 0.3, y: 0, opacity: 1 }, 0.05);
    }, []);

    return (
        <div className="loginForm">
            <img src={Logo} alt="" className="loginForm__img" ref={logo} />
            <div className="loginForm__info" ref={info}>
                <div className="loginForm__title">Access to Dashboard</div>
                <p>Log in to your admin dashboard using correct information.</p>
            </div>
            {form.err && (
                <div className="loginForm__error">{form.err}</div>
            )}
            <form className="loginForm__form">
                <label className="loginForm__label" htmlFor="#email" ref={emailInput}>
                    <input id="email" className="loginForm__input" onChange={(e) => handleChange(e)} defaultValue="damian@poczta.pl" type="text" placeholder="Enter your email" name="email" />
                </label>
                <label className="loginForm__label" htmlFor="#password" ref={passwordInput}>
                    <input id="password" className="loginForm__input loginForm__input--password" onChange={(e) => handleChange(e)} defaultValue="admin" type="password" placeholder="Enter your password" name="password" />
                </label>
                <button className="loginForm__submit" onClick={(e) => submitForm(e)} ref={submit}>Login to dashboard</button>
            </form>
            <button className="loginForm__forgot" ref={forgot}>Forgot password? Send email with reminder.</button>
        </div>
    );
}

export default withRouter(LoginForm);