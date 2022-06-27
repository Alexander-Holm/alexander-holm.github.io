import "./TryItButton.css"
export default function TryItButton ( { text = "Testa på GitHub Pages", url, style } ) {
    return(
        <a href={url} target="_blank" rel="noreferrer" 
            className="try-it-button" style={style}
        >
            {text}
        </a>
    )
}