import { ScrollReveal } from "../../components/ScrollReveal"
import "./home.css"

export default function Home() {
    return (
        <ScrollReveal>

        <div className="home" id="home">
            <div className="column infos_hero">

                <span className="text-app text_float">Olá, eu sou</span>
                <strong className="name_user">Ricardo Cayoca</strong>
                <span className="text-app text-color">
                    Desenvolvedor Full-Stack, Especializado na construção de aplicações escaláveis desde a sua concepção.
                    Construo sistemas digitais que ajudam empresas a automatizar processos e melhorar operações. 
                    
                </span>
                

                <ScrollReveal>

                <div className="row2 center">

                    <a href="#projetos" className="button">
                        <span>Ver Projetos</span>
                    </a>
                    <a href="#contato" className="button button2">
                        <span>Vamos Conversar</span>
                    </a>

                </div>
                </ScrollReveal>

            </div>
        </div>
        </ScrollReveal>
    )
}