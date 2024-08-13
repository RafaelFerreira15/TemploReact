import React from "react";
import './Main.css';
import artemis from "./data/artemis1.png";
import tmp1 from "./data/templo1.jpg"

const Main = () => {
    const Artemis = artemis;
    const Templo1 = tmp1;
    return ( 
        <div className="main">
            <br /><br /><br /><br />
            <div className="CaixaP">
                <div className="subCaixa" id="subcaixa1">
                    <h2 id="tt1pp1">Deusa Ártemis</h2>
                    <img src={Artemis} alt="" id="img1pp1"/>
                    

                    <p id="txt1pp1">Ártemis tem como símbolos o arco e a flecha, por ser a deusa da caça.
                                Padroeira dos caçadores e sempre punia quem agia contra os animais.
                                Considerada uma fantástica caçadora, Ártemis era cultuada por aliviar as doenças femininas, proteger as crianças e os jovens.
                                </p>

                    <p id="txt2pp1">Ártemis é a deusa da caça, da Lua, da castidade, do parto e dos animais selvagens. 
                                É uma das mais veneradas divindades da mitologia grega e na mitologia romana ela é chamada de Diana. 
                                O seu animal sagrado é o urso, embora muitas vezes seja retratada segurando um veado.
                                </p>

                </div>
                <div className="subCaixa" id="subcaixa2">
                    <h2 id="tt1pp2">Descontruções e Reconstruções</h2>
                    <img src={ Templo1 } alt="" id="img2pp2"/>

                    <p id="txt1pp2">O Templo de Ártemis foi destruído duas vezes: primeiro por Heróstrato em 356 a.C., visando à busca de fama imortal, e depois pelos godos em 262 d.C. 
                                A reconstrução após o incêndio levou 20 anos, liderada por Alexandre III da Macedônia, enquanto a invasão gótica resultou em danos irreparáveis.
                                </p>

                    <p id="txt2pp2">Apesar das tentativas de reconstrução, partes do templo foram incorporadas em outros edifícios, como a Santa Sofia em Constantinopla, enquanto muitos artefatos estão agora no Museu Britânico.
                                Uma única coluna ainda permanece no local original, tornando-se uma atração turística na moderna Turquia, atraindo visitantes ao longo do ano.
                                </p>

                </div>
                <div className="subCaixa" id="subcaixa3">
                    <h2 id="tt3pp3">Curiosidades</h2>

                    <p id="txt1pp3">O Templo de Ártemis em Éfeso, na Grécia, é também conhecido como Artemísio.
                    Nesse sentido, foi construído durante o século 6 a.C e atualmente encontra-se na região da Turquia moderna.
                    </p>

                    <p id="txt2pp3">Inicialmente, a construção media 115m de comprimento por 55m de largura e durou 120 anos. 
                        Com linhas duplas e triplas de colunas, estima-se que havia 127 colunas de 1,20m de diâmetro e 19m de altura. 
                        Ao longo dos anos, passou por várias reconstruções e expansões até se tornar uma das Sete Maravilhas do Mundo Antigo. 
                        A construção final, com suas famosas colunas, levou cerca de 120 anos para ser concluída. 
                        O templo abrigava obras de arte importantes, incluindo uma escultura de Ártemis feita de ébano, ouro, prata e pedra preta, acompanhada por animais aos seus pés. 
                        O projeto foi realizado pelos arquitetos Quersifrão e Metágenes, enquanto a estátua principal foi concebida pelo escultor Endeu, do período arcaico grego.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Main;