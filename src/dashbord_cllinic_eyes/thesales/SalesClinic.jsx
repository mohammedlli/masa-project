import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {collection,query,onSnapshot} from 'firebase/firestore';
import { db } from '../../firebase/Firebase';
import { useEffect, useState } from 'react';
export default function SalseClinic(){
    const [townewReviewrs, setTowNewReviewrs] = useState([]);
    useEffect(() => {
        const s = query(collection(db, 'items'));
        onSnapshot(s, (querySnapshot) => {
        console.log(querySnapshot);
        setTowNewReviewrs(
            querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }))
        );
        });
    }, []);
    let de=new Date();
    console.log(de.getMonth()+1);
    const ddate=townewReviewrs.filter((d)=>{
        if(de.getDate()===Number(d.daydate) && de.getMonth()+1===Number(d.monthdate) && de.getFullYear()=== Number(d.yeardate))
            return townewReviewrs;
    })
    let daysum=0;
    ddate.map((total)=>(
        daysum=daysum+Number(total.totalprice)
    ))
    const daycost= ddate.map(day=>(
        <TableRow >
        <TableCell style={{fontSize:"1.1em",fontFamily:"Cairo, sans-serif"}} align="center">{day.lenstype}</TableCell>
        <TableCell style={{fontSize:"1.1em",fontFamily:"Cairo, sans-serif"}} align="center">{day.frametype}</TableCell>
        <TableCell style={{fontSize:"1.1em",fontFamily:"Cairo, sans-serif"}}align="center">{day.totalprice}</TableCell>
        </TableRow>
    ))

    let mon1=0;
    const month1 = townewReviewrs.filter((d)=>{
        if(Number(d.yeardate)===de.getFullYear() && Number(d.monthdate)===1)
        return townewReviewrs
    })
    month1.map((sum)=>(
        mon1=mon1+Number(sum.totalprice)
        ))
        let mon2=0;
        const month2 = townewReviewrs.filter((d)=>{
            if(Number(d.yeardate)===de.getFullYear() && Number(d.monthdate)===2)
            return townewReviewrs
        })
        month2.map((sum)=>(
            mon2=mon2+Number(sum.totalprice)
            ))
            let mon3=0;
            const month3 = townewReviewrs.filter((d)=>{
                if(Number(d.yeardate)===de.getFullYear() && Number(d.monthdate)===3)
                return townewReviewrs
            })
            month3.map((sum)=>(
                mon3=mon3+Number(sum.totalprice)
                ))
                let mon4=0;
                const month4 = townewReviewrs.filter((d)=>{
                    if(Number(d.yeardate)===de.getFullYear() && Number(d.monthdate)===4)
                    return townewReviewrs
                })
                month4.map((sum)=>(
                    mon4=mon4+Number(sum.totalprice)
                    ))
                    let mon5=0;
                    const month5 = townewReviewrs.filter((d)=>{
                        if(Number(d.yeardate)===de.getFullYear() && Number(d.monthdate)===5)
                        return townewReviewrs
                    })
                    month5.map((sum)=>(
                        mon5=mon5+Number(sum.totalprice)
                        ))
                        let mon6=0;
                        const month6 = townewReviewrs.filter((d)=>{
                            if(Number(d.yeardate)===de.getFullYear() && Number(d.monthdate)===6)
                            return townewReviewrs
                        })
                        month6.map((sum)=>(
                            mon6=mon6+Number(sum.totalprice)
                            ))
                            let mon7=0;
                            const month7 = townewReviewrs.filter((d)=>{
                                if(Number(d.yeardate)===de.getFullYear() && Number(d.monthdate)===7)
                                return townewReviewrs
                            })
                            month7.map((sum)=>(
                                mon7=mon7+Number(sum.totalprice)
                                ))
                                let mon8=0;
                                const month8 = townewReviewrs.filter((d)=>{
                                    if(Number(d.yeardate)===de.getFullYear() && Number(d.monthdate)===8)
                                    return townewReviewrs
                                })
                                month8.map((sum)=>(
                                    mon8=mon8+Number(sum.totalprice)
                                    ))
                                    let mon9=0;
                                    const month9 = townewReviewrs.filter((d)=>{
                                        if(Number(d.yeardate)===de.getFullYear() && Number(d.monthdate)===9)
                                        return townewReviewrs
                                    })
                                    month9.map((sum)=>(
                                        mon9=mon9+Number(sum.totalprice)
                                        ))
                                        let mon10=0;
                                        const month10 = townewReviewrs.filter((d)=>{
                                            if(Number(d.yeardate)===de.getFullYear() && Number(d.monthdate)===10)
                                            return townewReviewrs
                                        })
                                        month10.map((sum)=>(
                                            mon10=mon10+Number(sum.totalprice)
                                            ))
                                            let mon11=0;
                                            const month11 = townewReviewrs.filter((d)=>{
                                                if(Number(d.yeardate)===de.getFullYear() && Number(d.monthdate)===11)
                                                return townewReviewrs
                                            })
                                            month11.map((sum)=>(
                                                mon11=mon11+Number(sum.totalprice)
                                                ))
                                                let mon12=0;
                                                const month12 = townewReviewrs.filter((d)=>{
                                                    if(Number(d.yeardate)===de.getFullYear() && Number(d.monthdate)===12)
                                                    return townewReviewrs
                                                })
                                                month12.map((sum)=>(
                                                    mon12=mon12+Number(sum.totalprice)
                                                    ))

        const monthPrice = [mon1,mon2,mon3,mon4,mon5,mon6,mon7,mon8,mon9,mon10,mon11,mon12];
        const months = monthPrice.map((month,index)=>(
            <TableRow >
            <TableCell  style={{fontSize:"1.1em",fontFamily:"Cairo, sans-serif"}} align="center">{index+1}</TableCell>
            <TableCell style={{fontSize:"1.1em",fontFamily:"Cairo, sans-serif"}} align="center">{month}</TableCell>
            </TableRow>
        ))

        let monthSum=0;
        monthPrice.map((total)=>(
        monthSum=monthSum+Number(total)
    ))
    return<>
    
