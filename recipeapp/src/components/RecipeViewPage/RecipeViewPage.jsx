import React, { useState } from 'react'
import './RecipeViewPage.css'

const RecipeViewPage = ({ data,toggledataoff }) => {
  const [btntoggle, setbtntoggle] = useState(true)
  return (
    <div className='recipeviewcontainer'>
      <section className='model-flex' >

        <section className='modelsec-1'>
          <div className='recipeviewModeltitle'>{data.title}</div>
          <img className='recipeviewModelimage' src={data.Image} alt="" />
        </section>
        <section className='modelsec-2'>
          <div>

          <button className='model-btnx' onClick={() => setbtntoggle(true)}>Instructions</button>
          </div>
          <div>
          <button className='model-btnx' onClick={() => setbtntoggle(false)}>Ingredients</button>
          </div>

          {
            btntoggle ? <div className='recipeviewModelinstructions'> {data.recipeDirections}</div> :
              <div className='recipeviewModelingredients'>{data.ingredients}</div>
          }
          <button onClick={toggledataoff} className='close-btn'> Close</button>
        </section>
      </section>

    </div>
  )
}

export default RecipeViewPage