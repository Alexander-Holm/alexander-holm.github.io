import { useLayoutEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {KompetensView} from './views/KompetensView'
import { ProjektsView } from './views/ProjektsView'
import { KontaktView } from './views/KontaktView'
import { ProfilView } from './views/ProfilView'
import { projects } from './projects/@projects'

function App() {  

    const navItems = [
        {title: "Projekt", link: "#projekt", dropdown: projects.map(project => ({title: project.title, link: `#${project.id}`}) ) },
        {title: "Kompetens", link: "#kompetens"},
        {title: "Kontakt", link: "#kontakt"},
    ]

    const [hasVerticalMargin, setHasVerticalMargin] = useState()
    const [isTopMarginVisible, setIsTopMarginVisible] = useState(true)
    const [containerVerticalMargin] = useState("50px");
    const [defaultBorderRadius] = useState("5px");
    const [containerBorderRadius, setContainerBorderRadius] = useState(defaultBorderRadius)

    
    useLayoutEffect(() => {    
        const scrollHandler = () => {
            // parsefloat tar bort tecken efter ett nummer, t.ex. 'px'
            if( window.pageYOffset > parseFloat(containerVerticalMargin, 10))
                setIsTopMarginVisible(false);            
            else setIsTopMarginVisible(true);
        }
        const mediaQueryHandler = (mediaQuery) => {
            if(mediaQuery.matches){
                setHasVerticalMargin(false);
                setContainerBorderRadius(0)
            }
            else{
                setHasVerticalMargin(true);
                scrollHandler();
                setContainerBorderRadius(defaultBorderRadius)
            }
        }

        /* --- Höjer upp containern när bakgrunden inte längre syns på sidorna --- */
        /* max-width lite större än width för .container eftersom Firefox inte räknar med scrollbar i width.*/
        /* För tidigt ser bättre ut än för sent. */
        const containerWidth = getComputedStyle(document.documentElement).getPropertyValue('--container-width');
        const mediaQuery = window.matchMedia(`(max-width: calc(${containerWidth} + 20px))`);
        mediaQuery.addEventListener("change", mediaQueryHandler);      
        
        window.addEventListener("scroll", scrollHandler, {passive: true} );

        mediaQueryHandler(mediaQuery);        

        return () => {
             mediaQuery.removeEventListener("change", mediaQueryHandler);
             window.removeEventListener("scroll", scrollHandler);
        };
    }, [containerVerticalMargin, defaultBorderRadius])

    return (  
        <div className="container" style={{margin: hasVerticalMargin ? `${containerVerticalMargin}  auto` : "0 auto"}}>
            <Navbar items={navItems} showTopButton={!isTopMarginVisible} style={{borderRadius: `${containerBorderRadius} ${containerBorderRadius} 0 0`}}/>

            <div className="content" style={{borderRadius: `0 0 ${containerBorderRadius} ${containerBorderRadius}`}}>
                {ProfilView}
                {ProjektsView}
                {KompetensView}
                {KontaktView}
            </div> 
        </div>
    );
}

export default App;
