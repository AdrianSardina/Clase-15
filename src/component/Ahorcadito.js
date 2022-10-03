import { Button } from "react-bootstrap";
import React, { useState , useEffect } from "react";
export default function Ahorcadito ()
{
    const listaPalabras =["AHORCADITO","AHORCADITO","AHORCADITO","AHORCADITO"];
    const [letraElegida,setLetraElegida] = useState ('_'); //Guarda la letra seleccionada al jugar 
    const [palabraElegida,setPalabraElegida] = useState (''); //Guarda la palabra elegida de la lista para jugar
    const [palabraMostrada,setPalabraMostrada] = useState ([]); // Para Mostrar en pantalla
    function Jugar()
    {
       
        setPalabraElegida(listaPalabras[0]);
        
        
        
    }
    function RevisarLetra()
    {
        
       
    }
    useEffect(() => {setPalabraMostrada(Array(palabraElegida.length).fill("-"))}, [palabraElegida]);
    useEffect(() => {RevisarLetra;}, [letraElegida]); 
    
    return(
        <>
        <h1>ahorcadito</h1>
        
        <Button onClick={Jugar}>Jugar</Button>
        
        <p>{palabraMostrada}</p>
        </>
    )
}