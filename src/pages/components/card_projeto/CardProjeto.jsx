import "./cardprojeto.css"

export default function CardProjeto( {img, descricao, github, link} ){
    return (
        <div className="cardprojeto_content">
            <img src="" alt="" />

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis sed neque veritatis repellendus odio minima earum a nemo sapiente animi eius ad hic aliquid unde dolorem quam, quasi numquam.
            </p>
            <div className="row2">

                <div className="button">
                    <span>GitHub</span>
                </div>

                <div className="button button2">
                    <span>Ver Projeto</span>
                </div>
                

            </div>
        </div>
    )
}