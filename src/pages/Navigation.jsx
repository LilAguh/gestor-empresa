import User from "../assets/user.jpeg"
import Edit from "../assets/editar.png"
import Inicio from "../assets/menu.png"
import Clientes from "../assets/cliente.png"
import StockIcon from "../assets/seguro.png"
import Productos from "../assets/anadir.png"
import Ventas from "../assets/carro.png"
import {Route, Routes, Navigate, NavLink} from "react-router-dom"
import "./Navigation.css"
import Home from "../routes/Home"
import Client from "../routes/Client"
import Products from "../routes/Products"
import Sells from "../routes/Sells"
import Stock from "../routes/Stock"

export default function Navigation() {
    return(
        <div className="Navigation">
            <div className="Menu">
                <h1 className="Menu-Title">Gestor</h1>
                <div className="Menu-User">
                    <img src={User} alt="" className="User-Img"/>
                    <p className="User-Name">Aberturas Sagitario</p>
                    <img src={Edit} alt="" className="User-Edit"/>
                </div>
                <div className="Menu-Admin">
                        <NavLink className="Menu-Admin_button" to="/"><img src={Inicio} alt="" className="Menu-Admin_logo"/> Inicio</NavLink>
                        <NavLink className="Menu-Admin_button" to="/Client"><img src={Clientes} alt="" className="Menu-Admin_logo"/> Clientes</NavLink>
                        <NavLink className="Menu-Admin_button" to="/Stock"><img src={StockIcon} alt="" className="Menu-Admin_logo"/> Stock</NavLink>
                        <NavLink className="Menu-Admin_button" to="/Products"><img src={Productos} alt="" className="Menu-Admin_logo"/> Productos</NavLink>
                        <NavLink className="Menu-Admin_button" to="/Sells"><img src={Ventas} alt="" className="Menu-Admin_logo"/> Ventas</NavLink>
                </div>
            </div>
            <div className="Page">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Client" element={<Client/>} />
                <Route path="/Products" element={<Products/>} />
                <Route path="/Sells" element={<Sells/>} />
                <Route path="/Stock" element={<Stock/>} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
            </div>
        </div>
        )
}