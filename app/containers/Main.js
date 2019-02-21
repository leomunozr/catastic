import React from 'react';
import Controles from '../views/Controles';
import Loading from '../views/Loading';
import Principal from '../views/Principal';
import { addToFavs, getNewImage } from '../myApi';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      image: '',
      isLoading: false
    };

    this.likeImage = this.likeImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  componentDidMount() {
    this.nextImage();
  }

  likeImage() {
    addToFavs(this.state.image.id)
      .then((res) => {
        this.nextImage()
      });
  }

  nextImage() {
    this.setState({ isLoading: true });
    getNewImage()
      .then((res) => {
        this.setState({ image: res.image, isLoading: false });
      });
  }

  render() {
    return (
      <div className="main">
        {this.state.isLoading && <Loading />}
        <Principal imageUrl={this.state.image.url} />
        <Controles nextImage={this.nextImage} likeImage={this.likeImage} />
      </div>
    );
  }
}

export default Main;
