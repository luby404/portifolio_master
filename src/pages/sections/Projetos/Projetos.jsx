import "./projetos.css"
import { useEffect, useState } from "react"

export default function Projetos() {

    const projetosData = [
        {
            img: "tchova_img.png",
            title: "Tchova",
            categoria: "SaaS / Gestão Financeira",
            descricao: "Aplicação web para pequenos negócios controlarem entradas, saídas e fluxo de caixa diário, substituindo controles manuais em cadernos e planilhas.",
            resultado: "Ajuda empreendedores a terem maior controlo financeiro e reduzirem erros no acompanhamento das movimentações.",
            github: "",
            link: "https://tchova.pythonanywhere.com/",
            stacks: ["Python", "Flask", "SQLite", "JavaScript"]
        },
        {
            img: "sgv.png",
            title: "SGVS-IyaSoft",
            categoria: "Sistema Empresarial",
            descricao: "Sistema de gestão comercial para pequenas empresas, permitindo controlar produtos, fornecedores, vendas, estoque e relatórios operacionais.",
            resultado: "Centraliza operações comerciais e facilita o acompanhamento das vendas e do estoque.",
            github: "https://github.com/luby404/SGV-sistema-gest-o-venda",
            link: "https://sgve.onrender.com/",
            stacks: ["React", "FastAPI", "Python", "Flask"]
        },
        {
            img: "propinangola.png",
            title: "PropinAngola",
            categoria: "Plataforma Digital",
            descricao: "Plataforma digital criada para conectar estudantes, instituições e apoiadores, facilitando processos de apoio financeiro académico e acompanhamento de estudantes.",
            resultado: "Cria uma ponte entre estudantes e pessoas ou organizações interessadas em apoiar a educação.",
            github: "",
            link: "https://propinangola.org/",
            stacks: ["Python", "Flask", "Redis", "JavaScript"]
        },
        {
            img: "gestao_pedidos.png",
            title: "SGP Restaurante",
            categoria: "Sistema de Gestão",
            descricao: "Sistema de gestão para restaurantes com controle de mesas, pedidos, estoque e vendas. Inclui cardápio digital para reduzir erros nos pedidos e melhorar o atendimento.",
            resultado: "Melhora o fluxo de atendimento e facilita o controlo das operações do restaurante.",
            github: "",
            link: "https://sgrestaurante.onrender.com/",
            stacks: ["Python", "Flask", "JavaScript", "HTML/CSS"]
        },
        {
            img: "webevent.png",
            title: "WebEvent",
            categoria: "API / Developer Tool",
            descricao: "Ferramenta para testes e depuração de webhooks em tempo real. Permite receber eventos, visualizar payloads e validar integrações durante o desenvolvimento de APIs.",
            resultado: "Ajuda developers a testarem integrações e identificarem problemas rapidamente.",
            github: "",
            link: "https://webevent.pythonanywhere.com/",
            stacks: ["Python", "Flask", "HTML"]
        },
        {
            img: "saas_cardapio.png",
            title: "Cardápio Digital",
            categoria: "SaaS / Restaurante",
            descricao: "Plataforma de cardápio digital para restaurantes, permitindo atualizar produtos e preços em tempo real através de QR Code.",
            resultado: "Reduz custos com impressões e melhora a experiência do cliente durante o atendimento.",
            github: "",
            link: "",
            stacks: ["React", "FastAPI", "Python"]
        }
    ]

    const num = projetosData.length

    const [index, setIndex] = useState(0)
    const [projeto, setProjeto] = useState(projetosData[0])

    useEffect(() => {
        setProjeto(projetosData[index])
    }, [index])


    function nextProjeto() {
        setIndex((prev) => {
            if (prev + 1 >= num) {
                return 0
            }

            return prev + 1
        })
    }


    function previousProjeto() {
        setIndex((prev) => {
            if (prev - 1 < 0) {
                return num - 1
            }

            return prev - 1
        })
    }


    return (
        <div className="projetos" id="projetos">

            <div className="content_projetos column">

                <div className="row">
                    <span className="text_float">
                        {projeto.categoria}
                    </span>
                </div>


                <div className="column">

                    <div className="row">

                        <h3>
                            {projeto.title}
                        </h3>


                        <div className="row2">

                            <div 
                                className="button" 
                                onClick={previousProjeto}
                            >
                                <i className="ri-arrow-left-line"></i>
                            </div>


                            <div 
                                className="button" 
                                onClick={nextProjeto}
                            >
                                <i className="ri-arrow-right-line"></i>
                            </div>

                        </div>

                    </div>


                    <p className="text_desc">
                        {projeto.descricao}
                    </p>


                    <p className="text_desc">
                        <strong>Resultado:</strong> {projeto.resultado}
                    </p>

                </div>



                <div className="projetos_view">

                    <img 
                        src={`/img/${projeto.img}`} 
                        alt={projeto.title}
                    />

                </div>



                <div className="row2">

                    {
                        projeto.stacks.map((el, index) => (
                            <div 
                                key={index} 
                                className="text_float"
                            >
                                {el}
                            </div>
                        ))
                    }

                </div>



                <div className="row2">


                    {
                        projeto.github &&
                        <a 
                            href={projeto.github} 
                            target="_blank"
                            rel="noreferrer"
                            className="button button2"
                        >
                            <i className="ri-github-fill"></i>
                            <span>
                                Ver Repositorio
                            </span>
                        </a>
                    }



                    {
                        projeto.link &&
                        <a 
                            href={projeto.link} 
                            target="_blank"
                            rel="noreferrer"
                            className="button button2"
                        >
                            <i className="ri-earth-fill"></i>
                            <span>
                                Ver Projeto
                            </span>
                        </a>
                    }


                </div>


            </div>

        </div>
    )
}