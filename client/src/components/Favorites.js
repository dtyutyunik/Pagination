import React from 'react';

export default function Favorites(props){


  return(
    <div className="imageContainer">
    {props.data.map(e=>{
      return(
        <div className="imageFiles" key={e.id}>
          <p>{e.title}</p>
          <img src={e.thumbnailUrl} alt={e.title}/>
          <button onClick={()=>props.favorite(e.id)}>Remove From Favorites</button>
        </div>
      )
    })}

    </div>
  )
}