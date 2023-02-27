import React from 'react'
import './CreateArecipe.css'
import { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'


const CreateArecipe = () => {
  const navigate = useNavigate()
  const [allData, setAlldata] = useState({
    title: '',
    author: '',
    ingredients: '',
    recipeDirections: ''
  })

  const [image, setimage] = useState(null)
  const [dataURL, setDataURL] = useState("")
  
  const valueHandler = e => {
    setAlldata({ ...allData, [e.target.name]: e.target.value })
  }
  
    useEffect(() => {
    if(dataURL){
      fetch('https://recipe-saurabhsrb23.onrender.com/createpost', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "jwttoken":JSON.parse(localStorage.getItem('userData')).token
          
        },
        body: JSON.stringify({
          title: allData.title,
          author:allData.author,
          image:dataURL,
          ingredients:allData.ingredients,
          recipeDirections:allData.recipeDirections
        })
      }).then(res => res.json()).then(data =>{
        if(data.error){}
        else{
          // console.log(data)
          navigate('/home')
        }} ).catch(err => console.log(err))
    }



    //     //saveing to mongodb
    //     if (dataURL) {
      // const resdata=axios.post('http://localhost:9000/createpost',{
        //   allData
// })
// console.log(resdata.data)
//     }
  }, [dataURL])

  const postDetails =async (e) => {
      e.preventDefault();

        const data = new FormData();
        data.append("file", image)

        data.append("upload_preset", "reciepeapp")
        data.append("cloud_name", "saurabhajn")
    
        const response=await axios.post('https://api.cloudinary.com/v1_1/saurabhajn/image/upload',data)

        setDataURL(response.data.url)
        console.log(response.data.url)
      }




  return (
    <div className='createContianer'>
      <main className='main-createContianer'>
        <header className='main-header'> Create a recipe</header>
        <div className='main-header-das'>____________</div>
        <header className='info-header'>Share a recipe with the club by compleating the <br /> form below</header>

        <form className='create-form' action="">
          <div className='input-create'>
            <div className='heading-create'> Recipe title</div>
            <input onChange={valueHandler} name='title' className='recipe-title' type="text" />
          </div>
          <div className='input-create'>
            <div className='heading-create'>Author</div>
            <input onChange={valueHandler} name='author' className='author' type="text" />
          </div>
          <div className='input-create'>
            <div className='heading-create'>Please upload your image or paste a url link</div>
            <input className='file' accept='image/*' name='image' type="file" onChange={(event) => {setimage(event.target.files[0])
          }}  />
          </div>
          <div className='input-create'>
            <div className='heading-create'>Ingredients</div>
            <textarea onChange={valueHandler} name="ingredients" className='IG' id="ingredients"></textarea>
          </div>
          <div className='input-create'>
            <div className='heading-create'>Recipe directions</div>
            <textarea onChange={valueHandler} name="recipeDirections" className='RD' id="recipeDirections"></textarea>
          </div>
          <button type='submit' onClick={postDetails} className='sub-create'>CREATE</button>
          <Link to={"/home"}>
          <button className='close-btn'>Close</button>
          </Link>
        </form>

      </main>


    </div>
  )
}

export default CreateArecipe