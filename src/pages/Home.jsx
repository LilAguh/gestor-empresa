import User from "../assets/user.jpeg"
import Edit from "../assets/editar.png"
import Inicio from "../assets/menu.png"
import Clientes from "../assets/cliente.png"
import Stock from "../assets/seguro.png"
import Productos from "../assets/anadir.png"
import Ventas from "../assets/carro.png"
import "./Home.css"

export default function Home() {
    return(
        <div className="Home">
            <div className="Menu">
                <h1 className="Menu-Title">Gestor</h1>
                <div className="Menu-User">
                    <img src={User} alt="" className="User-Img"/>
                    <p className="User-Name">Aberturas Sagitario</p>
                    <img src={Edit} alt="" className="User-Edit"/>
                </div>
                <div className="Menu-Admin">
                    <button className="Menu-Admin_button"><img src={Inicio} alt="" className="Menu-Admin_logo"/> Inicio</button>
                    <button className="Menu-Admin_button"><img src={Clientes} alt="" className="Menu-Admin_logo"/> Clientes</button>
                    <button className="Menu-Admin_button"><img src={Stock} alt="" className="Menu-Admin_logo"/> Stock</button>
                    <button className="Menu-Admin_button"><img src={Productos} alt="" className="Menu-Admin_logo"/> Productos</button>
                    <button className="Menu-Admin_button"><img src={Ventas} alt="" className="Menu-Admin_logo"/> Ventas</button>
                </div>
            </div>
            <div className="Page"></div>
        </div>
        )
}