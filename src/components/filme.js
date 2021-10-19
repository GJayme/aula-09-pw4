import React from 'react';

function Filme(props) {

    return (
        <div>
            <p><b>Título do filme (id: {props.imdb}): </b>{props.titulo}</p>
        </div>
    );
}

export default Filme;