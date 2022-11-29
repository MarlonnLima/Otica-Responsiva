import ImgVoltarTopo from "../../assets/imagens/voltartopo.png"
import {Link} from "react-scroll"
import './style.css'

 export default function VoltarTopo(){
 return(
    <div>
        <Link to ="topo" spy ={true} smooth ={true} duration = {500}><img className ="voltartopo" src = {ImgVoltarTopo}></img></Link>
    </div>
 )
}

