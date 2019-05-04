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
            return (
              <div style={{ height: 400, width: "100%", border: "1px solid blue" }}>
                <img src={image} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
              </div>
            );
          })}
        </Carousel>
        <Dots
          value={this.state.value}
          onChange={this.onChange}
          thumbnails={images.map((image, index) => {
            return (
              <div style={{ height: 60, width: 60, background: `url(${image})` }} className="thumbnail_images">
                {/* <img style={{ maxWidth: "100%", maxHeight: "100%" }} key={index} src={image} /> */}
              </div>
            );
          })}
        />
      </div>
    );
  }
}
