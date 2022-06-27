import '../App.css';
import './Project.css';
import Carousel from './Carousel.js';
import GithubButton from './GithubButton';
import Expander from './Expander';

export default function Project({
    title,
    id,
    github,
    images,
    description,
    details
}){    
    return(
        <div id={id} className="content-section project-container" >
            <div className="content-section header" >
                <h3 style={{marginRight: "15px"}}>{title}</h3>
                {github && <GithubButton url={github} />}
            </div>
            
            <Carousel images={images}/>

            <div className="content-section description" >
                {description}
                <Expander title="Detaljer" style={{marginTop:"20px"}} isExpanded={true}> {details} </Expander>
            </div>

        </div>
    );
}