<div >

<TableContainer style={{borderRadius:"0px 5px"}} component={Paper}>
        <Table  sx={{  mainWidth: 650 }} size="small"  aria-label="a dense table">
            <TableHead>
            <TableRow sx={{backgroundColor:"#212A3E"}} >
                        <TableCell colSpan={3} align="center"  style={{fontSize:"medium" ,fontWeight:"bold",color:"#b1bccf",fontFamily:"Cairo, sans-serif"}}>اليوم</TableCell> 
                </TableRow>
                <TableRow  style={{backgroundColor:"#212A3E"}} >
                        <TableCell align="center"  style={{fontSize:"medium" ,fontWeight:"bold",color:"#b1bccf",fontFamily:"Cairo, sans-serif"}}>العدسة</TableCell> 
                        <TableCell align="center"  style={{fontSize:"medium" ,fontWeight:"bold",color:"#b1bccf",fontFamily:"Cairo, sans-serif"}}>الاطار</TableCell> 
                        <TableCell align="center"  style={{fontSize:"medium" ,fontWeight:"bold",color:"#b1bccf",fontFamily:"Cairo, sans-serif"}}>المبلغ</TableCell>
                </TableRow>
            </TableHead>
            {daycost}
            <TableRow style={{backgroundColor:"#B5B7BB"}} >
            <TableCell style={{fontSize:"1em",fontFamily:"Cairo, sans-serif"}} align="center">المبلغ الكلي لليوم</TableCell>
                <TableCell colSpan={2} style={{fontSize:"1.1em",fontFamily:"Cairo, sans-serif"}} align="center">{daysum}</TableCell>
                </TableRow>
            <TableBody>
            </TableBody>
            
        </Table>
    </TableContainer>
    {/* month cost */}
    <TableContainer style={{borderRadius:"0px 5px",marginTop:"50px",marginBottom:"50px"}} component={Paper}>
<Table  sx={{  mainWidth: 650 }} size="small"  aria-label="a dense table">
    <TableHead>
        <TableRow  style={{backgroundColor:"#212A3E"}} >
                <TableCell colSpan={2} align="center"  style={{fontSize:"medium" ,fontWeight:"bold",color:"#b1bccf",fontFamily:"Cairo, sans-serif"}}>الشهر</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {months}
        <TableRow style={{backgroundColor:"#B5B7BB"}} >
            <TableCell style={{fontSize:"1em",fontFamily:"Cairo, sans-serif"}} align="center">المبلغ الكلي السنوي</TableCell>
                <TableCell colSpan={2} style={{fontSize:"1.1em",fontFamily:"Cairo, sans-serif"}} align="center">{monthSum}</TableCell>
                </TableRow>
    </TableBody>
    
</Table>
</TableContainer> 
    </div>
    </>
}
