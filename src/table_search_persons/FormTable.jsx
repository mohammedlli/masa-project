import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import React, { useEffect, useState } from "react";
import {collection,query,onSnapshot} from 'firebase/firestore';
import { db } from '../firebase/Firebase';
import { LinearProgress } from '@mui/material';
import { Link } from 'react-router-dom';

export default function FormTable({SearchProps}){
    const [reviewers, setreviewers] = useState([]);
    const[loading,setLoading] = useState(false);
    const search =SearchProps;

    useEffect(() => {
        setLoading(true);
        const q = query(collection(db, 'newReviewers'));
        onSnapshot(q, (querySnapshot) => {
        console.log(querySnapshot);
        setreviewers(
            querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }))
        );
        setLoading(false);
        });
    }, []);
    const mainRev = reviewers.filter((user)=>
    user.name.toLowerCase().includes(search) || user.numberphone.toLowerCase().includes(search))
    const allRev =mainRev.map((user,index)=>(
        <TableRow   key={index} >
            <TableCell  align='center'>
                <Link to={`${user.numberphone}`} >
                    <MenuOpenIcon fontSize='medium' sx={{color:"#212A3E"}} className='linke-table'/>
                </Link>
            </TableCell>
            <TableCell sx={{fontSize:"1.1em",fontFamily:"Cairo, sans-serif"}} align="center">{index+1}</TableCell>
            <TableCell sx={{fontSize:"1.1em",fontFamily:"Cairo, sans-serif"}} align="center">{user.name}</TableCell>
            <TableCell sx={{fontSize:"1.1em",fontFamily:"Cairo, sans-serif"}}align="center">{user.numberphone}</TableCell>
            <TableCell sx={{fontSize:"1.1em",fontFamily:"Cairo, sans-serif"}}align="center">{user.date}</TableCell>
        </TableRow>
            ))
        

    return(
        <div className="MainTableRe">
        <div className='ContRe'> <div className='InsidContRe'> العدد الكلي للمراجعين  :      {reviewers.length}</div></div>
    <TableContainer sx={{borderRadius:"0px 5px"}} component={Paper}>
        <Table  size="small"  aria-label="a dense table">
            <TableHead>
                <TableRow  sx={{backgroundColor:"#212A3E"}} >
                        <TableCell align="center"  sx={{fontSize:"medium" ,fontWeight:"bold",color:"#b1bccf",fontFamily:"Cairo, sans-serif"}}>الاجرائات</TableCell> 
                        <TableCell align="center"  sx={{fontSize:"medium" ,fontWeight:"bold",color:"#b1bccf",fontFamily:"Cairo, sans-serif"}}>.N</TableCell> 
                        <TableCell align="center"  sx={{fontSize:"medium" ,fontWeight:"bold",color:"#b1bccf",fontFamily:"Cairo, sans-serif"}}>الاسم</TableCell>
                        <TableCell align="center"  sx={{fontSize:"medium" ,fontWeight:"bold",color:"#b1bccf",fontFamily:"Cairo, sans-serif"}}>رقم الهاتف</TableCell>
                        <TableCell align="center"  sx={{fontSize:"medium" ,fontWeight:"bold",color:"#b1bccf",fontFamily:"Cairo, sans-serif"}}>تاريخ المراجعة</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {allRev}
            </TableBody>
        </Table>
        {loading&&<div><LinearProgress/></div>}
    </TableContainer>
        </div>
    )
    }