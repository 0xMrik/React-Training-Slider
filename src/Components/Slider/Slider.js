import { useState } from 'react'
import './Slider.css' 
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'

const Slider = () => {

  const [slide, setSlide] = useState({
      index: 1,
      inProgress: false
  })

  const nextSlide = () => {
    if (slide.index !== dataSlider.length && !slide.inProgress) {
      setSlide({ index: slide.index + 1, inProgress: true })
      setTimeout(() => {
        setSlide({index: slide.index + 1, inProgress: false})
      }, 400)
    } else if (slide.index === dataSlider.length && !slide.inProgress) {
      setSlide({ index: 1, inProgress: true })
      setTimeout(() => {
        setSlide({ index: 1, inProgress: false });
      }, 400);
      }
  }
  
  const previousSlide = () => {
    if (slide.index !== 1 && !slide.inProgress) {
      setSlide({ index: slide.index - 1, inProgress: true })
      setTimeout(() => {
        setSlide({ index: slide.index - 1, inProgress: false });
      }, 400);
    } else if (slide.index === 1 && !slide.inProgress) {
      setSlide({ index: 5, inProgress: true });
      setTimeout(() => {
        setSlide({ index: 5, inProgress: false });
      }, 400);
    }
  }

  const moveDot = index => {
    setSlide({index: index, inProgress: false})
  }

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slide.index === index + 1 ? "slide active-anim" : "slide"
            }
          >
            <img
              src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
              alt="slide"
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={previousSlide} direction={"previous"} />
      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => {
          return <div
            className={slide.index === index + 1 ? "dot active" : "dot"}
            onClick={() => moveDot(index +1)}
          ></div>
        })}
      </div>
    </div>
  );
}

export default Slider