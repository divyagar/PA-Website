import React, {useRef, useEffect, useState} from "react";
import './PaFeatures.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function PaFeatures(props) {
  const customSlider = useRef()
  const next = () => {
    customSlider.current.slickNext();
  }
  const previous = () => {
    customSlider.current.slickPrev();
  }

  const [showDots, changeShowDots] = useState(false);
  const [slidesToShow, changeSlidesToShow] = useState(3);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    if(window.innerWidth <= 548){
      changeShowDots(true);
      changeSlidesToShow(1.5);
    }
    else{
      changeShowDots(false);
      changeSlidesToShow(3);
    }
  }

  var settings = {
    variableWidth: true,
    dots: showDots,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
      console.log(customSlider.current);
    }
  };

  return (
    <div id = "pa-features">
      <Slider {...settings} ref = {customSlider}>
        <div class = "feature">
          <div class = "feature-img"></div>
          <div class = "feature-text">
              <h6>Feature Name</h6>
              <div class = "text">Some features of programmers army</div>
          </div>
        </div>
          
        <div class = "feature">
          <div class = "feature-img"></div>
          <div class = "feature-text">
              <h6>Feature Name</h6>
              <div class = "text">Some features of programmers army</div>
          </div>
        </div>
          
        <div class = "feature">
          <div class = "feature-img"></div>
          <div class = "feature-text">
              <h6>Feature Name</h6>
              <div class = "text">Some features of programmers army</div>
          </div>
        </div>
      </Slider>
    </div>
  );
}