import React from 'react'
import { useState } from 'react'


function Create() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [cover, setCover] = useState("")
  const [intro, setIntro] = useState("")
  const [completed, setCompleted] = useState(false)
  const [review, setReview] = useState("")
  
  
  const  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    
    switch(name){
      case "title":
        setTitle(value);
        break;
      case 'author':
        setAuthor(value)
        break;
      case 'intro':
        setIntro(value)
        break;
      case 'completed':
        setCompleted(e.target.checked)
        break;
      case 'review':
        setReview(value)
        break;
        
        
      default:
    }
  }
  //decodificar una iamgen de forma local react
  const handleOnChangeFile = (e) => {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();
      
    reader.readAsDataURL(file);
      
    reader.onloadend = function(){
      setCover(reader.result.toString());
    };
  }
  
  const handleSubmit = (e) => {
    e.prevent.Default()
    
    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review
    }
    //TODO REGISTER BOOK
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>TITLE</div>
          <input 
            type="text"
            name="title"
            onChange={handleChange} 
            value={title}
          />
          {title}
        </div>
        
        <div>
          <div>Author</div>
          <input 
            type="text"
            name="author"
            onChange={handleChange} 
            value={author}
          />
    
        </div>
        
        <div>
          <div>Cover</div>
          <input 
            type="file"
            name="cover"
            onChange={handleOnChangeFile} 
            // value={cover}
          />
          <div>{!!cover ? <img src={cover} alt="cover" width='200' /> : ""}</div>
        </div>
        
        <div>
          <div>Intro</div>
          <input 
            type="text"
            name="intro"
            onChange={handleChange} 
            value={intro}
          />
    
        </div>
        
        <div>
          <div>Completed</div>
          <input 
            type="checkbox"
            name="completed"
            onChange={handleChange} 
            value={completed}
          />
    
        </div>
        
        <div>
          <div>Review</div>
          <input 
            type="text"
            name="review"
            onChange={handleChange} 
            value={review}
          />
    
        </div>
        
        <input type="submit" value="Register book" />
        
      </form>
    </div>
  )
}

export default Create