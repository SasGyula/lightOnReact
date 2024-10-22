import { useContext } from "react";
import { KattContext } from "../context/KattContext.js";

export default function Lampa(props){
    const {katt} = useContext(KattContext)
    function kattintas(){
        katt(props.index);
    }
    return(
        <>
        <div className={`lampa ${props.jel?"fel":"le"}`} onClick={()=>kattintas()}></div>
        </>
    )
}