import React, { useState, useEffect } from 'react'
import diceGif from './dice.gif'

const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

const Meal = () => {
  const [food, setFood] = useState([])

  const fetchFood = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setFood(data.meals)
  }

  useEffect(() => {
    fetchFood()
  }, [])

  return (
    <>
      <div className="die">
        <img src={diceGif} alt='Dice GIF' onClick={() => fetchFood()}/>
      </div>
      <section className="meals">
        {food.map((f) => {
          const {
            idMeal,
            strMeal,
            strMealThumb,
          } = f

          return (
            <article key={idMeal}>
              <div className='meal'>
                <h2>{strMeal}</h2>
                <img src={strMealThumb} alt={strMeal} />
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Meal