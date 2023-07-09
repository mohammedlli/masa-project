
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import {collection,query,onSnapshot,doc,deleteDoc,} from 'firebase/firestore';
import { db } from '../firebase/Firebase';
import { LinearProgress } from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SecondAdditionForm from "./SecondAdditionForm";
import UpdateTheAdition from "./UpdateTheAdition";
export default function MianSecondAdition(){
    const [newReviewers, setNewReviewers] = useState([]);
    const [townewReviewrs, setTowNewReviewrs] = useState([]);
    const[loading,setLoading] = useState(false);
    const id=window.location.pathname.split("/").slice(-1)[0];
    const [model,setmodel]= useState(false);
    const [update,setUpdate]=useState(false);

    const handels=()=>{
        setUpdate(!update);
    }
    const handelmodel=()=>{
        setmodel(!model);
    }

    useEffect(() => {
        setLoading(true);
        const q = query(collection(db, 'newReviewers'));
        onSnapshot(q, (querySnapshot) => {
        console.log(querySnapshot);
        setNewReviewers(
            querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }))
            
        );
        setLoading(false);
        });

        const s = query(collection(db, 'items'));
        onSnapshot(s, (querySnapshot) => {
        console.log(querySnapshot);
        setTowNewReviewrs(
            querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }))
        );
        setLoading(false);
        });
    }, []);

    const mainRev= newReviewers.filter((post)=>{
        if (post.numberphone === id){
            return newReviewers;
        }
    })
    const revTow= townewReviewrs.filter((post)=>{
        if ( post.numberphone === id ){
            return townewReviewrs;
        }
    })

    async function deleteTask(id) { 
        try {
        await deleteDoc(doc(db, 'items', id));
        } catch (err) {
        alert(err);
        }
    }
    return(
<div className="contenar-Card">
        {loading&&<div><LinearProgress/></div>}
    {mainRev.map(user=>(
    <div className="Meno-Of-MainCard">
        <div className="name-of-person">
            <h3>{user.name}</h3>
        </div>
            <div className="icon-click-new">
                <div className="insid-icon-click-new">
                    <Button sx={{color:"#212A3E",fontFamily:"Cairo, sans-serif",fontWeight:"600"}} onClick={handelmodel} >
                        <span>اضافة جديدة</span>
                        <PostAddIcon fontSize="medium"/>
                    </Button> 
                </div> 
            </div>
            {model&& <SecondAdditionForm usernumberphon={user.numberphone}/>}
    </div>
        ))}
        {revTow.map(newuser=>(
    <div className="Meno-Of-MainCard">
        <div className="Main-Card">
            <div className="line-info">
            <h3 className="info-h3">رقم الهاتف    :<span className="span-info">{newuser.numberphone}</span></h3>
            <h3 className="info-h3">التاريخ  :<span className="span-info"> {newuser.monthdate}/{newuser.daydate}/{newuser.yeardate}</span></h3>
            </div>
            <div className="line-info">
                <div className="info-t-p">
                    <div className="div-info-nameandvalue">
                        <span className="span-info-name">نوع العدسة</span>
                        <span className="span-info-value">{newuser.lenstype}</span>
                    </div>
                    <div className="div-info-nameandvalue">
                        <span className="span-info-name">نوع الاطار</span>
                        <span className="span-info-value">{newuser.frametype}</span>
                    </div>               
                    <div className="div-info-nameandvalue">
                        <span className="span-info-name">السعر الكلي</span>
                        <span className="span-info-value">{newuser.totalprice}</span>
                    </div>  
                    <div className="div-info-nameandvalue">
                        <span className="span-info-name">الواصل</span>
                        <span className="span-info-value">{newuser.paidprice}</span>
                    </div> 
                    <div className="div-info-nameandvalue">
                        <span className="span-info-name">الباقي</span>
                        <span className="span-info-value">{newuser.restprice}</span>
                    </div>
                    <div className="div-info-nameandvalue">
                        <span className="span-info-name">ملاحضة</span>
                        <span className="span-info-value">{newuser.note}</span>
                    </div> 
                    <div className="div-info-nameandvalue">
                        <span className="span-info-name">المدخل</span>
                        <span className="span-info-value">{newuser.enterance}</span>
                    </div> 
                </div>
            
                <div>
                    <div  className="div-info-table">
                        <table   style={{width:"550px"}}>
                            <tr  style={{backgroundColor:"#ddddddc9",color:"#5A606E"}}>
                                <td style={{borderRadius:"0px 10px 0px 0px"}} colSpan={3} align="center">L.E.</td>
                                <td  colSpan={3} align="center">R.E.</td>
                            </tr>
                            
                            <tr  align='center'>
                                <td>
                                    <span className='td-info-name'>AXIS </span>
                                    <span className="span-info-value-t">{newuser.l_e_axis}</span>
                                </td>
                                <td>
                                    <span className='td-info-name'>CYL </span>
                                    <span className="span-info-value-t">{newuser.l_e_cyl}</span>
                                </td>
                                <td>
                                    <span className='td-info-name'>SPH </span>
                                    <span className="span-info-value-t">{newuser.l_e_sph}</span>
                                </td>
                                <td>
                                    <span className='td-info-name'>AXIS </span>
                                    <span className="span-info-value-t">{newuser.r_e_axis}</span>
                                </td>
                                <td>
                                    <span className='td-info-name'>CYL </span>
                                    <span className="span-info-value-t">{newuser.r_e_cyl}</span></td>
                                <td>
                                    <span className='td-info-name'>SPH </span>
                                    <span className="span-info-value-t">{newuser.r_e_sph}</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    
                    <div className="div-info-table-2">    
                        <table style={{width:"100%"}}>
                            <tr style={{backgroundColor:"#ddddddc9",color:"#5A606E"}}   >
                                <td style={{borderRadius:"0px 10px 0px 0px"}} align="center" colSpan={8}>VA</td>
                            </tr>
                            <tr >
                                <td style={{display:"flex",justifyContent:"space-around",marginTop:"0px"}} colSpan={2} align="center">
                                    <div>
                                        <span className='td-info-name'>IP.D</span>
                                        <span align="center" className="span-info-value-t">{newuser.ip_d}</span>
                                    </div>
                                    <div>
                                        <span className='td-info-name'>Right</span>
                                        <span align="center" className="span-info-value-t">{newuser.reight}</span>
                                    </div>
                                    <div>
                                        <span className="td-info-name">Left</span>
                                        <span align="center" className="span-info-value-t">{newuser.left}</span>
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                    <td className="tr2-table-2" >
                                    <div>
                                        <span className="td-info-name-t2">R</span>
                                        <span align="center" className="span-info-value-t2">{newuser.i_opR}</span>
                                    </div>
                                    <div>
                                        <span className="td-info-name-t2">L</span>
                                        <span align="center" className="span-info-value-t2">{newuser.i_opL}</span>
                                    </div>
                                    <span className='iop-info'>I.OP</span>
                                    </td>
                                </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className="div-icon-insid">
            <BorderColorIcon onClick={handels}  className="edit-icon" />  
            <DeleteIcon onClick={() => deleteTask(newuser.id)} className="delet-icon"/>  
            </div>
        </div>
        {update && <UpdateTheAdition firbas='items' idr={newuser}/>}
    </div>
    
    ))}
</div>
        
    )
}