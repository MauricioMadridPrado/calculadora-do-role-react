import ("./CampoDeTexto.css")

const CampoDeTexto = (props) => {


    return (
        <div className="campoDeTexto">
        <label name="produto">{props.nome}</label>
        <input   name="produto" id={props.nome}/>
        </div>
    )
}

export default CampoDeTexto