import React from "react";
import './Reportagem.css';
import templorm1 from './data/temploRM1.jpeg';
import templorm2 from './data/temploRM2.jpg';
import templorm3 from './data/templo2.jpg';


const Reportagem = () => {
    const Templorm1 = templorm1;
    const Templorm2 = templorm2;
    const Templorm3 = templorm3;

    return ( 
        <div className="Reportagem">
            <br /><br /><br /><br />
            <div className="CaixaP1">
                <div className="subcaixarm" id="sub1">
                    <h1 id="tt1rm1">Descubra a Grandeza do Templo de Ártemis em Éfeso</h1>
                    <h2 id="txt1rm1">Renan Gonçalves Milani, correspondente em Éfeso.</h2>
                    <p id="txt2rm1">Éfeso, uma das mais prósperas cidades da antiguidade, é lar de uma das Sete Maravilhas do Mundo Antigo: 
                                o Templo de Ártemis. Hoje, viajamos para explorar a magnificência deste grandioso monumento, que continua a atrair visitantes 
                                de todas as partes do mundo, maravilhados com sua imponência e beleza.
                    </p>

                </div>
                <div className="subcaixarm" id="sub2">
                    <h1 id="tt1rm2">O Papel do Templo na Cultura Local</h1>
                    <p id="txt1rm2">O Templo de Ártemis não é apenas uma maravilha arquitetônica, mas também um centro espiritual e cultural. 
                                Todos os anos, o festival de Ártemis atrai milhares de fieis que vêm para celebrar a deusa com danças, oferendas e procissões. 
                                Os mercados ao redor do templo florescem com artesãos vendendo estatuetas, joias e outros itens inspirados na deusa.
                    </p>

                    <p id="txt2rm2">Lincoln, um artesão local, descreveu a importância do festival:</p>

                    <p id="txt3rm2">"Para nós, o festival é uma oportunidade de celebrar nossa herança cultural e religiosa. 
                        Eu faço estatuetas de Ártemis há mais de 30 anos, e é sempre um prazer ver a alegria nos rostos das pessoas que vêm aqui para celebrar."
                    </p>

                </div>
                <div className="subcaixarm" id="sub3">
                    <h1 id="tt1rm3">Renan Gonçalves Milani</h1>
                    <p id="txt1rm3">É jornalista especializado em reportagens históricas e culturais, viajando pelo mundo para trazer histórias de lugares icônicos para seus leitores.</p>
                </div>
                <div className="subcaixarm" id="sub4">
                    <h1 id="tt1rm4">A Grandeza do Templo</h1>
                    <img src={ Templorm1 } alt="" id="imgrm1" />

                    <p id="txt1rm4">A estrutura, que mede aproximadamente 115 metros de comprimento por 55 metros de largura, é cercada por 127 colunas, cada uma com cerca de 18 metros de altura. 
                                O interior é tão esplêndido quanto o exterior, com estátuas douradas, mosaicos coloridos e altares decorados com pedras preciosas.
                    </p>

                    <p id="txt2rm4">O Templo de Ártemis, conhecido também como Artemision, é um testemunho impressionante da engenharia e da arquitetura grega. 
                                Construído em homenagem à deusa Ártemis, a protetora dos animais selvagens e da caça, o templo foi erguido em mármore branco, com colunas 
                                imponentes que se erguem aos céus, decoradas com intrincados relevos que contam histórias da deusa e dos herois mitológicos.
                    </p>

                </div>
                <div className="subcaixarm" id="sub5">
                    <h1 id="tt1rm5">Visitantes e Moradores</h1>

                    <p id="txt1rm5">Em nossa visita, encontramos diversos turistas deslumbrados com a grandiosidade do templo. 
                                 O estudante de história, Estêvão Soares, de 22 anos, compartilhou sua experiência:
                    </p>

                    <img src={ Templorm2 } alt="" id="img2rm" />

                    <p id="txt2rm5">"Estar aqui é como voltar no tempo. Eu estudei sobre o Templo de Ártemis na faculdade, 
                                mas nada se compara a vê-lo pessoalmente. A arquitetura é simplesmente incrível, e a energia do lugar é indescritível."
                    </p>

                    <p id="txt3rm5">Além dos turistas, conversamos com moradores locais que têm uma ligação especial com o templo. 
                                Alexandros, um guia turístico de 45 anos, nos contou sobre o impacto do templo na comunidade:
                    </p>

                    <p id="txt4rm5">"O Templo de Ártemis não é apenas uma atração turística; ele faz parte da nossa identidade. 
                                Muitas famílias aqui têm histórias passadas de geração em geração sobre a construção e a preservação do templo. 
                                É uma honra compartilhar essas histórias com o mundo."
                    </p>

                </div>
                <div className="subcaixarm" id="sub6">
                    <h1 id="tt1rm6">Um Monumento Eterno</h1>

                    <p id="txt1rm6">O Templo de Ártemis em Éfeso continua a ser um símbolo eterno de beleza, devoção e engenhosidade humana. 
                                À medida que exploramos suas colunas imponentes e intrincados detalhes, somos lembrados da capacidade do ser humano de criar 
                                obras que transcendem o tempo.
                    </p>

                    <img src={ Templorm3 } alt="" id="img3rm" />

                    <p id="txt2rm6">Para aqueles que buscam uma conexão com a história antiga e a espiritualidade, o Templo de Ártemis é uma visita indispensável. 
                                Aqui, nas ruínas sagradas de Éfeso, o passado e o presente se encontram, e a lenda de Ártemis continua a inspirar todos que passam por suas 
                                colunas majestosas.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Reportagem;