
import diceGif from './dice.gif'

const Home = ()=> {

    const handleClick = () => {
        window.location.href = 'https://main--ornate-starship-f64ead.netlify.app/meal'
    }

    return(
        <div className="title">
            <h1>MUNCH!</h1>
        <div className="gif">
            <img src={diceGif} alt='Dice GIF' onClick={handleClick}/>
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


