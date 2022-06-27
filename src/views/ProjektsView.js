import "./ProjektsView.css"
import {projects} from '../projects/@projects'
import {GiFallDown} from "react-icons/gi"
import Project from '../components/Project.js'

export const ProjektsView =
    <section id="projekt">
        <h2>Projekt</h2>
        <div className="content-section projects-overview">
            {projects.map(p => {
                return(
                    <a key={p.title} className="project" href={"#" + p.id}>
                        <div className="image-wrapper" >
                            <img src={p.images[0].url} alt={p.title + " thumbnail"} />
                            <div className="overlay">Scrolla till <GiFallDown style={{marginLeft:"5px"}}/> </div>
                        </div>
                        <p>{p.title}</p>
                    </a>
                );
            })}
        </div>

        {projects.map(p => {
            return(
                <>
                <Project 
                    key = {p.title}
                    title = {p.title}
                    id = {p.id}
                    github = {p.github}
                    images= {p.images}
                    description = {p.description}
                    details = {p.details}
                /> 
                <hr/>
                </>  
            );
        })}
    </section>