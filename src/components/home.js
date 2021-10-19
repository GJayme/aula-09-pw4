import React, {useState} from 'react';
import Filme from './filme';

function Home() {
    const [imdbId, setImdbId] = useState('');
    const [titulo, setTitulo] = useState('');

    const submitImdb = () => {
        const opcoes = {
            method: 'POST'
        };

        fetch(`http://localhost:8080/${imdbId}`, opcoes)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setTitulo(data.Title);
            });
    };

    return (
        <div>
            <p>Nesse componente são exibidas informações um determinado filme</p>
            <label>
                imdb id:
                <input type="text" onChange={e => setImdbId(e.target.value)}/>
            </label>
            <button onClick={submitImdb}>Enviar</button>
            <Filme imdb={imdbId} titulo={titulo}/>
            <hr/>
        </div>
    );
}

export default Home;