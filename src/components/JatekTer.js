import { useContext } from "react";
import Lampa from "./Lampa.js"
import { KattContext } from "../context/KattContext.js";

export default function JatekTer(props){
    const {katt} = useContext(KattContext)
        function kattintas(adat){
        props.katt(adat);
    }
    return(
        <>
        {
            props.lista.map((elem,index)=>{
                    return <Lampa jel={elem} key={index} index={index} fv={kattintas}/>   
            })
        }
        </>
    )
}