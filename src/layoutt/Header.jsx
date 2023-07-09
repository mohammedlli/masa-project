import logo from '../image/55.png'
import { useState } from 'react';
import MediaSidbar from './MediaSidbar';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
export default function Header(){
    const [nav,setnav]  =   useState(false);
    const handlenav =()=>{
        setnav(!nav);
    }
    return<>
    
    <div className='header'>
    <div onClick={handlenav} className='iconnav'>{nav? <CloseIcon fontSize='large'/> :<MenuIcon fontSize='large'/>}</div>
            {nav&&
            <MediaSidbar />}
            <h3 className='logo-name'>عوينات فاطمة</h3>
            <img className='logo-imge'  src={logo} alt="" />
        </div>
        
    </>
}