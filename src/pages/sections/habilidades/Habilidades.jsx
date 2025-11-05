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

export default function Habilidades(){



    return (
        <div className="habilidades" id="habilidade">

            <h2>Habilidades</h2>
            <div className="grid_view">

                <CardHabilidade img={python} name="Python" />
                <CardHabilidade img={html} name="HTML" />
                <CardHabilidade img={css} name="CSS" />
                <CardHabilidade img={js} name="JavaScript" />
                <CardHabilidade img={react} name="REACT" />
                <CardHabilidade img={flask} name="FLASK" />
                <CardHabilidade img={sql} name="PostgreSQL" />
                <CardHabilidade img={github} name="Git/GitHub" /> 


            </div>

        </div>
    )
}

