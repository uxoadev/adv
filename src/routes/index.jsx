import {Route, Routes, BrowserRouter} from "react-router-dom"
import Home from "../pages/home"
import Sobre from "../pages/sobre"
import Artigos from "../pages/artigos"
import Area from "../pages/areas"
import Contatos from "../pages/contatos"
function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/areas" element={<Area/>}/>
        <Route path="/artigos" element={<Artigos/>}/>
        <Route path="/contatos" element={<Contatos/>}/>
        </Routes>
        
        </BrowserRouter>
    )
        
} export default Rotas