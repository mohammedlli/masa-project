import { Outlet } from "react-router-dom";
import SideBar from "./lay/SideBar";
import Header from "./lay/Header";
import Foter from "./lay/Foter";
export default function MainDashbord(){

    return(
        <div className="flex" style={{width:"100%"}}>
        <SideBar/>
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