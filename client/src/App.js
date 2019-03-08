import React, {
  Component
} from 'react';
import './App.css';
import axios from 'axios';
import ImageGallery from './components/ImageGallery';
import Favorites from './components/Favorites';
import { Badge, Menu, Icon } from 'antd';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gallery: [],
      view: 'images',
      favorites: '',
    }
  }


  async componentDidMount() {
    const data = await axios.get('https://jsonplaceholder.typicode.com/photos');
    this.setState({
      gallery: data.data,
    })
  }

  removeFavorite=(id)=>{

    this.setState(prevState => ({
      favorites: prevState.favorites.filter(el => el.id != id )
  }));


  }

  addToFavorites = (e) => {

    let found1=this.state.gallery.filter(image => {
      return image.id===e
    })
    let found = found1[0];

    this.setState(prevState=>({
      favorites: [...prevState.favorites, found]
    }))

  }



changeView=(view)=>{
  this.setState({
    view: view
  })
}


  render() {
    return ( <div className = "App" >

      <Menu className="nav"
      mode="horizontal"
      style={{backgroundColor:'black', color: 'white'}}
      >
      <Menu.Item key="mail" onClick = {()=>this.changeView('images')} >
        <Icon type="database" />Image Gallery
      </Menu.Item>
      <Menu.Item key="app" onClick = {()=>this.changeView('favorites')}>Favorites
          <Badge count={this.state.favorites.length} style={{backgroundColor: 'green'}}>
            <Icon type="heart" style={{marginLeft: '10px'}} />
          </Badge>
      </Menu.Item>

      </Menu>

      <div>
      {this.state.view==='images'?
        <ImageGallery
         data = {this.state.gallery}
         favoriteList={this.state.favorites}
         favorite = {this.addToFavorites}/>:
          <Favorites
          data = {this.state.favorites}
          removeFavorite={this.removeFavorite}
          />}
        </div>
      </div>
    );
  }
}

export default App;
