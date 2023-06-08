import diceGif from './dice.gif'
import { useState } from 'react'

const Home = ()=> {

    const handleClick = () => {
        setRestaurants('')
    }
    
    const [restaurants, setRestaurants] = useState([
        {Name: 'Gluten Free Restaurant', GlutenFree: true, Halal: false, Vegan: true, id: 1 },
        {Name: 'Halal Restaurant', GlutenFree: false, Halal: true, Vegan: false, id: 2 },
        {Name: 'Vegan Restaurant', GlutenFree: false, Halal: false, Vegan: true, id: 3 },
    ])

    return(
        <div className="title">
            <h1>MUNCH!</h1>
        <div className="gif">
            <img src={diceGif} alt='Dice GIF'/>
        <div className='body'>
            <button onClick={handleClick}>Halal</button>
            <button onClick={handleClick}>Gluten-Free</button>
            <button onClick={handleClick}>Vegan</button>
        </div>
        </div>
        </div>
    )
}

export default Home


