import "./sobre.css"

import ricardo from "../../../assets/ricardo2.png"

export default function Sobre() {
    return (
        <div className="sobre" id="sobre">

            <div className="row2">
                <h2>Sobre mim</h2>
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
                                Mais de 5 anos
                            </p>
                        </div>
                        <div className="card_infos">

                            <i className="ri-star-fill"></i>
                            <span>Projetos</span>
                            <p>
                                Mais de 7 projetos concluídos
                            </p>

                        </div>

                    </div>


                    <p className="text_contato">
                        Passei os últimos meses trabalhando remotamente,
                        com HTML, CSS, JavaScript e Python, desenvolvendo desde landing pages aplicativos web até APIs.
                        Minha experiência como dev chefe em uma empresa de Finças me ajudou
                        a colaborar com outros desenvolvedores. Além disso,
                        trabalhar com dev chefe não é fácil, mas me tornou mais eficiente,
                        produtivo e ágil, mesmo em um ambiente bastante estressante,
                        uma habilidade essencial na área de tecnologia.
                    </p>

                    <div className="row">
                        <a href="#contato" className="button button2">
                            <span>Vamos Conversar</span>
                        </a>
                    </div>

                </div>

            </div>

        </div>
    )
}
