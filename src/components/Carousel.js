import  './Carousel.css';
import React, {useRef, useState} from 'react';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md"
import FullscreenImage from './FullscreenImage';

export default function Carousel(props){

    const imageContainerRef = useRef();
    const [images] = useState(props.images);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isImageFullscreen, setIsImageFullscreen] = useState(false);
    const [imageHover, setImageHover] = useState(false);  

    function changeImage(senderElement, steps){
        // steps kan vara positivt för att gå framåt eller negativt för att gå bakåt

        // Loopar runt om index är negativt eller hamnar utanför images.length
        const newIndex = (currentIndex + steps + images.length) % images.length;
        setCurrentIndex(newIndex);
        // Förhindrar onClick på element bakom next & prev knapparna
        senderElement.stopPropagation();
    }

    // Ingen hover-effekt på bilden när musen är över framåt-bakåt knapparna
    const arrowButtonsHoverFunctions = {
        onMouseEnter: () => setImageHover(false),
        onMouseLeave: () => {
            const isImageContainerHovered = imageContainerRef.current.matches(":hover");
            setImageHover(isImageContainerHovered);
        },
    }

    // Sätt bilden till fullscreen när man trycker på containern.
    // Är bättre eftersom bilden inte alltid fyller containern.
    function onClickImageContainer(senderElement){
        setImageHover(false);
        setIsImageFullscreen(!isImageFullscreen); 
        // Förhindrar onClick på <FullScreenImage>
        senderElement.stopPropagation();
    }

    // Måste ligga under state, får inte lägga conditions innan hooks (useState, useMemo osv.)
    if(Array.isArray(props.images) === false || props.images.length < 1)
        return null;

    return(
        <div className="carousel fill-width">
            <div className="image-container"
                ref={imageContainerRef} 
                onClick={(element) => onClickImageContainer(element)}
                onMouseEnter={() => setImageHover(true)} onMouseLeave={() => setImageHover(false)}
            >

                {/* Framåt & bakåt knappar */}
                <button className="prev-image" {...arrowButtonsHoverFunctions} onClick={(element) => changeImage(element, -1)} >                        
                    <MdKeyboardArrowLeft />
                </button>
                <button className="next-image" {...arrowButtonsHoverFunctions} onClick={(element) => changeImage(element, +1)} >
                    <MdKeyboardArrowRight />
                </button>

                {/* Bild */}
                <FullscreenImage
                    key={currentIndex}
                    src={images[currentIndex].url}
                    className={imageHover ? "image hover" : "image"}
                    isFullscreen={isImageFullscreen}
                />
            </div>

            {/* Bildbeskrivning */}
            {/* OBS! Bryter av för lång text */}            
            <div className="image-description-container" >
                {/* Texten måste ha en container/wrapper för att text-overflow ska fungera med width i procent. */}
                {/* key för få en rerender när bilderna byts, behövs för animation */}
                <span className="text" key={currentIndex}>
                    {images[currentIndex].description}
                </span>
            </div>

            {/* Dots */}
            <div className="dot-container">
                {images.map((img, index) => {
                    return(
                        <span 
                            key={index} 
                            onClick={() => setCurrentIndex(index)}
                            className={(currentIndex === index) ? "dot active" : "dot" }  
                        />
                    );
                })}
            </div> 
        </div>
    );
}