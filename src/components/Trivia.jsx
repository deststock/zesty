import React, {useEffect, useState} from 'react'
import axios from 'axios'
import wineCheese from '../static/wine&cheese.jpg'

const Trivia = () => {
    
    const [trivia, setTrivia] = useState([])
    const [triviaOpen, setTriviaOpen] = useState(false)

    const toggleTrivia = () => {
        setTriviaOpen(!triviaOpen)
    }
    
    // useEffect(() => {
    //     axios.get("https://api.spoonacular.com/food/trivia/random?apiKey=571f972a0cf64eca93ee18572cb11b33")
    //         .then(res => {
    //             console.log(res.data)
    //             setTrivia(res.data)
    //         })
    // }, [])

    return(
        <div>
            
            <div className="trivia">
                <img className="headerPhoto" src={wineCheese} alt="header photo" />
                <button className="openTrivia" onClick={toggleTrivia}> Food for thought </button>
                {triviaOpen ? (
                    <div className="triviaText">
                    <button className="closeTrivia" onClick={toggleTrivia}> x </button>
                    <h2> Did you know? </h2>
                    <h3 className="randomTrivia"> {trivia.text} The red food-coloring carmine used in Skittles and other candies is made from boiled cochineal bugs, a type of beetle. </h3> 
                </div>
            ) : <p className="empty"></p>}
            </div>
        </div>
    )
}

export default Trivia;