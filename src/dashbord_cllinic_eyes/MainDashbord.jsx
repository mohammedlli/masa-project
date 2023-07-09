import { Outlet } from "react-router-dom";
import Sidbare from "./layoutt/Sidbare";
import Header from "./layoutt/Header";
import Foter from "./layoutt/Foter";
export default function MainDashbord(){

    return(
        <div className="flex" style={{width:"100%"}}>
        <Sidbare/>
        <div className="main-insiddashbord" >
        <div className="insiddashbord" >
        <Header/>
        <Outlet/>
        <Foter/>    
        </div>
        </div>
        </div>
    )

}