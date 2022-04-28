import React from "react";
import Button from "../form/Button";
import LineMidias from "../layout/LineMidias";
import "./Pages.css";

function Home() {
    return (
        <section className="home">
            <LineMidias />
            <div className="conteudo-home">
                <span className="apresentacao">Olá, meu nome é</span>
                <h1>Rafael Pereira</h1>
                <span className="subtitulo">Desenvolvedor front-end</span>
                <p className="resumo">
                    Sou um <strong>Programador Web</strong>. Se especializando
                    em front-end, tenho experiências com projetos realizados em
                    cursos, e autorias, gosto muito também de trabalhar com
                    dados e vendas.
                </p>
                <Button text="Venha me conhecer mais!" to="#sobre" />
            </div>
        </section>
    );
}

export default Home;
