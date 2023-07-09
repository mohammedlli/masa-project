import React, { useState } from "react";
import { useAuth } from '../contextt/AuthContext';
import { Link} from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function UserAcont() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    return (
        <>
        <div className="contener-profile">
            <div className="profile">
        <div >
            <div>
            <h2 className="tatiel-login">الحساب</h2>
            {error && <div variant="danger">{error}</div>}
            <strong className="span-strong">البريد الالكتروني </strong> <span className="span-email">{currentUser && currentUser.email}</span>
            </div>
        </div>
        <div>
            <Link className="button-logout" to="/dashbord/update-profile" >
            <ArrowForwardIosIcon fontSize=""/><span>تعديل</span>
            </Link>
        </div>
        </div>
        </div>
        </>
    );
    }