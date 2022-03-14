import React, { useState } from "react";
import { SliderData } from "./SliderData";
import playIcon from "./play-icon.svg";
import leftArrow from "./left-arrow.svg";
import rightArrow from "./right-arrow.svg";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const slideLeft = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const slideRight = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      {SliderData.map((slide, index) => {
        return (
          <>
            <div class = "arrows">
              <img src={leftArrow} alt="left-arrow" id="left-arrow" onClick={slideLeft} />
              <img src={rightArrow} alt="right-arrow" id="right-arrow" onClick={slideRight} />
            </div>
            <div class = "slide-container">
              <div class={(index === current) ? "slide-wrapper-active" : "slide-wrapper"} >
                {index === current && (
                  <>
                    <div class="slide">
                      <div class = "slide-background">
                        <div id="slide-background-tint" style={{ backgroundColor: slide.color + "44" }} />
                        <img src={slide.image} alt="poster" id="slide-background-image" />
                      </div>
                      <div class = "slide-information-wrapper">
                        <div class = "slide-information-container">
                          <div class="slide-information">
                            <div id="slide-image-fade">
                              <img src={slide.image} alt="movie poster" id="slide-image" />
                            </div>
                            <div class="slide-text-container">
                              <div class="slide-text">
                                <h2 id="slide-title">{slide.title}</h2>
                                <p id="slide-description"> {slide.description} </p>
                                <div class = "slide-buttons">
                                  <a href={slide.purchase} class="button-link">
                                    <button id="buy-now" style={{ backgroundColor: slide.color }} >
                                      <img src={playIcon} alt="play-icon" id="play-icon" /> Buy Now
                                    </button>
                                  </a>
                                  <a href={slide.trailer} class="button-link">
                                    <button id="watch-trailer">Watch Trailer</button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ImageSlider;
