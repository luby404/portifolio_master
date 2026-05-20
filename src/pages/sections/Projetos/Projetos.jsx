import "./projetos.css"
import CardProjeto from "../../components/card_projeto/CardProjeto"
import { useEffect, useState } from "react"


import propinangola from "../../../assets/projeto/propinangola.png"
import gestao_pedidos from "../../../assets/projeto/gestao_pedidos.png"
import cardapio from "../../../assets/projeto/saas_cardapio.png"
import sgv from "../../../assets/projeto/sgv.png"

export default function Projetos() {

    const projetosData = [
        {
            img: propinangola,
            title: "PropinaAngola",
            descricao: "O nosso compromisso é acompanhar o estudante ao longo de toda a sua jornada académica, promovendo iniciativas que apoiam a formação, o desenvolvimento pessoal, o bem-estar e a conclusão do curso. Atuamos em parceria com universidades, instituições, empresas e sociedade civil, criando soluções que reforçam a inclusão, a cidadania e o futuro do ensino superior no país.",
            github: "",
            link: "https://propinangola.org/",
            stacks: ["Python", "Html", "Css", "Redis", "JavaScript", "Flask"]
        },
        {
            img: sgv,
            title: "SGVS-IyaSoft",
            descricao: "Sistema de gestão de vendas e estoque para pequenas empresas, focado em usabilidade e eficiência na administração de produtos, fornecedores e operações de venda. Usuario: ricardo Senha:admin",
            github: "https://github.com/luby404/SGV-sistema-gest-o-venda",
            link: "https://sgve.onrender.com/",
            stacks: ["Python", "React", "FastApi", "Flask"]
        },
        {
            img: gestao_pedidos,
            title: "SGP pedidos",
            descricao: "Um sistema focado em gestão de pedidos, mesas, estoque e vendas com relatorios personalizados. O sistema oferece um cardapio interativos onde os clientes podem selecionar seus produtos e enviar para o bolcão sem ficar chamando o garson toda hora evitando erros e deixando o aentimento mais eficiente.",
            github: "",
            link: "https://sgrestaurante.onrender.com/",
            stacks: ["Python", "Flask", "JavaScript", "Html", "Css"]
        },
        {
            img: cardapio,
            title: "Carddapio Digital",
            descricao: "Restaurantes perdem dinhero imprimindo novos cardapio sempre que a uma nova atualização nos preços dos produtos ou por outro motivo. por essa rasão desenvolvi uma Saas focado exatamente nessa problema, um cardapio inteligete onde o cliente so precisa scanear um codigo Qr Code e tera acesso ao cardapio sempre atualizado. ",
            github: "",
            link: "",
            stacks: ["Python", "React", "FastApi", "Flask"]
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFp7DCicztwjueNHtfLtqBnA8jBMiok1wOtw&s",
            title: "Tchova",
            descricao: "O Tchova é uma aplicação web criada para simplificar o controle de caixa diário de pequenos negócios. Sabemos que muitos empreendedores ainda controlam entradas e saídas no caderno, no WhatsApp ou apenas de cabeça. Isso gera erros, perda de dinheiro e falta de clareza sobre o lucro real.",
            github: "",
            link: "https://thova.onrender.com/",
            stacks: ["Python", "React", "FastApi", "Flask"]
        }
    ]
    const num = projetosData.length
    var [index, setIndex] = useState(0)
    var [projeto, setProjeto] = useState(projetosData[index])
    useEffect(() => {
        setProjeto(projetosData[index])
    }, [index])

    return (
        <div className="projetos" id="projetos">

            <div className="content_projetos column">

                <div className="row">
                    <span className="text_float">projetos</span>
                </div>

                <div className="column">
                    <div className="row">
                        <h3>{projeto.title}</h3>
                        <div className="row2">
                            <div className="button" onClick={() => {
                                index -= 1
                                index < 0 ? index = num - 1 : index = index
                                setIndex(index)
                            }}>
                                <i className="ri-arrow-left-line"></i>
                            </div>
                            <div className="button" onClick={() => {
                                index += 1
                                index >= num ? index = 0 : index = index
                                setIndex(index)
                            }}>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>

                    <p className="text_desc">{projeto.descricao}</p>
                </div>

                <div className="projetos_view">

                    <img src={projeto.img} alt="" />

                </div>

                <div className="row2">
                    {
                        projeto.stacks.map((el, index) => {
                            return <div key={index} className="text_float">{el}</div>
                        })
                    }
                </div>

                <div className="row2">

                    {
                        projeto.github != "" ? <a href={projeto.github} target="_blank" className="button button2">
                            <i className="ri-github-fill"></i>
                            <span>Ver Repositorio</span>
                        </a> : <></>
                    }
                    {
                        projeto.link != "" ?
                            <a href={projeto.link} target="_blank" className="button button2">
                                <i className="ri-earth-fill"></i>
                                <span>Ver Projeto</span>
                            </a> : <></>
                    }
                </div>

            </div>

        </div>
    )
}