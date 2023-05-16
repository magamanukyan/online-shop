import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { ApiSlides } from '../apifolder/sliderApi'
import { Link } from 'react-router-dom'
import './Slider.css'

const Slider = () => {

    //useState
const [slides] = useState(ApiSlides)
const [activeSlide, setActiveSlide] = useState(0)
  
// style
 const arrowStyle =  'rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer'  
 
 const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prvSlide = () =>{
    if (activeSlide === 0) {
        setActiveSlide(slides.length - 1);
  } else{
    setActiveSlide(activeSlide - 1);
  }
}
 
  return (
    <div className='parentDiv h-[540px] bg-white flex items-center justify-between'>
        {/* left Arrow */}
        <div className={arrowStyle}>
          <ArrowLeftOutlined style={{fontSize:'50px'}} onClick={prvSlide}/>
        </div>
       
        {/* Slides  */}
       {slides.map((slide, index)=>{
        if(index === activeSlide){
            return (
                <div key={index} className={`wrapper  flex w-[100%] h-[500px] justify-center items-center shadow-xl rounded-lg border-[#c0c0c0] border-[10px] overflow-hidden relative + ${slide.background}`}>
                <div className='slide flex items-center justify-center h-[100%]'>
                    <div className='forImage flex flex-1 justify-center items-center h-[100%]'>
                        <img
                        className='h-[100%] object-cover'
                        src={slide.src}
                        alt='slide'/>
                    </div>
                    <div className='des flex flex-col flex-1 place-items-start justify-center -ml-11 mobile:ml-11'> 
                        <h2 className='text-[55px] mobile:text-[35px] '>{slide.content.h2}</h2>
                        <p className='text-[30px] mobile:text-[20px]' >{slide.content.p}</p>
                       <Link to="/category"><button className='btn'> Shop Now </button> </Link> 
                    </div>
                </div>
            </div>
            );
        } else {
            return null; 
        }
       })}
        {/* Right Arrow */}
        <div className={arrowStyle}>
        <ArrowRightOutlined style={{fontSize:'50px'}} onClick = {nextSlide}/>
        </div>
    </div>
  );
}

export default Slider;
