import React, {useRef, useEffect, useState} from "react";
import axios from 'axios';
import './SliderTutorial.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function SliderTutorial(props) {
  const [slidesToShow, changeSlidesToShow] = useState(5);
  const [sliderWidth, changeSliderWidth] = useState("21vw");

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  // useEffect(async () => {
  //   axios.get("https://programmers-army-dev-backend.herokuapp.com/api/article/domains")
  //   .then(res=>{
  //     console.log(res.data)
  //     setDomains(res.data.domains)
  //   })
  //   .catch(err=>{
  //     console.log(err)
  //   })
  // }, []);

  // useEffect(() => {
  //   console.log("domains : ", domains)
  //   Object.keys(domains).forEach(key => setContent(arr => [...arr, domains[key]]))
  //   console.log("content :", content)
  // }, [domains])

  const handleResize = () => {
    if(window.innerWidth <= 759){
      changeSlidesToShow(4);
      changeSliderWidth("25vw");
      console.log(sliderWidth);
    }
    else{
      changeSlidesToShow(5);
      changeSliderWidth("21vw");
    }
  }

  const customSlider = useRef()
  const next = () => {
    customSlider.current.slickNext();
  }
  const previous = () => {
    customSlider.current.slickPrev();
  }

  var settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
      console.log(customSlider.current);
      props.change(currentSlide);
    }
  };
  
  const renderSlides = () =>
  //   domains.forEach(dom => (
  //     <div className = "slider-element">
  //       {console.log(dom)}
  //       <h3>{dom.title}</h3>
  //     </div>
  //   ))
  // }
    props.content.map((cont, index) => (
      <div key = {index} className = "slider-element">
        <h3>{cont}</h3>
      </div>
    )
    );

  return (
    <div class = "topics-slider" style = {{width: sliderWidth}}>
      <div className="newApp">
        <Slider {...settings} ref = {customSlider}>
          {
            renderSlides()
            // domains.map(dom => (
            //   <div key = {dom.id} className="slider-element" onClick = {props.change(dom.id)}>
            //     <h3>{dom.title}</h3>
            //   </div>
            // ))
          }
        </Slider>
        <br/>
      </div>
      <button className="prev-button" onClick={() => previous()}>
        <i class="fas fa-caret-up"></i>
      </button>
      <button className="next-button" onClick={() => next()}>
        <i class="fas fa-sort-down"></i>
      </button>
    </div>
  );
}