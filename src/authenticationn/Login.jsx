import { React, useRef, useState } from "react";
import { useAuth } from '../authContext/AuthContext';
import { useNavigate, useLocation } from "react-router-dom";
import Alert from '@mui/material/Alert';
export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || "/dashbord/user";
    async function handleSubmit(e) {
        e.preventDefault();

        try {
        setError("");
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        localStorage.setItem('isAuth',true)
        navigate(redirectPath);
        } catch {
        setError("خطاء في تسجيل الدخول");
        }
        setLoading(false);
    }

    return (
        <><div>
            <div className="s1">d</div>
            <div className="s1" style={{animationDelay:"4s",top:'30px',left:'-3%'}}>d</div>
            <div className="s2" style={{animationDelay:"5s",top:'90px'}}>d</div>
            <div className="s2">d</div>
            <div className="s3">d</div>
            <div className="s4">d</div>
            <div className="s3" style={{animationDelay:"6s",top:'300px'}}>d</div>
            <div className="s4" style={{animationDelay:"8s",top:'300px'}}>d</div>
            <div className="s3" style={{animationDelay:"7s",top:'230px'}}>d</div>
            <div className="s4" style={{animationDelay:"11s",top:'270px'}}>d</div>

            <div className="s1">d</div>
            <div className="s1" style={{animationDelay:"9s",top:'30px',left:'-3%'}}>d</div>
            <div className="s2" style={{animationDelay:"10s",top:'90px'}}>d</div>
            <div className="s2">d</div>
            <div className="s3">d</div>
            <div className="s4">d</div>
            <div className="s3" style={{animationDelay:"12s",top:'400px'}}>d</div>
            <div className="s4" style={{animationDelay:"13s",top:'400px'}}>d</div>
            <div className="s3" style={{animationDelay:"15s",top:'230px'}}>d</div>
            <div className="s4" style={{animationDelay:"14s",top:'400px'}}>d</div>
            <div className="s1">d</div>
            <div className="s1" style={{animationDelay:"4s",top:'30px',left:'-3%'}}>d</div>
            <div className="s2" style={{animationDelay:"6s",top:'90px'}}>d</div>
            <div className="s2">d</div>
        <div className="contener-login">
            <div className="login">
            <p className="tatiel-login">تسجيل الدخول</p>
            {error && <Alert severity="error" style={{width:"35.6%",fontFamily:"'Cairo', sans-serif"}}>{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <div>
                <div className="lable" htmlFor="email">البريد الالكتروني </div>
                <input className="input-login" id="email" type="email" ref={emailRef} required />
                </div>
                <div>
                <div className="lable" htmlFor="password">الرقم السري</div>
                <input
                className="input-login"
                    id="password"
                    type="password"
                    ref={passwordRef}
                    required
                />
                </div>
                <button disabled={loading} className="button-login" type="submit">
                تسجيل الدخول
                </button>
            </form>
            </div>
        </div>
        </div>
        </>
    );
}