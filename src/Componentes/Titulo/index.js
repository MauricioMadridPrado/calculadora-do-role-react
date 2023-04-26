import ("./Titulo.css")

const Titulo = (props) => {
    return (
        <h1 className="titulo">{props.titulo}</h1>
    )
}

export default Titulo