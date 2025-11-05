import "./header.css"


export default function Header() {
    return (
        <header id="header_float">
            <div className="header_content">
                <a href="#home" className="iten_menu">
                    <i className="ri-home-line"></i>
                    <span>Home</span>
                </a>
                <a href="#sobre" className="iten_menu ">
                    <i className="ri-user-line"></i>
                    <span>Sobre</span>
                </a>
                <a href="#habilidade" className="iten_menu">
                    <i className="ri-book-line"></i>
                    <span>Habilidades</span>
                </a>
                <a href="#projetos" className="iten_menu">
                    <i className="ri-function-line"></i>
                    <span>Projetos</span>
                </a>
                <a href="#contato" className="iten_menu">
                    <i className="ri-message-line"></i>
                    <span>Contato</span>
                </a>
            </div>
        </header>
    )
}