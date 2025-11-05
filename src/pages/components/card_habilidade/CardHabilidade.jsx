import "./card_habilidade.css"

export default function CardHabilidade({ img, name }) {
    return (
        <div className="card_habilidade">
            <img src={img} alt="" />
            <span>{name}</span>
        </div>
    )
}