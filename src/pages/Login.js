import React, { useEffect } from "react";
import "./Login.scss";
import LoginForm from "../components/login/loginForm/LoginForm";
import LoginFeature from "../components/login/loginFeature/loginFeature";
import withAuth from "../hoc/withAuth";
import { withRouter } from "react-router-dom";

const Login = ({ isAuth, history }) => {
    useEffect(() => {
        if (typeof isAuth === 'boolean' && isAuth) {
            history.push('/dashboard');
        }
    });

    return (
        <div className="login">
            <LoginForm />
            <LoginFeature />
        </div>
    );
}

export default withRouter(withAuth(Login));