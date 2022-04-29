import "./Pages.css";

import R4EletroInicio from "./projetos-img/r4-eletro-inicio.png";
import Hotel1 from "./projetos-img/Hotel-1.png";

function Projetos() {
    return (
        <section className="projetos" id="projetos">
            <h2>Projetos</h2>
            <div id="box-projeto">
                <h3>
                    <a href="https://rafaelpssilva.github.io/e-commerce/">
                        E-commerce
                    </a>
                </h3>
                <div>
                    <img src={R4EletroInicio} alt="inicio" />
                </div>
            </div>
            <div id="box-projeto">
                <h3>
                    <a href="https://rafaelpssilva.github.io/Projeto-Hotel/">
                        Hotel
                    </a>
                </h3>
                <div>
                    <img src={Hotel1} alt="inicio" />
                </div>
            </div>
        </section>
    );
}

export default Projetos;
