import { NavLink, Navigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import logo from '../image/55.png'
import WidgetsIcon from '@mui/icons-material/Widgets';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useState } from "react";
import { useAuth } from '../authContext/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
 

export default function SideBar(){
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    async function handleLogout() {
        setError("");
        try {
        await logout();
        localStorage.clear()
        Navigate("/login");
        } catch {
        setError("Failed to log out");
        }
    }
    return(<div className="SideBare">
        <div className="ul">
        <div className="div-img">
        <img style={{width:"30%",borderRadius:"100px"}} src={logo} alt="" />
        </div>
        </div>
        <div className="elements">
            
        <NavLink activeclassName="active" className="elemrnt" to='user'>
        <HomeIcon className="Elament-of-Sid-Bar-icon"/>
        <div className="Elament-of-Sid-Bar">الرئيسية</div>
        </NavLink>
        
        
        <NavLink activeclassName="active" className="elemrnt" to="adduser">
        <AddIcon className="Elament-of-Sid-Bar-icon" />
        <div className="Elament-of-Sid-Bar" >اضافة مراجع</div>
        </NavLink> 

        <NavLink activeclassName="active" className="elemrnt" to="search">
        <SearchIcon className="Elament-of-Sid-Bar-icon"/>
        <div className="Elament-of-Sid-Bar" >البحث</div> 
        </NavLink>
        

        <NavLink activeclassName="active" className="elemrnt" to='adminpage'>
        <CurrencyExchangeIcon className="Elament-of-Sid-Bar-icon"/>
        <div className="Elament-of-Sid-Bar">المبيعات</div>
        </NavLink>

        <NavLink activeclassName="active" className="elemrnt" to='store'>
        <WidgetsIcon className="Elament-of-Sid-Bar-icon"/>
        <div className="Elament-of-Sid-Bar">المخزن</div>
        </NavLink>

        <NavLink activeclassName="active" className="elemrnt" to='signup'>
        <PersonAddAlt1Icon className="Elament-of-Sid-Bar-icon"/>
        <div className="Elament-of-Sid-Bar">انشاء حساب</div>
        </NavLink>

        <NavLink onClick={handleLogout}  activeclassName="active" className="elemrnt"  to='/'>
        <LogoutIcon className="Elament-of-Sid-Bar-icon"/>
        <div className="Elament-of-Sid-Bar" >تسجيل خروج</div>
        </NavLink >
        
        </div>
        
    </div>)
}