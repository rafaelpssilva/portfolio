import {useEffect, useState} from 'react'

function RepositoriosGit() {

    const [repositorios, setRepositorios] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/rafaelpssilva/repos')
            .then( res => res.json() )
            .then( res => setRepositorios(res) )
    })

    return (
        <section className="repositorios">
            <h2>Repositorios</h2>
           <ul>
               <li>{repositorios.map(
                   repositorio => repositorio.name === "curso-react-yt"  && (
                    <li key={repositorio.id}>{repositorio.name}</li>
                ))
               }</li>
           </ul>
        </section>
    )
}

export default RepositoriosGit