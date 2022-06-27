import "./KontaktView.css"
import {GoMail} from "react-icons/go"
import {VscFilePdf} from "react-icons/vsc"

export const KontaktView =
    <section id="kontakt">
        <div className="content-section">
            <h2>Kontakt &amp; CV</h2>

            <div id="email">
                <h4>Email:</h4>
                <p>alex.holm@live.com</p>
                <a href="mailto:alex.holm@live.com">
                    <GoMail className="icon"/>
                </a>                            
            </div>

            <a id="cv" href="https://www.google.com" target="_blank" rel="noreferrer">
                <h4>CV</h4>
                <VscFilePdf className="icon"/>
            </a>

        </div>
    </section>