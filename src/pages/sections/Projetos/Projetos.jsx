import "./projetos.css"
import CardProjeto from "../../components/card_projeto/CardProjeto"

export default function Projetos(){

    const projetosData = [
        {
            img: "https://magis5.com.br/wp-content/uploads/2024/11/capa-vendas-e-controle-de-estoque-800x400.webp",
            title: "SGVS-IyaSoft",
            descricao: "Sistema de gestão de vendas e estoque para pequenas empresas, focado em usabilidade e eficiência na administração de produtos, fornecedores e operações de venda. Usuario: ricardo Senha:admin",
            github: "https://github.com/luby404/SGV-sistema-gest-o-venda",
            link: "https://sgve.onrender.com/"
        },
        {
            img: "https://hbapos.com/wp-content/uploads/2025/02/Restaurant-cashier-is-using-the-HBA-S100-Pos-system-to-collect-cash.jpg",
            title: "SGR",
            descricao: "Um sistema de gestão de restaurante com controle de estque vendas e comandas, Uma solução simples para gerenciar o seu restaurante.",
            github: "",
            link: "https://sgrestaurante.onrender.com/"
        },
        {
            img: "https://storage.googleapis.com/clean-finder-353810/$hqd9BdF6lpJaFYRAa7SeLzXJg8BZIOMDN4Q2YgzGiQQ1m3Xpr3RNOT",
            title: "Singular",
            descricao: "Um Framework python fullstack para desenvolvimento rápido de aplicações web, com foco em escalabilidade, segurança e facilidade de uso. com UI intuitiva raetiva e componentes reutilizáveis",
            github: "",
            link: ""
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFp7DCicztwjueNHtfLtqBnA8jBMiok1wOtw&s",
            title: "Tchova",
            descricao: "O Tchova é uma aplicação web criada para simplificar o controle de caixa diário de pequenos negócios. Sabemos que muitos empreendedores ainda controlam entradas e saídas no caderno, no WhatsApp ou apenas de cabeça. Isso gera erros, perda de dinheiro e falta de clareza sobre o lucro real.",
            github: "",
            link: "https://thova.onrender.com/"
        }
    ]

    return (
        <div className="projetos" id="projetos">
            <span className="text_float">projetos</span>
            <div className="grid_projects">

                {projetosData.map((projeto, index) => (
                    <CardProjeto
                        key={index}
                        img={projeto.img}
                        title={projeto.title}
                        descricao={projeto.descricao}
                        github={projeto.github}
                        link={projeto.link}
                    />
                ))}

            </div>
        </div>
    )
}