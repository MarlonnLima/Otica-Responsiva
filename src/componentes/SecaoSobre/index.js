import Atendimento from "../../assets/imagens/atendimento.jpg"
import Loja from "../../assets/imagens/loja.jpg"
import './style.css'
export default function SecaoSobre(){
    return(
        <section id ="sobre" className="secao-sobre">
            <div className="limitar-secao">
              <h2>Quem somos nós</h2>
              <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>  

              <div className ="box-cards">
                <img src ={Loja}/>
                <div className="cards-texto">
                    <h2>Nossas Filiais</h2>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
                <div className="cards-texto">
                    <h2>Atendimento flexível</h2>
                    <p>Nossa equipe possui treinamento para te atender</p>
                </div>
                <img src = {Atendimento}/>
              </div>
            </div>
        </section>
    )
}