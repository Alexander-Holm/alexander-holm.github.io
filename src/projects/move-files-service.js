const imageFolder = "images/projects/civilization drafter/";

export const moveFilesService = {
	title : "Move-files-service",
	github : "https://github.com/Alexander-Holm/move-files-service",
	images : [
		{url: imageFolder + "CivDrafter3.png", description: "Kopiera resultat som text"},
		{url: imageFolder + "CivDrafter4.png", description: "Kopiera resultat som bild"},
	],
	description: 
        <div>
            <p>
                Windows-service som flyttar filer vid ett visst klockslag och loggar det i en .txt-fil.
            </p>
        </div>,
    details: 
        <div>
            <ul>
                <li>Gjord i C#</li>       
                <li>Filhantering</li>    
                <li>Windows-event</li>    
            </ul>
        </div>
}