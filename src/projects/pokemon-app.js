const imageFolder = "images/projects/pokemon-app/";

export const pokemonApp = {
	title : "Pokemon app",
    id : "Pokemon-app",
	github : "https://github.com/Alexander-Holm/pokemon-app",
	images : [
		{url: imageFolder + "types.png", description: "Första sidan visar alla typer av Pokemon"},
        {url: imageFolder + "search.png", description: "Sökfunktionen"},
        {url: imageFolder + "grass.png", description: "Lista med Grass-types"},
        {url: imageFolder + "header.png", description: "Header med namn och ikon för typen"},
        {url: imageFolder + "poison.png", description: "Lista med Poison-types"},
        {url: imageFolder + "psychic.png", description: "Lista med Psychic-types"},
        {url: imageFolder + "starmie.png", description: "Detaljsidan för Starmie"},
        {url: imageFolder + "charizard.png", description: "Detaljsidan för Charizard"},
	],
	description:
        // &nbsp; = mellanslag
        <>
        <p>
            En mobil applikation som hämtar data från&nbsp;
            <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
                PokéApi
            </a>.
        </p> 
        <p>
            Användaren väljer en typ av Pokemon och får då en lista med alla Pokemon av den typen.
            En anpassad header med namn och ikon för typen som visas.
            Varje Pokemon visas på ett kort som har olika färger baserat på sina typer.
        </p>
        <p>
            Går man in på en Pokemon får man se mer detaljerad information.
            Samma component som används för Pokemon-kortens bakgrundsfärger återanvänds på detaljsidan för en banderoll.
        </p>
        <p>
            Det finns också en sökfunktion där man kan gå direkt från startsidan till en Pokemons detaljsida.
        </p>
        </>
    ,details: 
        <ul>
            <li>Gjord med React Native för både Android och iOS
                <ul>
                    <li>Javascript</li>
                </ul>
            </li>
            <li>Hämtar data från API</li>  
            <li>Header med ikoner och dynamisk text</li>
            <li>Component som kan återanvändas med olika utseende</li>
        </ul>
}