import "./sobre.css"

import ricardo from "../../../assets/ricardo2.png"
import { ScrollReveal } from "../../components/ScrollReveal"

export default function Sobre() {

    const stacks_list = ["Back-End", "Font-End", "Git/GitHub", "Devops"]

    return (
        <div className="sobre" id="sobre">

            <ScrollReveal>

                <div className="content_sobre">
                    <div className="center">
                        <span className="text_float">Sobre mim</span>
                    </div>
                    
                    <div className="row_app">

                        <div className="banner">

                            <img src={ricardo} alt="" />

                        </div>
                        <div className="infos column">

                            <div className="row2">

                                <div className="card_infos">
                                    <i className="ri-user-line"></i>
                                    <span>Experiência</span>
                                    <p>
                                        +5 anos
                                    </p>
                                </div>
                                <div className="card_infos">

                                    <i className="ri-star-fill"></i>
                                    <span>Projetos</span>
                                    <p>
                                        +10 projetos
                                    </p>

                                </div>
                                <div className="card_infos">

                                    <i className="ri-earth-fill"></i>
                                    <span>Backend</span>
                                    <p>
                                        100% Focado
                                    </p>

                                </div>

                            </div>
                            <p className="text_sobre">
                                Olá, sou o Ricardo Cayoca. Como desenvolvedor Full Stack,
                                dedico-me a transformar ideias em aplicações robustas e escaláveis
                                desde a primeira linha de código. Combinando o poder de tecnologias
                                como Python, JavaScript e React, crio ecossistemas digitais eficientes e modernos.
                            </p>
                            <p className="text_sobre">
                                Mais do que apenas codificar funcionalidades,
                                o meu compromisso é projetar soluções estratégicas que sustentem o crescimento de negócios,
                                lidem com a complexidade técnica e permitam a evolução fluida do produto ao longo do tempo.
                            </p>


                            <div className="row2">
                                {
                                    stacks_list.map((el) => {
                                        return (
                                            <span className="text_float">{el}</span>
                                        )
                                    })
                                }
                            </div>

                            <div className="row">
                                <a href="#contato" className="button button2">
                                    <span>Vamos Conversar</span>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>
            </ScrollReveal>

        </div>
    )
}
