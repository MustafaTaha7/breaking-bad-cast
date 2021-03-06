import React from 'react';
import Spinner from '../ui/Spinner';
import CharacterItem from './CharacterItem';

const CharacterGrid = (props) => {
    return props.isLoading ? (<Spinner />) : (
        <section className="cards">
            {props.items.map( item => (
                <CharacterItem key={item.char_id} item={item} />
            ))}
        </section>

    )
}
 
export default CharacterGrid;