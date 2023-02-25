import React from 'react'
import './CreateArecipe.css'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateArecipe = () => {
   const navigate =useNavigate()
   const [allData,setAlldata]=useState('')
  return (
    <div className='createContianer'>
      <main className='main-createContianer'>
        <header className='main-header'> Create a recipe</header>
        <div className='main-header-das'>____________</div>
        <header className='info-header'>Share a recipe with the club by compleating the <br /> form below</header>

        <form className='create-form' action="">

        <div className='input-create'>
          <div className='heading-create'> Recipe title</div>
          <input className='recipe-title' type="text" />
        </div>
        <div className='input-create'>
          <div className='heading-create'>Author</div>
          <input className='author' type="text" />
        </div>
        <div className='input-create'>
          <div className='heading-create'>Please upload your image or paste a url link</div>
          <input className='file' type="file" />
        </div>
        <div className='input-create'>
          <div className='heading-create'>Ingredients</div>
          <textarea name="" className='IG' id="ingredients"></textarea>
        </div>
        <div className='input-create'>
          <div className='heading-create'>Recipe directions</div>
          <textarea name="" className='RD' id="recipeDirections"></textarea>
        </div>
<button className='sub-create'>CREATE</button>
        </form>

      </main>


    </div>
  )
}

export default CreateArecipe