import { useEffect, useState } from "react";
import axios from "axios";

const Droides =()=>{
    // crear un objeto con los nombres delos droides 
      const [listadeDroides,setListadeDroides ]= useState([]);
      
    
    useEffect(() => {
        const cargarDroides= () =>{
            const URL =`https://swapi.dev/api/films/`;

            axios.get(URL)
            .then((respuesta)=>{
              console.log(respuesta); 
              setListadeDroides(respuesta.data.results);
            })
            .catch ((error)=>{
             console.log("Ocurrio un error",error);
           });
          }
        cargarDroides();
       
    }, []);
    
    
      return(
        <>
        <div className="contenedor-droides">
        <label htmlFor="droides">Search for:</label>
        <select name="select" className="seleccione">
          
              <option >People</option>
              <option >Films</option>
              <option >Starships</option> 
              <option >Vehicles</option> 
              <option >Species</option> 
          
        </select>
        </div>
        
        </>
    );
}
export default Droides;