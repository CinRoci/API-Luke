
const DetalleDroide =(props)=>{
    

    return(
        <>
        <div>
            <h1>{props.detalleDroide.name}</h1>
            <p>Height:{props.detalleDroide.height}</p>
            <p>Hair Color:{props.detalleDroide.hair_color}</p> 
            <p>Birth Year:{props.detalleDroide.birth_year}</p> 
            <p>Homeworld:{props.detalleDroide.homeworld}</p>

        </div>

        </>
    );
}
export default DetalleDroide;