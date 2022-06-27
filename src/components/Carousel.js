import React, {useMemo, useRef, useState} from 'react';
import  './Carousel.css';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight ,MdSearch} from "react-icons/md"
import FullscreenImage from './FullscreenImage';

export default function Carousel(props){

    const imageContainerRef = useRef();
    const [images] = useState(props.images);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isImageFullscreen, setIsImageFullscreen] = useState(false);
    const [overlayActive, setOverlayActive] = useState(false);
    
    // useMemo för att inte uppdatera bilden varje gång overlayActive ändras av mouse-hover
    const currentImage = useMemo(() => 
        <FullscreenImage
            src={images[currentIndex].url}
            className="image" 
            isFullscreen={isImageFullscreen}
        />
        ,[currentIndex, isImageFullscreen, images]
    )        

    function changeImage(senderElement, steps){
        // steps kan vara positivt för att gå framåt eller negativt för att gå bakåt

        // Loopar runt om index är negativt eller hamnar utanför images.length
        const newIndex = (currentIndex + steps + images.length) % images.length;
        setCurrentIndex(newIndex);
        // Förhindrar onClick på element bakom next & prev knapparna
        senderElement.stopPropagation();
    }
    const arrowButtonsHoverFunctions = {
        onMouseEnter: () => setOverlayActive(false),
        onMouseLeave: () => {
            const isImageContainerHovered = imageContainerRef.current.matches(":hover");
            setOverlayActive(isImageContainerHovered);
        },
    }
    function onClickImageContainer(senderElement){
        setOverlayActive(false);
        setIsImageFullscreen(!isImageFullscreen); 
        // Förhindrar onClick på <FullScreenImage>
        senderElement.stopPropagation();
    }

    // Måste ligga under state, får inte lägga conditions innan hooks (useState, useMemo osv.)
    if(Array.isArray(props.images) === false || props.images.length < 1)
        return null;

    return(
        <div className="carousel">
            {/* Border som div för att inte få hover-effekt när muspekaren är över bordern */}
            <div className="image-container border">
                <div className="image-container inner" ref={imageContainerRef} 
                    onClick={(element) => onClickImageContainer(element)}
                    onMouseEnter={() => setOverlayActive(true)} onMouseLeave={() => setOverlayActive(false)}
                >
                    {/* Hover overlay */}
                    {/* overlay har pointer-events:none för att högerklick ska fungera korrekt på bilderna */}
                    <div className={overlayActive ? "overlay active" : "overlay"} >
                        <MdSearch className="icon-inspect"/>
                    </div>

                    {/* Framåt & bakåt knappar */}
                    <button className="prev-image" {...arrowButtonsHoverFunctions} onClick={(element) => changeImage(element, -1)} >                        
                        <MdKeyboardArrowLeft />
                    </button>
                    <button className="next-image" {...arrowButtonsHoverFunctions} onClick={(element) => changeImage(element, +1)} >
                        <MdKeyboardArrowRight />
                    </button>
                    
                    {/* Bild */}
                    {currentImage}

                </div>
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
                        <span key={index} onClick={() => setCurrentIndex(index)}
                            className={(currentIndex === index) ? "dot active" : "dot" }  />
                    );
                })}
            </div> 
        </div>
    );
}