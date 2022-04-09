import Button from '../form/Button'
import LineMidias from '../layout/LineMidias'
import './Pages.css'

function Home() {
    return (
        <section className="home">
            <LineMidias />
            <div className="conteudo-home">
                <span className='apresentacao'>Olá, meu nome é</span>
                <h1>Rafael Pereira</h1>
                <span className="subtitulo">Desenvolvedor front-end</span>
                <p className="resumo">
                    Im a <strong>software engineer</strong> specializing in building (and occasionally designing) exceptional digital experiences. Currently, Im focused on building accessible, human-centered products at <strong>Upstatement</strong>.
                </p>
                <Button text="Venha me conhecer mais!" to="#sobre"/>
                
            </div>
        </section>
    )
}

export default Home
