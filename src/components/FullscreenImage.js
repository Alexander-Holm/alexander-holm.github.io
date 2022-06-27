import React, {useEffect, useMemo, useState} from 'react';
import { createPortal } from 'react-dom';
import  './FullscreenImage.css';

export default function FullscreenImage( {
    // props
    isFullscreen: isFullscreenProp = false, 
    src, 
    alt, 
    className, 
    style,
}) {
    
    const [isFullscreen, setIsFullscreen] = useState(isFullscreenProp);
    useEffect(() => {
        setIsFullscreen(isFullscreenProp);
    }, [isFullscreenProp]);

    // Den vanliga bilden visas alltid även bakom fullscreen
    // useMemo för att inte göra en rerender av den när man går in eller ur fullscreen
    const NonFullscreenImage = useMemo(() =>
        <img src={src} alt={alt}
            className={className}
            style={style}
            onClick={() => setIsFullscreen(!isFullscreen)}
        />
        // React klagar på "unnecessary dependencies" men de måste vara med
        , [src, alt, className, style, isFullscreen] 
    )

    // createPortal för att lägga FullscreenImage i toppen av HTML DOM.
    // Kan inte lägga den överst med css z-index annars.
    // css stacking context : https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
    const FullscreenImage = createPortal(
        <div className="fullscreen-container" onClick={() => setIsFullscreen(false)} >
            <img src={src} alt={alt}
                className="fullscreen-image"
                style={style}
            />
        </div>
        , document.getElementById("root")
    )

    return(
        <>
        {/* Den vanliga bilden visas alltid även bakom fullscreen */}
        {NonFullscreenImage}
        
        {isFullscreen &&
            FullscreenImage
        }
        </>
    )
}