import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import CreateArecipe from './CreateArecipe/CreateArecipe'
import HomePage from './HomePage/HomePage'
import RecipeViewPage from './RecipeViewPage/RecipeViewPage'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'

const Components = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/*' element={<SignIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/home' element={<HomePage/>}/>
    <Route path='/create' element={<CreateArecipe/>}/>
    <Route path='/view' element={<RecipeViewPage/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default Components