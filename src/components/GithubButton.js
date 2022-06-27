import "./GithubButton.css"
import {DiGithubBadge, DiGithubFull} from "react-icons/di"

export default function GithubButton(props){
    return(
        <a href={props.url} target="_blank" rel="noreferrer" 
            className="github-button" style={props.style}
        >
            <DiGithubBadge className="logo" />
            <DiGithubFull className="text" />
        </a>
    );
}