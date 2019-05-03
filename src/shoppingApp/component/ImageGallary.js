import React from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  onChange = value => {
    this.setState({ value });
  };

  render() {
    let { images } = this.props;
    return (
      <div>
        <Carousel infinite onChange={this.onChange} value={this.state.value}>
          {images.map(image => {
            return <img src={image} style={{ height: 400, width: "100%", objectFit: "contain" }} />;
          })}
        </Carousel>
        <Dots
          value={this.state.value}
          onChange={this.onChange}
          thumbnails={images.map((image, index) => {
            return <img style={{ height: 60, width: 60, objectFit: "contain" }} key={index} src={image} />;
          })}
        />
      </div>
    );
  }
}
