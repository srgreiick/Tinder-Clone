import React, { useState } from "react";
import TinderCard from "react-tinder-card"
import './TinderCards.css'

function TinderCard() {
    let [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://media.beam.usnews.com/d1/d8/8501ba714a21aed9a7327e02ade1/180515-10thingselonmusk-editorial.jpg'
        }
    ])




    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map((person) => (
                    <TinderCard
                    className='swipe'
                    key={character.name}
                    preventSwipe={["up","down"]}
                    
                    
                    />
                ))}
            </div>


        </div>
    )
}

export default TinderCard