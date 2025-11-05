import "./home.css"

export default function Home() {
    return (
        <div className="home" id="home">
            <div className="column">

                <span className="text-app">Olá, eu sou</span>
                <strong className="name_user">Ricardo Cayoca</strong>
                <span className="text-app text-color">Desenvolvedor Full-stack</span>

                <div className="row2">

                    <a href="#projetos" className="button">
                        <span>Ver Projetos</span>
                    </a>
                    <a href="#contato" className="button button2">
                        <span>Vamos Conversar</span>
                    </a>

                </div>

            </div>
        </div>
    )
}