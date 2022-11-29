import logo from "../../assets/imagens/logo.png";
import './style.css';
import {Link} from 'react-scroll'


export default function Topo(){
    return(
        <header id ="topo">
            <div className="limitar-secao container flex">
                <img className = "logo" src={logo} />
                <nav>
                    <li><Link to ="produtos" spy={true} smooth={true} duration ={500}>Produtos</Link></li>
                    <li><Link to ="sobre" spy={true} smooth={true} duration ={500}>Sobre</Link></li>
                    <li><Link to ="contato"spy={true} smooth={true} duration ={500}>Contato</Link></li>
                </nav>
            </div>
        </header>
        
    )
}