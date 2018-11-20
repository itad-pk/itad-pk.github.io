import React from "react";
import { View, Carousel, CarouselInner, CarouselItem, Mask } from "mdbreact";

const AboutCarousel = () => {
  return (
    <Carousel
      activeItem={1}
      length={5}
      showControls={false}
      showIndicators={false}
      style={{width: '100%', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.60)'}}
    >
      <CarouselInner>
        <CarouselItem itemId="1">
          <img
            height={545}
            src={require("../photos/car1.jpg")}
            alt="First slide"
          />
          <Mask overlay="black-light" />
        </CarouselItem>
        <CarouselItem itemId="2">
          <img
            height={545}
            src={require("../photos/car2.jpg")}
            alt="Second slide"
          />
        </CarouselItem>
        <CarouselItem itemId="3">
          <View>
            <img
              height={545}
              src={require("../photos/car3.jpg")}
              alt="Mattonit's item"
            />
          </View>
        </CarouselItem>
        <CarouselItem itemId="4">
          <View>
            <img
              height={545}
              src={require("../photos/car4.jpg")}
              alt="Mattonit's item"
            />
          </View>
        </CarouselItem>
        <CarouselItem itemId="5">
          <View>
            <img
              height={545}
              src={require("../photos/car5.jpg")}
              alt="Mattonit's item"
            />
          </View>
        </CarouselItem>
      </CarouselInner>
    </Carousel>
  );
};

export default AboutCarousel;
