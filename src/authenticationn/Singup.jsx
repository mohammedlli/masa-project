import { React, useRef, useState } from "react";
import { useAuth } from '../authContext/AuthContext';
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("خطاء في انشاء حساب");
    }
    setLoading(false);
    }

    return (
        <>
        <div className="contener-update">
            <div className="login-update">
            <p className="tatiel-login">انشاء حساب</p>
            {error && <Alert severity="error" style={{width:"35.6%",fontFamily:"'Cairo', sans-serif"}}>{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <div>
                <div className="lable" htmlFor="email">البريد الالكتروني</div>
                <input
                className="input-login"
                style={{width: '100%'}}
                id="email" type="email" ref={emailRef} required />
                </div>
                <div>
                <div className="lable" htmlFor="password">الرقم السري</div>
                <input
                className="input-login"
                style={{width: '100%'}}
                    id="password"
                    type="password"
                    ref={passwordRef}
                    required
                />
                </div>
                <div>
                <div className="lable" htmlFor="password-confirm">
                    اعد كتابة الرقم السري
                </div>
                <input
                    className="input-login"
                    style={{width: '100%'}}
                    id="password-confirm"
                    type="password"
                    ref={passwordConfirmRef}
                    required
                />
                </div>
                <button disabled={loading} className="button-update" type="submit">
                انشاء حساب
                </button>
            </form>
            </div>
        </div>
    </>
  );
}