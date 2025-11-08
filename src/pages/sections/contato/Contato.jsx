import "./contato.css"

export default function Contato() {
    return (
        <div className="contato" id="contato">
            <h1>Contato</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae soluta quidem aliquam unde fugit quo maiores numquam temporibus omnis!
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