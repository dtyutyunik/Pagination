import React, {Component} from 'react';
import { Button, Icon, Modal  } from 'antd';

export default class ImageGallery extends Component{

  constructor(props){
    super(props);

    this.state={
      currentPage: 1,
      maxNumber: 20,
      maxPage: this.props.data.length,
      visible: false

    }
  }

    changePage=(pageNumber)=>{
      this.setState({
        currentPage: pageNumber
      })
    }

    nextPage=(pageNumber)=>{
        this.setState({
          currentPage: this.state.currentPage+1
        })
    }

    prevPage=(pageNumber)=>{
      if(this.state.currentPage>1){
        this.setState({
          currentPage: this.state.currentPage-1
        })
      }

    }

    showModal=(image)=>{
      this.setState({
        visible: true,
        item: image
      });
    }

    hideModal = () => {
    this.setState({
      visible: false,
    });
  }


render(){
  let {view}= this.state;



  return(
    <div>
      <Button  onClick={this.prevPage}>
        <Icon type="left" />Prev
      </Button>
      {this.state.currentPage>1?
        <Button className={this.state.active}
          onClick={()=>this.changePage(this.state.currentPage-1)}>{this.state.currentPage-1}
        </Button>:null}
        <Button  type="primary"
          onClick={()=>this.changePage(this.state.currentPage)}>{this.state.currentPage}
        </Button>
        <Button onClick={()=>this.changePage(this.state.currentPage+1)}>{this.state.currentPage+1}</Button>
        <Button onClick={this.nextPage}>Next<Icon type="right" /></Button>

        <div className="imageContainer">

        {this.props.data.map((e)=>{
          if(e.id > (this.state.currentPage*this.state.maxNumber)-this.state.maxNumber &&e.id <= (this.state.currentPage*this.state.maxNumber)){
            return(
            <div className="imageFiles" key={e.id}>

              <img className="imgs" src={e.thumbnailUrl} alt={e.title}/>
              <div className="text">
              <p className='title'>Title: {e.title}</p>
                <div className="buttons">
                {this.props.favoriteList.length>0&&this.props.favoriteList.find(fav=>
                fav.id===e.id)?
                <Button disabled>Added</Button>:
                <Button onClick={()=>this.props.favorite(e.id)}>Favorite It</Button>}
                <Button onClick={()=>this.showModal(e.url)}> Enhance</Button>
                </div>
                </div>
            </div>)}
        })}

    </div>
        <Modal style={{ top: 20 }}
            footer={null}
            bodyStyle={{height: 650}}
            width='660px'
            onCancel={this.hideModal}
            visible={this.state.visible}>

              <img src={this.state.item} alt='picture'></img>

           </Modal>
    </div>

  )
}
}
