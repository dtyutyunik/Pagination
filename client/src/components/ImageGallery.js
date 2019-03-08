import React, {Component} from 'react';


export default class ImageGallery extends Component{

  constructor(props){
    super(props);

    this.state={
      currentPage: 1,
      maxNumber: 20,
      maxPage: this.props.data.length
    }
  }

    changePage=(pageNumber)=>{
      console.log(pageNumber)
      this.setState({
        currentPage: pageNumber
      })
    }

    nextPage=(pageNumber)=>{


      // if(this.state.currentPage<this.state.maxPage){
        this.setState({
          currentPage: this.state.currentPage+1
        })
      // }

    }

    prevPage=(pageNumber)=>{
      if(this.state.currentPage>1){
        this.setState({
          currentPage: this.state.currentPage-1
        })
      }
      else{
        console.log('its at lowest page')
      }

    }


render(){
console.log('cur page', this.state.currentPage)
// console.log('max page', this.state.maxPage)
  return(

<div>

<button onClick={this.prevPage}>Prev</button>
{this.state.currentPage>1?<button onClick={()=>this.changePage(this.state.currentPage-1)}>{this.state.currentPage-1}</button>:null}
<button onClick={()=>this.changePage(this.state.currentPage)}>{this.state.currentPage}</button>
<button onClick={()=>this.changePage(this.state.currentPage+1)}>{this.state.currentPage+1}</button>
<button onClick={this.nextPage}>Next</button>


    <div className="imageContainer">

    {this.props.data.map((e,index)=>{
      if(e.id > (this.state.currentPage*20)-20 &&e.id <= (this.state.currentPage*20)){
        return(
        <div className="imageFiles" key={e.id}>

          <p>{e.title}</p>
          <p>{e.id}</p>
          <p>index is {index}</p>
          <button onClick={()=>this.props.favorite(e.id)}>Favorite It</button>
        </div>
      )
    }
    })}

    </div>
    </div>
  )
}
}


// <img src={e.thumbnailUrl} alt={e.title}/>
