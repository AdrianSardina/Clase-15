import { useState } from "react"
function Contador({numero})
{
const [valor,setValor]= useState(numero);

const contar = () =>{
    setValor(valor+1)
}
return(
    <>
    <h1>  aplicacion para contar.Valor inicial {numero}</h1>
    <h2>{valor}</h2>
    <button onClick={contar}>Contar</button>
    </>

);
}
export default Contador;