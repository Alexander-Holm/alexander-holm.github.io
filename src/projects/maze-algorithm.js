import TryItButton from "../components/TryItButton";

const imageFolder = "images/projects/maze-algorithm/";

export const mazeAlgorithm = {
    title : "Labyrint-skapare",
    id : "Labyrint-skapare",
	github : "https://github.com/Alexander-Holm/maze-algorithm",
	images : [
		{url: imageFolder + "1.png", description: null},  
        {url: imageFolder + "controls.gif", description: "[GIF] Kontroller för uppspelning"},
		{url: imageFolder + "speed.gif", description: "[GIF] Ändra hastighet"},
        {url: imageFolder + "color.gif", description: "[GIF] Ändra färger med <input type='color'/>"},
	],
	description: 
        // &nbsp; = mellanslag
        <>            
        <p>
            Visar steg för steg när en labyrint skapas med en&nbsp;
            <a href="https://en.wikipedia.org/wiki/Maze_generation_algorithm#Randomized_depth-first_search" target="_blank" rel="noreferrer">
                Randomized depth-first search / Recursive backtracker
            </a>
            -algoritm.
        </p>            
        <p>                
            Använder Javascripts&nbsp;
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator" target="_blank" rel="noreferrer">
                generator functions
            </a>
            &nbsp;för att gå genom algoritmen ett steg i taget.
            Det gör det möjligt att spela upp automatiskt eller ett steg i taget manuellt.
        </p>
        <p>
            Det finns också några roliga inställningar att leka med: storlek, hastighet och färger.
        </p>
        <TryItButton url="https://alexander-holm.github.io/maze-algorithm/" />
        </>,
    details: 
        <ul>
            <li> Gjord med Svelte (JavaScript framework)
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ul>
            </li>
            <li> Generator functions
                <ul>
                    <li>Automatisk uppspelning som går att pausa, starta, stega, och ändra hastighet på</li>
                </ul>
            </li>
            <li> Kontroller för uppspelning
                <ul>                    
                    <li>Starta automatisk uppspelning med en viss tid mellan varje steg</li>
                    <li>Pausa den automatiska uppspelningen</li>
                    <li>Spela upp ett steg i taget manuellt</li>
                    <li>Gör klar hela labyrinten direkt (alla steg)</li>
                    <li>Börja om med en ny labyrint</li>
                </ul>
            </li>
            <li> Gränssnittet reflekterar vilket tillstånd koden är i
                <ul>
                    <li>Uppspelnings-knapparna stängs av när de inte kan användas</li>
                    <li>Visar vilket värde sliders ligger på</li>
                    <li>Labyrinten uppdateras så man kan följa varje steg i algoritmen</li>
                </ul>
            </li>
        </ul>
}