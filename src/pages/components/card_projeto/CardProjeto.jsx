import "./cardprojeto.css"

export default function CardProjeto( {img, title, descricao, github, link} ){
    return (
        <div className="cardprojeto_content">
            <img src={img} alt="" />

            <h3>{title}</h3>  
            <p>
                {descricao}
            </p>
            <div className="row2">

                <a href={github} target="_blank" className="button">
                    <span>GitHub</span>
                </a>

                <a href={link} target="_blank" className="button button2">
                    <span>Ver Projeto</span>
                </a>
                

            </div>
        </div>
    )
}