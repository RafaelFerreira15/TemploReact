import React from "react";
import './Viagens.css';
import Taxa from './data/taxa.png'

const Viagens = () => {
    const Taxa1 = Taxa;
    return ( 
        <div className="Viagens">
            <br /><br /><br /><br />
            <div className="CaixaP2">
                <div className="SubcaixaVs" id="caixa1vs">
                    <h1 id="tt1vs1">Melhor Taxa de Satisfação</h1>
                    <img src={ Taxa1 } alt="" id="img1vs1" />
                </div>
                <div className="SubcaixaVs" id="caixa2vs">
                    <h1 id="tt1vs2">Experiência Inesquecível</h1>

                    <p id="txt1vs2">Imagine-se explorando as majestosas ruínas do Templo de Artemis, 
                                    uma das Sete Maravilhas do Mundo Antigo, ainda de pé em todo o seu esplendor. <br />
                                    A arquitetura imponente e os detalhes esculpidos em mármore contarão histórias de um passado glorioso,
                                    enquanto você se perde na grandiosidade desse ícone da antiga Grécia. <br /> Viajar para lá é mergulhar na história e
                                    na cultura que moldaram o mundo. <br /> Não perca a chance de vivenciar essa experiência única!
                    </p>
                </div>

                <div className="SubcaixaVs" id="caixa3vs">
                    <h1 id="tt1vs3">Valores</h1>
                    <p id="txt1vs3">Para visitar o Templo de Ártemis em Éfeso, Turquia, é essencial considerar os custos envolvidos. <br /> 
                                    Os principais gastos incluem passagens aéreas (R$ 4.000,00 a R$ 8.000,00), hospedagem (R$ 1.500,00 a R$ 3.500,00 
                                    para 5 noites em hotel 3 estrelas), alimentação (R$ 100,00 a R$ 200,00 por dia), transporte local 
                                    (R$ 300,00 a R$ 500,00) e entrada no sítio arqueológico (R$ 50,00 a R$ 100,00 por pessoa). <br />
                                    Em resumo, uma viagem de uma semana pode custar entre R$ 6.950,00 e R$ 15.100,00 por pessoa. 
                                    Planejamento antecipado é crucial para garantir uma experiência satisfatória dentro do orçamento.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Viagens;