import React from 'react';
import { getAllFavs, deleteFav } from '../myApi';
import Favorite from '../views/Favorite';
import Loading from '../views/Loading';

class Favorites extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      favs: [],
      isLoading: false
    };

    this.removeFav = this.removeFav.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    getAllFavs().then((res) => {
      this.setState({ favs: res.images, isLoading: false });
    });
  }

  removeFav(imgId) {
    deleteFav(imgId).then(res => {
      this.setState({ favs: this.state.favs.filter(fav => fav.id !== imgId) })
    });
  }

  getProps(fav) {
    return {
      key: fav.id,
      removeFav: this.removeFav,
      ...fav
    };
  }

  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        <div className="favorites-grid">
          {this.state.isLoading && <Loading />}
          {this.state.favs.map((fav) => <Favorite {...this.getProps(fav)} />)}
        </div>
      </div>
    );
  };
}

export default Favorites;
