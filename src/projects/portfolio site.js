const imageFolder = "images/projects/portfolio-site/";

export const portfolioSite = {
	title : "Portfolio site",
    id : "Portfolio-site",
	github : "https://google.com",
	images : [
        {url: imageFolder + "1.png", description: "Portfolio site"},
        {url: imageFolder + "carousel.png", description: "Bildspel"},
        {url: imageFolder + "fullscreen.png", description: "Bild i fullscreen"},
        {url: imageFolder + "expander1.png", description: "Expander"},
        {url: imageFolder + "expander2.png", description: "Samma Expander med ett annat utseende"},
	],
	description: 
        <>
        <p>
            Den här hemsidan är tänkt att fungera som ett utökat CV där jag kan visa upp olika projekt med bilder och beskrivningar.
        </p>
        <p>
            Skapad med React och anpassad för olika skärmstorlekar. Flera components, t.ex. expanders, återanvänds enkelt på olika ställen.
        </p>
        </>,
    details: 
        <ul>
            <li>
                Skapad med React
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Egna components
                        <ul>
                            <li>Navbar</li>
                            <li>Bildspel</li>
                            <li>Expander</li>
                            <li>Fullscreen bild</li>
                            <li>Knappar</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Webbläsar- och mobilinställningar
                <ul>
                    <li>Fliknamn</li>
                    <li>Ikoner</li>
                </ul>
            </li>
            
        </ul>
}