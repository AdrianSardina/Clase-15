import React from "react"
import { Link } from "react-router-dom"
import { Button ,Col,Row} from "react-bootstrap"
export default function Home ()
{
    return(
       <>
       <Row className="justify-content-xl-center">
        <h1> Piedra, Papel o Tijera</h1>
        <img src="../img/Juego.png" alt=""/>    
        <Link to="/tablero"><Button >Jugar</Button></Link>
       </Row>
       
        
        </>
    )
    
}