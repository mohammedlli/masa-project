import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import { db } from '../firebase/Firebase';
import {collection,addDoc} from 'firebase/firestore';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
    style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
    },
    },
};

const Menu = {
    PaperProps: {
    style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
    },
    },
};

const names = [
'M.C شفرة',
'B.C شفرة',
'M.C',
'B.C',
'PH.MC',
'PH.BC',
'Biofca M.C',
'Biofca B.C',
'Biofca PH.MC',
'Biofca PH.BC',
'Progressive M.C',
'Progressive B.C',
'Progressive PH.MC',
'Progressive PH.BC',
];



const frame = [
    'بلاستك عادي رجالي',
    'بلاستك عادي نسائي',
    'بلاستك عادي اطفال',
    'بلاستك ماركه رجالي',
    'بلاستك ماركة نسائي',
    'بلاستك ماركة اطفال',   
    'معدن عادي رجالي',
    'معدن عادي نسائي',
    'معدن ماركة رجالي',
    'معدن ماركة نسائي',
    ];

function getStyles(name, lenstype, theme) {
return {
    fontWeight:
    lenstype.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
};
}

function gotStyles(frames, frametype, the) {
    return {
        fontWeight:
        frametype.indexOf(frames) === -1
            ? the.typography.fontWeightRegular
            : the.typography.fontWeightMedium,
    };
}

    export default function SecondAdditionForm({fireBase,usernumberphon}){
        const [date,setData]= useState('');
        const [daydate,setdayData]= useState('');
        const [monthdate,setmonthData]= useState('');
        const [yeardate,setyearData]= useState('');
        const [frameprice,setFrameprice]= useState('');
        const [frametype,setFrametype]= React.useState([]);
        const [i_opR,setI_opR]= useState('');
        const [i_opL,setI_opL]= useState('');
        const [ip_d,setIp_d]= useState('');
        const [left,setLeft]= useState('');
        const [lensprice,setLensprice]= useState('');
        
        const [lenstype, setlenstype] = React.useState([]);
        const [name,setName]= useState('');
        const [numberphone,setNumberphone]= useState(usernumberphon);
        const [paidprice,setPaidprice]= useState('');

        const [l_e_axis,setL_e_axis]= useState('');
        const [l_e_cyl,setL_e_cyl]= useState(0);
        const [l_e_sph,setL_e_sph]= useState(0);

        const [r_e_axis,setR_e_axis]= useState(0);
        const [r_e_cyl,setR_e_cyl]= useState(0);
        const [r_e_sph,setR_e_sph]= useState(0);

        const [reight,setReight]= useState('');
        const [restprice,setRestprice]= useState('');
        const [totalprice,setTotalprice]= useState('');
        const [enterance,setEnterance]= useState('');
        const [note,setNote]= useState('');


        const inputref = useRef();
            
        useEffect(()=>{
            inputref.current.focus();
        },[])
        const handleSubmit = async (e) => {
            e.preventDefault();
            console.log(e);
            // setRun(prev=>prev+1);
            try {
            await addDoc(collection(db, 'items'), {
                date,
                daydate,
                monthdate, 
                yeardate,
                frameprice,
                frametype,
                i_opR,
                i_opL,
                ip_d,
                l_e_axis,
                l_e_cyl,
                l_e_sph,
                left,
                lensprice,
                lenstype,
                name,
                numberphone,
                paidprice,
                r_e_axis,
                r_e_cyl,
                r_e_sph,
                reight,
                restprice,
                totalprice,
                enterance,
                note,
            });
        } catch (err) {
            alert(err);
            }
        };
        const theme = useTheme();
        const the =useTheme();

            const handleChangelens = (event) => {
            const {
                target: { value },
            } = event;
            setlenstype(
                // On autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value,
            );
            };

            const handleChangeframe = (event) => {
                const {
                    target: { value },
                } = event;
                setFrametype(
                    // On autofill we get a stringified value.
                    typeof value === 'string' ? value.split(',') : value,
                );
                };
            
    return<>
    <div className='contenar1'>
    
    <div className="contenar">
        <form onSubmit={handleSubmit} className="form-Add">
            
            <div className='first-line-add-date'>
                <div>
                    <span className='span-add'>اليوم</span>
                    <input 
                    ref={inputref}
                    value={daydate}
                    onChange={(e)=>setdayData(e.target.value)}
                    type="text" 
                    className="input-add-date" />
                </div>
                <div>
                    <span className='span-add'>الشهر</span>
                    <input 
                    value={monthdate}
                    onChange={(e)=>setmonthData(e.target.value)}
                    type="text" 
                    className="input-add-date" />
                </div>
                <div>
                    <span className='span-add'>السنة</span>
                    <input  
                    value={yeardate}
                    onChange={(e)=>setyearData(e.target.value)}
                    type='text'
                    className="input-add-date" />
                </div>
            </div>

            <div className='secend-line-add'>
                <div className='inside-secend-line-add'>
                        <span>VA</span>
                    <div>
                        <input 
                        value={reight}
                        onChange={(e)=>setReight(e.target.value)}
                        type="number" 
                        className="input-add-mine" />
                        <span className='span-add-mine'>Rigth</span>
                    </div>
                    
                    <div>
                        <input 
                        value={left}
                        onChange={(e)=>setLeft(e.target.value)}
                        type="number" 
                        className="input-add-mine" />
                        <span className='span-add-mine'>Left</span>
                    </div>
                    
                    <div>
                        <input
                        value={ip_d}
                        onChange={(e)=>setIp_d(e.target.value)}
                        type="number" 
                        className="input-add-mine" />
                        <span className='span-add-mine'>IP.D</span>
                    </div>
                    
                    <table>
                        <tr>
                            <td className='span-add-mine-vatable'>
                                <div>
                                    <input 
                                    value={i_opR}
                                    onChange={(e)=>setI_opR(e.target.value)}
                                    className="input-add-mine"
                                    type='number'/>
                                    <span className='span-add-mine'>R</span>
                                </div>
                            </td>
                            <td className='span-add-mine-vatable'>
                                <div>
                                    <input 
                                    value={i_opL}
                                    onChange={(e)=>setI_opL(e.target.value)}
                                    className="input-add-mine"
                                    type='number'/>
                                    <span className='span-add-mine'>L</span>
                                </div>
                            </td>
                            <td className='span-add-mine-vatable'>IO.P</td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div className='third-line-add'>
                <table className='table-l-r'>
                    <tr > 
                        <td className='td-Line3' align='center'style={{fontWeight:"600",borderRadius:"0px 20px 0px 0px"}} colSpan={3}>.R. E</td>
                        <td className='td-Line3' align='center'style={{fontWeight:"600"}} colSpan={3}>.L. E</td>
                    </tr>
            
                <tr style={{backgroundColor:"#9ba4b558"}}>
                        <td className='td-Line3-1-1' align='center'  colSpan={3}>
                        <td>
                                <input 
                                value={r_e_axis}
                                onChange={(e)=>setR_e_axis(e.target.value)} 
                                className='input-add-mine'  
                                type="number" />
                                <span className='span-add-mine'>AXIS</span>
                                </td>

                            <td>
                                <input 
                                value={r_e_cyl}
                                onChange={(e)=>setR_e_cyl(e.target.value)}
                                className='input-add-mine'
                                type="number" />
                                <span className='span-add-mine'>CYL.</span>
                            </td>

                            
                                <td>
                                <input 
                                value={r_e_sph}
                                onChange={(e)=>setR_e_sph(e.target.value)}
                                className='input-add-mine'  
                                type="number" />
                                <span className='span-add-mine'>APH.</span>
                            </td>
                        </td>

                        
                        <td className='td-Line3-1-1' align='center'  style={{borderRadius:"0px 0px 0px 20px"}} colSpan={3}>    

                            <td>
                                <input 
                                value={l_e_axis}
                                onChange={(e)=>setL_e_axis(e.target.value)}
                                className='input-add-mine'
                                type="number" />
                                <span className='span-add-mine'>AXIS</span>
                            </td>
                            <td>
                                <input 
                                value={l_e_cyl}
                                onChange={(e)=>setL_e_cyl(e.target.value)}
                                className='input-add-mine'
                                type="number" />
                                <span className='span-add-mine'>CYL.</span>
                            </td>

                            <td>
                                <input 
                                value={l_e_sph}
                                onChange={(e)=>setL_e_sph(e.target.value)}
                                className='input-add-mine'  
                                type="number" />
                                <span className='span-add-mine'>SPH.</span>
                            </td>
                        </td>
                </tr>
                </table>
            </div>
                
            <div className='fourth-line-add'>
            <FormControl>
        <Select
            sx={{height:30,width:150,color:"#212A3E",border:"1px solid #AFAFAF",
            fontFamily:"Cairo, sans-serif",textDecoration:"none",
            boxShadow:"0px 0px 5px -3.5px black",borderRadius:"2px 10px"
        }}
            multiple
            displayEmpty
            value={lenstype}
            onChange={handleChangelens}
            input={<OutlinedInput />}
            renderValue={(selected) => {
                if (selected.length === 0) {
                return <em>نوع العدسة</em>;
                }

                return selected.join(', ');
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
            >
            <MenuItem disabled value=""> 
                <em>نوع العدسة</em>
                </MenuItem>
            {names.map((name) => (
                <MenuItem
                key={name}
                value={name}
                style={getStyles(name, lenstype, theme)}
                >
                {name}
                </MenuItem>
            ))}
            </Select>
        </FormControl>
        <div><span className='span-add'>السعر</span>
            <input 
            value={lensprice}
            onChange={(e)=>{setLensprice(e.target.value)}}
            type="text" 
            className="input-add" /></div>
            <FormControl>
        <Select  

            sx={{height:30,width:150,color:"#212A3E",border:"1px solid #AFAFAF",
            fontFamily:"Cairo, sans-serif",textDecoration:"none",
            boxShadow:"0px 0px 5px -3.5px black",borderRadius:"2px 10px"
        }}
            multiple
            displayEmpty
            value={frametype}
            onChange={handleChangeframe}
            input={<OutlinedInput />}
            renderValue={(selected) => {
                if (selected.length === 0) {
                return <em>نوع الاطار</em>;
                }

                return selected.join(', ');
            }}
            Menu={Menu}
            inputProps={{ 'aria-label': 'Without label' }}
            >
            <MenuItem disabled value=""> 
                <em>نوع الاطار</em>
            </MenuItem> 
            {frame.map((frames) => (
                <MenuItem
                key={frames}
                value={frames}
                style={gotStyles(frames, frametype, the)}
                >
                {frames}
                </MenuItem>
            ))}
            </Select>
        </FormControl>
            <div><span className='span-add'>السعر</span>
            <input 
            value={frameprice}
            onChange={(e)=>{setFrameprice(e.target.value)}}
            type="text" 
            className="input-add" /></div>
            </div>

            <div style={{marginTop:"30px"}} className='first-line-add'>
                <div>
                    <span className='span-add'>السعر الكلي</span>
                    <input 
                    value={totalprice}
                    onChange={(e)=>{setTotalprice(e.target.value)}}
                    type="text" 
                    className="input-add" />
                </div>
                <div>
                    <span className='span-add'>الواصل</span>
                    <input 
                    value={paidprice}
                    onChange={(e)=>{setPaidprice(e.target.value)}}
                    type="text" 
                    className="input-add" />
                </div>
                <div>
                    <span className='span-add'>الباقي</span>
                    <input 
                    value={restprice}
                    onChange={(e)=>{setRestprice(e.target.value)}}
                    type="text" 
                    className="input-add" />
                </div>
            </div>

            <div style={{ display:"flex",justifyContent:"space-around", width:'60%'}}>
            <div>
                    <span className='span-add'>اضافة ملاحضة</span>
                    <input 
                    value={note}
                    onChange={(e)=>{setNote(e.target.value)}}
                    type="text" 
                    className="input-add"/>
                </div>
            <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">المدخل</InputLabel>
            <Select
            sx={{height:40,color:"#212A3E",border:"1px solid #AFAFAF",
            fontFamily:"Cairo, sans-serif",textDecoration:"none",
            boxShadow:"0px 0px 5px -3.5px black",borderRadius:"20px 0px 0px 5px "}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={enterance}
            label="Age"
            onChange={(e)=>{setEnterance(e.target.value)}}
            >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            </Select>
        </FormControl>
        </Box>
        
                </div>
            
            <div className='button-form'>
                <button className='button-form-insid'>اضافة وطباعة</button>
            </div>
        </form>
    </div>
    </div>
    </>
}