import "./projetos.css"
import CardProjeto from "../../components/card_projeto/CardProjeto"

export default function Projetos(){

    const projetosData = [
        {
            img: "https://praedium.com.br/wp-content/uploads/exemplo-landing-page-tradicional.png",
            title: "Leading Page Imobiliária",
            descricao: "Sistema de Gestão Imobiliária para pequenas e médias empresas. Focado em usabilidade e eficiência na administração de imóveis, proprietários, clientes e processos de venda e arrendamento.",
            github: "",
            link: ""
        },
        {
            img: "https://magis5.com.br/wp-content/uploads/2024/11/capa-vendas-e-controle-de-estoque-800x400.webp",
            title: "Sistema de Gestão",
            descricao: "Sistema de gestão de vendas e estoque para pequenas empresas, focado em usabilidade e eficiência na administração de produtos, fornecedores e operações de venda. Usuario: ricardo Senha:admin",
            github: "https://github.com/luby404/SGV-sistema-gest-o-venda",
            link: "https://sgv-sistema-gest-o-venda.onrender.com/"
        },
        {
            img: "https://d1rv23qj5kas56.cloudfront.net/img/portal-2015/lp/lp-personal-websites-article-01-en.png",
            title: "Blog Pessoal Responsivo",
            descricao: "Frontend de um blog pessoal com design responsivo e funcionalidades interativas, permitindo aos usuários ler, comentar e compartilhar artigos facilmente.",
            github: "",
            link: ""
        },
        {
            img: "https://storage.googleapis.com/clean-finder-353810/$hqd9BdF6lpJaFYRAa7SeLzXJg8BZIOMDN4Q2YgzGiQQ1m3Xpr3RNOT",
            title: "Singular",
            descricao: "Um Framework python fullstack para desenvolvimento rápido de aplicações web, com foco em escalabilidade, segurança e facilidade de uso. com UI intuitiva raetiva e componentes reutilizáveis",
            github: "",
            link: ""
        }
    ]

    return (
        <div className="projetos" id="projetos">
            <h1>projetos</h1>
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