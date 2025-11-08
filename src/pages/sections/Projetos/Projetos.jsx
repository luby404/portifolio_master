import "./projetos.css"
import CardProjeto from "../../components/card_projeto/CardProjeto"

export default function Projetos(){
    return (
        <div className="projetos" id="projetos">
            <h1>projetos</h1>
            <div className="grid_projects">

                <CardProjeto/>
                <CardProjeto/>
                <CardProjeto/>
                <CardProjeto/>

                
            </div>
        </div>
    )
}