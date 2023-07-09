import { useEffect, useRef, useState } from "react";
import Forms from "./Forms";
import SearchIcon from '@mui/icons-material/Search';
export default function SearchPersonFromTable(){
    const [search, setSearch] = useState('');
    const inputref = useRef();
    useEffect(()=>{
        inputref.current.focus();
    },[])
    return(

        <div className="whith-search">
        <div className="Main-Search">
        <div className="bg-search">
            <div className="insid-search">
                <SearchIcon style={{fontSize:"30px" ,color:"#212A3E"}}/>
                <input 
                ref={inputref} 
                className="search" 
                placeholder="البحث" 
                value={search} onChange={event=>setSearch(event.target.value)}/>
            </div>
        </div>
        
        <Forms
        SearchProps={search}/>
        </div>
        </div>
        
    )
}