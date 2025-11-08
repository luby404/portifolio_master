import "./contato.css"

export default function Contato() {
    return (
        <div className="contato" id="contato">
            <h1>Contato</h1>
            <p className="text_contato">
                Se você deseja entrar em contato comigo, seja para discutir oportunidades de trabalho, colaborar em projetos interessantes ou simplesmente para dizer olá, fique à vontade para me enviar uma mensagem através dos links abaixo. Estou sempre aberto a novas conexões e ansioso para ouvir de você!
            </p>


            <div className="content_contato">

                <div className="grid_links">
                    <a href="tel:+244931617941" className="button button2">
                        <i className="ri-phone-fill"></i>
                        <span>Ligar Agora</span>
                    </a>
                    <a href="https://wa.me/244931617941" target="_blank" className="button button2">
                        <i className="ri-whatsapp-fill"></i>
                        <span>Enviar Messagem</span>
                    </a>
                    
                    <a href="https://github.com/luby404" target="_blank" className="button button2">
                        <i className="ri-github-fill"></i>
                        <span>GitHub</span>
                    </a>
                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ricardocayoca2@gmail.com" target="_" className="button button2">
                        <i className="ri-mail-fill"></i>
                        <span>Email</span>
                    </a>
                </div>

            </div>

        </div>
    )
}