import React, { useRef, useState } from "react";
import { useAuth } from '../authenticationn/authContext/AuthContext';
import { Link, useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function UpdateProfile() {
const emailRef = useRef();
const passwordRef = useRef();
const passwordConfirmRef = useRef();
const { currentUser, updateUserPassword, updateUserEmail } = useAuth();
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    return setError("الرقم السري غير متطابق");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
    promises.push(updateUserEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
    promises.push(updateUserPassword(passwordRef.current.value));
    }

    Promise.all(promises)
    .then(() => {
        navigate("/");
    })
    .catch(() => {
        setError("Failed to update account");
    })
    .finally(() => {
        setLoading(false);
    });
}

return (
    <>
    <div className="contener-update">
        <div className="login-update">
        <p className="tatiel-login">تعديل الحساب</p>
        {error && <Alert severity="error" style={{width:"35.6%",fontFamily:"'Cairo', sans-serif"}}>{error}</Alert>}
        <form onSubmit={handleSubmit}>
            <div id="email">
            <div className="lable">البريد الالكتروني</div>
            <input
            className="input-login"
            style={{width: '100%'}}
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser?.email}
            />
            </div>
            <div id="password">
            <div className="lable">الرقم السري</div>
            <input
            className="input-login"
            style={{width: '100%'}}
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
            />
            </div>
            <div id="password-confirm">
            <div className="lable">اعد كتابه الرقم السري</div>
            <input
            className="input-login"
            style={{width: '100%'}}
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
            />
            </div>
            <button disabled={loading} className="button-update" type="submit">
            تعديل
            </button>
        </form>
        <div>
        <Link to="/dashbord/user" className="go-back"><span>عودة</span><ArrowBackIcon fontSize=""/></Link>
    </div>
        </div>
        </div>
    </>
);
}