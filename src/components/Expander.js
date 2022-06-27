import { useEffect, useRef, useState, useMemo } from "react";
import "./Expander.css"

// Det går inte att använda css-transition med height:auto.
// height sätts därför när Expander öppnas eller stängs,
// men sätts till auto när transition är klar och Expander är öppen.

// OBS! 
// css transition på height är krävande.
// transition stängs av under en viss width för att inte användas på telefoner.
export default function Expander({
    isExpanded: propsIsExpanded = true, // alias
    headerClass = "",
    headerStyle,
    detailsClass = "",
    detailsStyle,
    title,
    style,
    children, // children är det som ligger innanför taggarna, exempel: <Expander> children är det som ligger här </Expander>

}){

    const detailsRef = useRef(); 
    const [isExpanded, setIsExpanded] = useState(propsIsExpanded);
    const [detailsHeight, setDetailsHeight] = useState(propsIsExpanded ? "auto" : 0);
    const lowPerformanceTriggerWidth = 900;
    const [lowPerformanceMode, setLowPerformanceMode] = useState(window.innerWidth < lowPerformanceTriggerWidth);

    function close(){
        setIsExpanded(false);
        if(lowPerformanceMode)
            setDetailsHeight(0);
        else{            
            setDetailsHeight(detailsRef.current.scrollHeight);
            // requestAnimationFrame körs nästa render,
            // måste ha två stycken av någon anledning...
            requestAnimationFrame(() => requestAnimationFrame(() =>  setDetailsHeight(0)) );
        }
    }
    function open(){
        setIsExpanded(true);
        if(lowPerformanceMode)
            setDetailsHeight("auto"); 
        else 
            setDetailsHeight(detailsRef.current.scrollHeight); 
            // height sätts sedan till "auto" av onTransitionEnd i <div>
    }

    function mediaQueryHandler(mediaQuery){
        setLowPerformanceMode(mediaQuery.matches);
    }
    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${lowPerformanceTriggerWidth}px)`);
        mediaQuery.addEventListener("change", mediaQueryHandler);
        return () => mediaQuery.removeEventListener("change", mediaQueryHandler);
      }, []);

    const detailsContainerStyle = useMemo(() => {
        const style = { height: detailsHeight };
        if(lowPerformanceMode)
            style.transition = "none";
        return style;
    },[lowPerformanceMode, detailsHeight])

    return(
        <div className="expander" style={style}>

            <div className={`header ${headerClass}`}  style={headerStyle}
                onClick={() => isExpanded ? close() : open()}
            >
                <span className={isExpanded ? "arrow down" : "arrow"} >&#x203A;</span>
                <span>{title}</span>
            </div>  

            <div className="details-container" ref={detailsRef}
                style={detailsContainerStyle}
                onTransitionEnd={() =>  isExpanded && setDetailsHeight("auto")}
            >
                <div className={"details-content " + detailsClass + (!isExpanded ? " collapsed" : "")} style={detailsStyle}>
                    {children}
                </div>
            </div>
        </div>
    );
}