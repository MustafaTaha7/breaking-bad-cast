import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterGrid = (props) => {
    return props.isLoading ? (<h1>loading...</h1>) : (
        <section className="cards">
            {props.items.map( item => (
                <CharacterItem key={item.char_id} item={item} />
            ))}
        </section>

    )
}
 
export default CharacterGrid;