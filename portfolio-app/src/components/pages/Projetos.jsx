import "./Pages.css";

import ReactDOM from "react-dom";

import R4EletroInicio from "./projetos-img/r4-eletro-inicio.png";
// import R4EletroMeio from "./projetos-img/r4-eletro-meio.png";
// import R4EletroFim from "./projetos-img/r4-eletro-fim.png";

import Hotel1 from "./projetos-img/Hotel-1.png";
// import Hotel2 from './projetos-img/Hotel-2.png'
// import Hotel3 from './projetos-img/Hotel-3.png'
// import Hotel4 from './projetos-img/Hotel-4.png'

import Calculadora1 from "./projetos-img/Calculadora-1.png";
// import Calculadora2 from './projetos-img/Calculadora-2.png'
// import Calculadora3 from './projetos-img/Calculadora-3.png'

function Projetos() {
    function projeto1() {
        ReactDOM.render(
            <>
                <img src={R4EletroInicio} alt="e-commerce" />
            </>,
            document.getElementById("slider")
        );
    }

    function projeto2() {
        ReactDOM.render(
            <>
                <img src={Hotel1} alt="hotel" />
            </>,
            document.getElementById("slider")
        );
    }

    function projeto3() {
        // ReactDOM.render(
        //     <>
        //         <img className="selected img-drop" src={Calculadora1} alt=" 1" />
        //         <img className="img-drop" src={Calculadora2} alt=" 2" />
        //         <img className="img-drop" src={Calculadora3} alt=" 3" />
        //     </>,
        //     document.getElementById('slider')
        // )
        // start()
    }

    return (
        <section className="projetos" id="projetos">
            <h2>Projetos</h2>
            <ul>
                <li onClick={projeto1}>E-commerce</li>
                <li onClick={projeto2}>Hotel</li>
                <li onClick={projeto3}>Calculadora</li>
                <li>Site Android</li>
            </ul>
            <div id="slider"></div>
        </section>
    );
}

export default Projetos;
