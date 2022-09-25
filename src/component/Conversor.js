import { useState } from "react"

function Conversor({valor})
{
    const[pesos,setPesos] = useState ();
    const[monto,setMonto] = useState(0);

    const Convertir = () =>{
        setMonto(pesos/272);
    }
    return(
        <>
        <h1> Convertir de pesos a dolares</h1>
        <h2>Monto en pesos </h2>
        <input type="text" onChange={e=> setPesos(e.target.value)}/>
        <button onClick={Convertir}>Convertir a dolares</button>
        <p>Los {pesos} equivale a {monto.toFixed(2)}</p>
        </>
    )
}
export default Conversor;