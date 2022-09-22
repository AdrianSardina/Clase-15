import {BrowserRouter,Routes,Route, Link, Switch} from 'react-router-dom'
import Juego from './component/Juego'

export default function Game()

{
    return(
        <>
       
        <BrowserRouter>
        <h1>hola</h1>
        <nav>
            <ul>
                <li>    <Link to="/">Home</Link>       </li>
                <li>    <Link to="about">About</Link>       </li>
                <li>    <Link to="tablero">Tablero</Link>   </li>
                
            </ul>
        </nav>
            <Routes>
            <Route path="/" element={<Juego/>}/>
            
            
            <Route path="about" element={<About/>}/>   
            
            
            <Route path="tablero" element={<Tablero/>}/>   
            
           
            <Route path="*" element={<Error/>}/>   
            </Routes>

            <footer> pie de pagina</footer>
        </BrowserRouter>
        </>
        
    )
}

function About()
{
    return(
        <>
        <h1>About page</h1>
        </>
    )
}
function Tablero()
{
    return(
        <>
        <h1>Tablero page</h1>
        </>
    )
}
function Error()
{
    return(
        <>
        <h1>Error page</h1>
        </>
    )
}