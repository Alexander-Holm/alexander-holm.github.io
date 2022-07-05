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
        <article id={id} className="project" >
            <div className="header" >
                <h3 style={{marginRight: "15px"}}>{title}</h3>
                {github && <GithubButton url={github} />}
            </div>
            
            <Carousel images={images}/>

            <div className='description'>
                {description}
            </div>

            <Expander title="Detaljer" isExpanded={true}> {details} </Expander>

            <hr/>

        </article>
    );
}