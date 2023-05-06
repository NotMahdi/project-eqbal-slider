import React, { useState } from "react";
import './imageSlider.css';

const ImageSlider = (props) =>{
    const [currIndex, setCurrIndex] = useState(0);
    const slideStyles = {
        backgroundImage: `url(${props.slides[currIndex].url})`  
    }

    const leftSlideHandler =() =>{
        let newIndex;
        if(currIndex === 0)
        newIndex = props.slides.length-1;
        else{
            newIndex = currIndex-1;
        }
        setCurrIndex(newIndex);
    }
    const rightSlideHandler =() =>{
        let newIndex
        if(currIndex === props.slides.length-1)
        newIndex = 0
        else{
            newIndex = currIndex+1;
        }
        setCurrIndex(newIndex);
    }

    const jumpSlidesHandler =(slideIndex) =>{
        setCurrIndex(slideIndex)
    }
    return(
        <div className="sliderStyles">
            <div onClick={leftSlideHandler} className="leftSymbol">&#8637;</div>
            <div onClick={rightSlideHandler} className="rightSymbol">&#8640;</div>
            <div className="slideStyles" style={slideStyles}>
            </div>
            <div style={{display: 'flex', justifyContent:'center'}}>
                {props.slides.map((slide, slideIndex) =>{ //to access index we need a second variable 
                return (<div key={slideIndex} className="dots" onClick={()=>jumpSlidesHandler(slideIndex)}>&#11044;</div>) //for the func to not run immidietly we need the func in a arrow func
            })}
            </div>
        </div>
    )
}

export default ImageSlider