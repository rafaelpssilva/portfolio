import "./Pages.css";

function Sobre() {
    return (
        <section className="sobre" id="sobre">
            <div className="conteudo">
                <h2>Sobre mim</h2>
                <p className="descricao">
                    Olá! Meu nome é Rafael tenho 16 anos, moro em São Paulo
                    próximo ao metrô Arthur Alvim com minha mãe e irmões. Sou um
                    garoto de muitos sonhos. <strong>Determinção</strong> e{" "}
                    <strong>liderança</strong> são meus pontos fortes.{" "}
                </p>
                <p className="descricao">
                    <strong>Aos 14 anos</strong> eu era zagueiro e líder do time
                    de Chute Inicial Corinthians, onde disputei campeonatos com
                    meus colegas de time e nosso auge foi terminar em 2°
                    colocado. <br />
                    <strong>Aos 15 cresce</strong> meu interrese por tecnologia,
                    começei a estudar por conta própria em cursos na internet
                    onde aprendi diversas tecnologias. <br />
                    <strong>Atualmente</strong> me considero um Programador Web
                    em fase de aprendizado, buscando evoulir para conquistar meu
                    cargo de Programador Sênior.
                </p>
                <p className="descricao">
                    Gosto muito de tecnologia, vendas, finanças e esportes{" "}
                    <br />
                    Por fim é isso sou uma pessoa bastante{" "}
                    <strong>sociável</strong>, <strong>divertida</strong> e{" "}
                    <strong>comunicativa</strong> com muita vontade de aprender
                    e passar meus conhecimentos ao próximo.
                </p>
                <h3>Tecnologias</h3>
                <ul className="tecnologias-list">
                    <li>
                        <span className="seta">ᐅ</span> HTML
                    </li>
                    <li>
                        <span className="seta">ᐅ</span> CSS
                    </li>
                    <li>
                        <span className="seta">ᐅ</span> JavaScript
                    </li>
                    <li>
                        <span className="seta">ᐅ</span> React
                    </li>
                    <li>
                        <span className="seta">ᐅ</span> Node
                    </li>
                    <li>
                        <span className="seta">ᐅ</span> Python
                    </li>
                </ul>
                <h3>Cursos</h3>
                <ul className="cursos-list">
                    <li>
                        <span className="seta">ᐅ</span> Curso em vídeo
                    </li>
                    <li>
                        <span className="seta">ᐅ</span> Udemy
                    </li>
                    <li>
                        <span className="seta">ᐅ</span> Rocketseat
                    </li>
                    <li>
                        <span className="seta">ᐅ</span> Origamid
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Sobre;
