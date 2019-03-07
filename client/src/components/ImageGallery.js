import React from 'react';

export default function ImageGallery(props){

  return(
    <div className="imageContainer">
    {props.data.map(e=>{
      return(
        <div className="imageFiles" key={e.id}>

          <p>{e.title}</p>

          <button onClick={()=>props.favorite(e.id)}>Favorite It</button>
        </div>
      )
    })}

    </div>
  )
}

// <img src={e.thumbnailUrl} alt={e.title}/>
