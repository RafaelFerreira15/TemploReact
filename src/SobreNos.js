import React from "react";
import './SobreNos.css';
import pf1 from './data/perfis/Henrique.jpg'
import pf2 from './data/perfis/Rafael.jpg'
import pf3 from './data/perfis/Lincoln.jpg'
import pf4 from './data/perfis/Renan.jpg'
import pf5 from './data/perfis/Estevão.jpg'

const SobreNos = () => {
    const Pf1 = pf1;
    const Pf2 = pf2;
    const Pf3 = pf3;
    const Pf4 = pf4;
    const Pf5 = pf5;

    return ( 
        <div className="SobreNos">
            <br /><br /><br /><br />
            <div className="CaixaP3">
                <div className="SubcaixaSN" id="sub1sn">
                    <h1 id="tt1sn1">Considerações</h1>
                    <p id="txt1sn1">Desenvolvemos este site com a intenção de proporcionar aos visitantes informações mais detalhadas e abrangentes do que as disponíveis no folheto informativo, enriquecendo assim sua experiência ao explorar o templo de Ártemis. <br />
                                    Aqui, você encontrará não apenas informações sobre a própria deusa Ártemis, mas também detalhes fascinantes sobre as peculiaridades e história do templo, elementos que não puderam ser incluídos no folheto. <br />
                                    É importante ressaltar que este site foi concebido como um complemento ao folheto, sendo um projeto acadêmico autônomo que não estava inicialmente previsto em nosso trabalho. <br />
                                    No entanto, inspirados pela ideia, decidimos colocá-la em prática.  <br />
                                    O desenvolvimento deste site demandou um esforço considerável e dias de trabalho dedicados, e por isso agradecemos sua presença aqui, pois isso valida nosso empenho e dedicação.  <br />
                                    Esperamos que esta plataforma digital enriqueça sua compreensão e apreciação do templo de Ártemis e sua história rica e fascinante. <br />
                    </p>
                </div>
                <div className="SubcaixaSN" id="sub2sn">
                    <h1 id="tt1sn2">Quem Somos</h1>
                    <p id="txt1sn2">Somos alunos dedicados do Instituto Federal do Sul de Minas, campus Pouso Alegre.  <br />
                                    Este projeto foi desenvolvido como parte de uma proposta pedagógica do professor Emerson Simões, que nos desafiou a explorar novas formas de apresentação e divulgação de informações, como por exemplo, o folder. <br />
                                    Trabalhamos arduamente para criar tanto o folder quanto este site, utilizando nossas habilidades e conhecimentos adquiridos ao longo de nossos estudos. <br />
                                    Cada membro do grupo contribuiu com suas ideias e esforços para garantir a qualidade e a relevância deste trabalho. <br />
                                    Estamos orgulhosos do resultado alcançado e esperamos que você, nosso visitante, desfrute desta experiência informativa e enriquecedora que preparamos com tanto cuidado e dedicação. <br />
                    </p>
                </div>
                <div className="SubcaixaSN" id="sub3sn">
                    <div className="FTs">
                        <img src={ Pf1 } alt="" className="PFs" />
                        <h2 className="ttsn3">Henrique Milani</h2>
                    </div>
                    <div className="FTs">
                        <img src={ Pf2 } alt="" className="PFs" />
                        <h2 className="ttsn3">Rafael Gonçalves</h2>
                    </div>
                    <div className="FTs">
                        <img src={ Pf3 } alt="" className="PFs" />
                        <h2 className="ttsn3">Lincoln Souza</h2>
                    </div>
                    <div className="FTs">
                        <img src={ Pf4 } alt="" className="PFs" />
                        <h2 className="ttsn3">Renan Gabriel</h2>
                    </div>
                    <div className="FTs">
                        <img src={ Pf5 } alt="" className="PFs" />
                        <h2 className="ttsn3">Estevão Soares</h2>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SobreNos;