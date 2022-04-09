import './Pages.css'

function Sobre() {
    return ( 
        <section className="sobre" id='sobre'>
            <div className="conteudo">
                <h2>Sobre mim</h2>
                <p className="descricao">
                    Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                </p>
                <p className="descricao">
                    Fast-forward to today, and Ive had the privilege of working <strong>at an advertising agency</strong>, <strong>a start-up</strong>, <strong>a huge corporation</strong>, and <strong>a student-led design studio</strong>. My main focus these days is building accessible, inclusive products and digital experiences at <strong>Upstatement</strong> for a variety of clients.
                </p>
                <p className="descricao">
                    I also recently <strong>launched a course</strong> that covers everything you need to build a web app with the Spotify API using Node & React
                </p>
                <h3>Tecnologias</h3>
                <ul className="tecnologias-list">
                    <li><span className="seta">ᐅ</span> HTML</li>
                    <li><span className="seta">ᐅ</span> CSS</li>
                    <li><span className="seta">ᐅ</span> JavaScript</li>
                    <li><span className="seta">ᐅ</span> React</li>
                    <li><span className="seta">ᐅ</span> Node</li>
                    <li><span className="seta">ᐅ</span> Python</li>
                </ul>
                <h3>Cursos</h3>
                <ul className="cursos-list">
                    <li><span className="seta">ᐅ</span> Curso em vídeo</li>
                    <li><span className="seta">ᐅ</span> Udemy</li>
                    <li><span className="seta">ᐅ</span> Rocketseat</li>
                    <li><span className="seta">ᐅ</span> Origamid</li>
                </ul>
            </div>
        </section>
    )
}

export default Sobre