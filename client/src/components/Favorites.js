import React from 'react';
import { Button} from 'antd';

export default function Favorites(props){


  return(
    <div className="imageContainer">
    {!!props.data.length>0?props.data.map(e=>{
      return(

        <div className="imageFiles" key={e.id}>
          <img className="imgs" src={e.thumbnailUrl} alt={e.title}/>
        <div className="text">
          <p className='title'>Title: {e.title}</p>
          <div className="buttons">
          <Button onClick={()=>props.removeFavorite(e.id)}>Unfavorite</Button>
          </div>
          </div>
        </div>
      )
    }):<div className="NoPics">Favorite some pictures and come back</div>
  }

    </div>
  )
}
