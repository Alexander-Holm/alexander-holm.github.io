import { useEffect, useLayoutEffect, useRef, useState } from 'react'
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
    ];

    // Hade problem med att hörnen längst upp på navbaren 
    // var vita utanför border-radius en kort stund när man scrollar ner.
    // Sätter därför border-radius till 0 när navbaren når toppen av skärmen.
    const [isNavSticky, setIsNavSticky] = useState(false);    
    const navRef = useRef();
    const navObserver = new IntersectionObserver(([nav]) => {
        setIsNavSticky(!nav.isIntersecting);
    }, {threshold: 1, rootMargin: "-1px"});    
    useEffect(() => {
        navObserver.observe(navRef.current);
    },[])

    return (  
        <div id="container" 
            style={{ ...isNavSticky && { 
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
            }}}
        >
            <Navbar ref={navRef} items={navItems} />
            <main>
                {ProfilView}
                {ProjektsView}
                {KompetensView}
                {KontaktView}
            </main> 
        </div>
    );
}

export default App;
