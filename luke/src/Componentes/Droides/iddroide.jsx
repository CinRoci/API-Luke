import { useEffect, useState} from "react";
import axios from "axios";

const IdDroides =(props)=>{
    const [detalleDeDroides,setDetalleDeDroides ]= useState({});
    useEffect(() => {
    const cargarDetalleDeDroides= async ()=>{
        const Url =`https://swapi.dev/api/films/1/`;
        try{
            const respuesta = axios.get (Url);
            setDetalleDeDroides(respuesta.data);
            console.log(respuesta);
        }
        catch(error){
            console.log("Ocurrio un error",error);
        } 
    } }, []);

    return(
        <>
        <div className="contenedor-id">
            <label htmlFor="id">Id</label>
            <input type="search" id="search" name="search" />
            <input type="submit" onClick={()=> cargarDetalleDeDroides ()}/>
            
        </div>

        </>
    );
}
export default IdDroides;