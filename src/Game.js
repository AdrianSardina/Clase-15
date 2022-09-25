import {BrowserRouter,Routes,Route, Link, Switch} from 'react-router-dom'
import Juego from './component/Juego';
import Home from './component/Home';
import About from './component/About';
import Nav from 'react-bootstrap/Nav';
export default function Game()

{
    return(
        <>
       
        <BrowserRouter>
       
        <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
        <li>    <Link to="/">Home</Link></li> 
        
        </Nav.Item>
        <Nav.Item>
        <li>    <Link to="about">About</Link>       </li>
        </Nav.Item>
        <Nav.Item>
        <li>    <Link to="tablero">Tablero</Link>   </li>
        </Nav.Item>
       </Nav>
        
            <Routes>
            <Route path="/" element={<Home style={{ backgroundColor:"#D4CDCD" }}></Home>}/>
            
            
            <Route path="about" element={<About/>}/>   
            
            
            <Route path="tablero" element={<Juego/>}/>   
            
           
            <Route path="*" element={<Error/>}/>   
            </Routes>

            
        </BrowserRouter>
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