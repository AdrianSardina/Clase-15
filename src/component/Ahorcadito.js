import { Button } from "react-bootstrap";
import React, { useState , useEffect } from "react";
export default function Ahorcadito ()
{
    const listaPalabras =["AHORCADITO","AHORCADITO","AHORCADITO","AHORCADITO"];
    const [letraElegida,setLetraElegida] = useState (); //Guarda la letra seleccionada al jugar 
    const [palabraElegida,setPalabraElegida] = useState (''); //Guarda la palabra elegida de la lista para jugar
    let [palabraMostrada,setPalabraMostrada] = useState ([]); // Para Mostrar en pantalla
    function Jugar()
    {    
         
        setPalabraElegida(listaPalabras[0]); 
        
    }
    function RevisarLetra()
    {  
       if(typeof letraElegida ==="undefined")
       {
        console.log("letra elegida vacia")
       }else
       {
        if(palabraElegida.includes(letraElegida))
        {
            
            console.log("la letra si esta");    
        }else
        {
            console.log("la letra no esta ");            
        }
       }
   
    }
    useEffect(() => {setPalabraMostrada(Array(palabraElegida.length).fill("-"))}, [palabraElegida]);
    useEffect(() => {RevisarLetra();}, [letraElegida]); 
    
    return(
        <>
        <h1>ahorcadito</h1>
        
        <Button onClick={Jugar}>Jugar</Button>
        <Button onClick={() => setLetraElegida('A')}>A</Button>
        <Button onClick={() => setLetraElegida('B')}>B</Button>
        <Button onClick={() => setLetraElegida('C')}>C</Button>
        <Button onClick={() => setLetraElegida('D')}>D</Button>
        <Button onClick={() => setLetraElegida('E')}>E</Button>
        <p>{palabraMostrada}</p>
      
        </>
        
    )
    
   
}