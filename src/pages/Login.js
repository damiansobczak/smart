import React from "react";
import "./Login.scss";
import LoginForm from "../components/login/loginForm/LoginForm";
import LoginFeature from "../components/login/loginFeature/loginFeature";

export default function Login() {
    return (
        <div className="login">
            <LoginForm />
            <LoginFeature />
        </div>
    );
}
