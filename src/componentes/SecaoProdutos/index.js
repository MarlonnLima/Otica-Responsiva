import Oculos01 from "../../assets/imagens/oculos01.png"
import Oculos02 from "../../assets/imagens/oculos02.png"
import Oculos03 from "../../assets/imagens/oculos03.png"
import Oculos04 from "../../assets/imagens/oculos04.png"
import "./style.css"


export default function SecaoProdutos(){
    return(
        <section id ="produtos" className="secao-produtos">
            <div className="limitar-secao">
                <h2>Nossos produtos</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                <div className="container-cards">
                    <div className="card">
                        <h3>Óculos de grau</h3>
                        <img src = {Oculos01}/>
                        <p>R$ 500,00</p>
                    </div>
                    <div className="card">
                        <h3>Óculos transition</h3>
                        <img src = {Oculos02}/>
                        <p>R$ 750,00</p>
                    </div>
                    <div className="card">
                        <h3>Óculos de sol</h3>
                        <img src = {Oculos03}/>
                        <p>R$ 700,00</p>
                    </div>
                    <div className="card">
                        <h3>Óculos infantil</h3>
                        <img src = {Oculos04}/>
                        <p>R$ 500,00</p>
                    </div>

                    <p>Todos os nossos produtos incluem:</p>
                    <ul className ="lista-produtos">
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
               
                </div>
            </div>
        </section>
    
    )
}