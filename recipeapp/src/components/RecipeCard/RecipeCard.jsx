import React,{useState} from 'react'
import RecipeViewPage from '../RecipeViewPage/RecipeViewPage'
import './RecipeCard.css'

const RecipeCard = ({data,handleToggle}) => {

  const [toggleView, settoggleView] = useState(false)

  const toggledata=()=>{
    // handleToggle()
    settoggleView(true)
  }
  const toggledataoff=()=>{
    // handleToggle()
    settoggleView(false)
  }

  return (
    <>
    <div onClick={toggledata}  className='recipe-card'>
        <img className='card-bg-img' src={data.Image} alt="" />
        <div className='card-text'>{data.title}</div>
    </div>
        {toggleView && <RecipeViewPage toggledataoff={toggledataoff} data={data}/>}
    </>
  )
}

export default RecipeCard