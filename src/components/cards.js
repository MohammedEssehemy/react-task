import React from 'react';
import Card from './card/card';

// cards listing component
const cards =(props)=>{
    
    return (
        props.cards.map(card=>{
            return <Card amiibo={card} key={card.tail}/>
        })
    );
}

export default cards;