import React from 'react'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='home-container'>
      <main className='home-container-main'>
      <header className='logo-header'> <span className='logo'>LX</span> <span className='logo-h'>Recipe App</span></header>

      <div className='search-div'>
        <input placeholder='Search' type="text" className='search' />
      </div>
      <div className='search-btn-div'>
        <button className='search-btn'> X</button>
      </div>
        
        <header className='all-recipes'>All Recipes</header>
      <section className='card-section'>

      <div className='recipe-card'>
        </div>
      <div className='recipe-card'> 
      </div>
      <div className='recipe-card'> 
      </div>

      </section>

      </main>

    </div>
  )
}

export default HomePage