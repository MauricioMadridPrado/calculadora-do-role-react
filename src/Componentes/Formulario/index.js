import Botao1 from "../Botao1"
import Botao2 from "../Botao2"
import CampoDeTexto from "../CampoDeTexto"


import("./Formulario.css")




const Formulario = () => {

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log("Salvo!")
    }
    const resetaLista = () => {
        console.log("resetou")
    }

    return (

        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <CampoDeTexto nome={"produto"}

                />
                <CampoDeTexto nome={"valor"}

                />
                <Botao1 tipo={"enviar"} />
                <Botao2 acao={resetaLista} tipo={"reseta lista"} />
            </form>
        </section>
    )
}

export default Formulario