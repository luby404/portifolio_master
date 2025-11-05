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
                    <div className="button button2">
                        <i className="ri-phone-fill"></i>
                        <span>Ligar Agora</span>
                    </div>
                    <div className="button button2">
                        <i className="ri-whatsapp-fill"></i>
                        <span>Enviar Messagem</span>
                    </div>
                    
                    <div className="button button2">
                        <i className="ri-github-fill"></i>
                        <span>GitHub</span>
                    </div>
                    <div className="button button2">
                        <i className="ri-mail-fill"></i>
                        <span>Email</span>
                    </div>
                </div>

            </div>

        </div>
    )
}