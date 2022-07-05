import Expander from "../components/Expander.js"
import FullscreenImage from "../components/FullscreenImage.js"
import codeNinja from "../images/Code-Ninja.webp"
import "./KompetensView.css"

export const KompetensView =
    <section id="kompetens">
        <h2>Kompetens</h2>            
        <Expander title="Programmeringsspråk" headerClass="expander-header" detailsClass="expander-details">
            <ul>
                <li>C#</li>
                <li>JavaScript</li>
                <li>Lite Java, C och C++ </li>
            </ul>
        </Expander>
        <Expander title="Web" headerClass="expander-header" detailsClass="expander-details">
            <ul>
                <li>HTML och CSS</li>
                <li>
                    JavaScript-ramverk
                    <ul>
                        <li>React</li>
                        <li>Svelte</li>
                    </ul>
                </li>
                <li>ASP.NET</li>
                <li>PHP</li>
            </ul>
        </Expander>
        <Expander title="Mobil" headerClass="expander-header" detailsClass="expander-details">
            <ul>
                <li>Android Studio (Java)</li>
                <li>React Native</li>
                <li>Xamarin</li>
            </ul>
        </Expander>
        <Expander title="Windows" headerClass="expander-header" detailsClass="expander-details"  isExpanded={false} >
            <ul>
                <li>Program gjorda i WPF och UWP</li>
                <li>Windows Services/tjänster</li>
            </ul>                            
        </Expander>
        <Expander title="Databaser och API" headerClass="expander-header" detailsClass="expander-details"  isExpanded={false} >
            <ul>
                <li>SQL</li>
                <li>Entity Relationship (ER) modellering</li>
                <li>Normalisering av databastabeller</li>
                <li>.NET Entity Framework</li>
                <li>REST</li>
            </ul>                            
        </Expander>
        <Expander title="IT-säkerhet"headerClass="expander-header" detailsClass="expander-details" isExpanded={false} >
            <ul>
                <li>SQL-injektioner</li>                    
                <li>Cross site scripting (XSS)</li>
                <li>Lösenordshantering</li>         
            </ul>                            
        </Expander>
        <Expander title="Analys och verksamhetsmodellering"headerClass="expander-header" detailsClass="expander-details" isExpanded={false} >
            <ul>
                <li>User Stories</li>                    
                <li>Use Cases</li>
                <li>Läsa och skriva kravspecifikationer</li>
                <li>BPMN-diagram</li>                    
            </ul>                            
        </Expander>
        <Expander title="En code-ninja ;)" headerClass="expander-header" detailsClass="expander-details">
            <FullscreenImage src={codeNinja} alt="Code ninja award" className="code-ninja" />
        </Expander>
        <hr/>
    </section>