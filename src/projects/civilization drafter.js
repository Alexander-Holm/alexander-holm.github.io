const imageFolder = "images/projects/civilization drafter/";

export const civilizationDrafter = {
	title : "Civilization Drafter",
    id : "Civilization-Drafter",
	github : "https://github.com/Alexander-Holm/civilization-drafter",
	images : [
		{url: imageFolder + "1.png", description: "Första sidan"},  
		{url: imageFolder + "quick-toggle.gif", description: "[GIF] Quick-toggle"},
        {url: imageFolder + "minimum.gif", description: "[GIF] Knappen stängs av/på"},
		{url: imageFolder + "results.png", description: "Resultat-sidan"},
		{url: imageFolder + "copyText.png", description: "Kopiera resultat som text"},
		{url: imageFolder + "copyImage.png", description: "Bilden man får när man kopierar resultatet som bild"},
	],
	description: 
        <>
        <p>
            Ett program som slumpar fram länder från spelet Civilization VI och fördelar till spelare. 
            Resultatet går att kopiera som text eller bild så att man enkelt kan dela det med andra för multiplayer.    
        </p>
        <p>
            Användaren kan välja till eller bort vilka länder som kan slumpas ut till spelarna.
            Minsta antalet länder som behöver väljas och antalet nuvarande valda visas samt uppdateras av förändringar.
            Är inte tillräckligt många valda går det inte att fortsätta till lottningen.
            En ”quick-toggle” sätter på eller stänger av alla länder som hör till en viss expansion. 
            Inställningarna och vilka länder som är valda går att spara så att de är förvalda nästa gång programmet öppnas.
        </p>
        <p>
            Länderna läses från en JSON-fil så det finns möjlighet att lägga till nya i efterhand utan att ändra i .exe-filen. 
        </p>
        </>,
    details:
        <ul>
            <li>
                Gjord i Windows Presentation Foundation (WPF)
                <ul>
                    <li>C#</li>
                    <li>XAML för GUI</li>
                    <li>
                        Model View ViewModel - arkitektur
                        <ul>
                            <li>Data binding</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Läsa och skriva till filer med JSON</li>
            <li>Unit testing med xUnit</li>         
            <li>
                Windowsfunktioner
                <ul>
                    <li>Fönster-ikon</li> 
                    <li>Ikon för .exe</li>   
                    <li>Kopiera till Clipboard/Urklipp</li>
                </ul>
            </li>           
        </ul>
}