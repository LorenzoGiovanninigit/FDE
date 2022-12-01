import React from "react";
import Carousel from "better-react-carousel";

const Gallery = () => {
  return (
    <Carousel cols={2} rows={1} gap={20} loop>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/700/500"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/id/237/700/500"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/id/236/700/500"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/id/235/700/500"></img>
      </Carousel.Item>
    </Carousel>
  );
};

export default Gallery;
