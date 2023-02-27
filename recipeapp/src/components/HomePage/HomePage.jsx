import React, { useEffect, useState } from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
import { FaPizzaSlice } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';
import axios from 'axios'
import { RecipeContext } from '../../context';
import RecipeCard from '../RecipeCard/RecipeCard';

const HomePage = () => {

  const [toggle, settoggle] = useState(false)

  const [data, setData] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get("https://recipe-saurabhsrb23.onrender.com/all").then(response => {
      setData(response.data);
    }).catch(error => { console.log(error); });
  }, []);

  const handleToggle = () => {
    settoggle(true)
  }



  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://recipe-saurabhsrb23.onrender.com/search?searchTerm=${searchTerm}`);
      setSearchResults(response.data);
    };
    fetchData();
  }, [searchTerm]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };





  return (

    <RecipeContext.Provider>

      <div className='home-container'>
        <main className='home-container-main'>
          <header className='logo-header'> <span className='logo'><GiKnifeFork /></span> <span className='logo-h'>Recipe App</span></header>
          <Link to={"/login"}>

          <button className='close-btn'>LogOut</button>
          </Link>

          <div className='search-div'>
            <input placeholder='Search' value={searchTerm} onChange={handleSearchTermChange} className='search' />
          </div>
          <div className='search-btn-div'>
            <Link to={'/create'}>
              <button className='search-btn'> <span><FaPizzaSlice /></span><br />New</button>
            </Link>
          </div>

          <header className='all-recipes'>All Recipes</header>

          {searchTerm ? <section className='card-section'>
            {
              searchResults.map((data, idx) => {
                return (
                  <RecipeCard handleToggle={handleToggle} data={data} key={idx} />

                )
              })
            }
          </section> 
          :
            <section className='card-section'>

              {
                data.map((data, idx) => {
                  return (
                    <RecipeCard handleToggle={handleToggle} data={data} key={idx} />

                  )
                })
              }

            </section>

          }
        </main>

      </div>
    </RecipeContext.Provider>
  )
}

export default HomePage