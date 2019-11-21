import React from 'react'

function Card(props){


    return(
        <div>
            <p>{props.character.name}</p>
            <p>{props.character.height}</p>
            <p>{props.character.birth_year}</p>
            <p>{props.character.gender}</p>
        </div>

    )
}
export default Card;