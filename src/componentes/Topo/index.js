import logo from "../../assets/imagens/logo.png";
import './style.css';

export default function Topo(){
    return(
        <header>
            <div className="limitar-secao container flex">
                <img className = "logo" src={logo} />
                <nav>
                    <a href ="produtos">Produtos</a>
                    <a href ="sobre">Sobre</a>
                    <a href ="contato">Contato</a>
                </nav>
            </div>
        </header>
    )
}