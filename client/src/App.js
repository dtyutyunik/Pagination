import React, {
  Component
} from 'react';
import './App.css';
import axios from 'axios';
import ImageGallery from './components/ImageGallery';
import Favorites from './components/Favorites';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gallery: [],
      view: 'iamges',
      favorites: [],

    }
  }


  async componentDidMount() {
    const data = await axios.get('https://jsonplaceholder.typicode.com/photos');

    this.setState({
      gallery: data.data,

    })
  }


  addToFavorites = (e) => {

    let found=this.state.gallery.filter(image => {
      return image.id===e
    })



    this.setState({
      favorites: [...this.state.favorites, found]
    })


  }



changeView=(view)=>{
  this.setState({
    view: view
  })
}


  render() {


    return ( <div className = "App" >


      <div className="nav">
      <button onClick = {()=>this.changeView('images')} > Show Images < /button>
      <button onClick = {()=>this.changeView('favorites')} > Show Favorites {this.state.favorites.length}< /button>
      </div>

      <div>
      {this.state.view==='images'?  <ImageGallery data = {this.state.gallery}
        favorite = {this.addToFavorites}/>:<Favorites data = {this.state.favorites}/>}
        </div>
      </div>
    );
  }
}

export default App;
