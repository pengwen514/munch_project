import diceGif from './dice.gif'

const Home = ()=> {
    return(
        <div className="title">
            <h1>MUNCH!</h1>
        <div className="gif">
            <img src={diceGif} alt='Dice GIF'/>
        <div className='body'>
            <button>Halal</button>
            <button>Gluten-Free</button>
            <button>Vegan</button>
        </div>
        </div>
        </div>
    )
}

export default Home


