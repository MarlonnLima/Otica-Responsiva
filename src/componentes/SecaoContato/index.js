import Fb from "../../assets/imagens/fb.png"
import Ig from "../../assets/imagens/ig.png"
import Telefone from "../../assets/imagens/telefone.png"
import Tt from "../../assets/imagens/tt.png"
import Local from "../../assets/imagens/local.png"
import Email from "../../assets/imagens/email.png"
import './style.css'


export default function SecaoContato(){
    return(
        <section className="secao-contato">
            <div className="limitar-secao">
                <h2>Fale conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

                <div className="container-contatos">
                    <div className="contatos">
                        <h3>Contato</h3>
                        <div className="centraliza">
                            <img src = {Local} />
                            <p>Nova Iguaçu, RJ</p>
                        </div>
                        <div className="centraliza">
                            <img src = {Telefone} />
                            <p>(21) 99999-9999</p>
                        </div>
                        <div className="centraliza">
                            <img src = {Email} />
                            <p>contato@oticavida.com</p>
                        </div>
                    </div>
                    <div className="contatos">
                        <h3>Nossas Redes Sociais</h3>
                        <div className="centraliza">
                            <img src = {Fb} />
                            <p>/OticaVida</p>
                        </div>
                        <div className="centraliza">
                            <img src = {Ig} />
                            <p>@oticavidarj</p>
                        </div>
                        <div className="centraliza">
                            <img src = {Tt} />
                            <p>@oticavidarj</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}