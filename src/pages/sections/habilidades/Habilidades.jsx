import "./habilidades.css"

import CardHabilidade from "../../components/card_habilidade/CardHabilidade"


import logo from "../../../assets/react.svg"
import react from "../../../assets/react.svg"
import python from "../../../assets/python.png"
import js from "../../../assets/js.png"
import css from "../../../assets/css.png"
import html from "../../../assets/html.png"
import github from "../../../assets/github.png"
import sql from "../../../assets/sql.png"
import flask from "../../../assets/flask.png"
import djngo from "../../../assets/Django-Logo.png"
import fastapi from "../../../assets/FastAPI_logo.svg.webp"

export default function Habilidades() {



    return (
        <div className="habilidades" id="habilidade">

            <div className="grid_view">

                {
                    [1,2].map(el=>{
                        return <div className="animation">
                    <CardHabilidade img={python} name="Python" />
                    <CardHabilidade img={html} name="HTML" />
                    <CardHabilidade img={css} name="CSS" />
                    <CardHabilidade img={js} name="JavaScript" />
                    <CardHabilidade img={react} name="REACT" />
                    <CardHabilidade img={flask} name="FLASK" />
                    <CardHabilidade img={sql} name="PostgreSQL" />
                    <CardHabilidade img={github} name="Git/GitHub" />
                    <CardHabilidade img={djngo} name="Django" />
                    <CardHabilidade img={fastapi} name="FastApi" />
                </div>
                    })
                }

                


            </div>

        </div>
    )
}

