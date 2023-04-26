import ("./Botao2.css") 

const Botao2 = (props) => {
    return (
        <div  className="botao2">
        <input onClick={props.acao} name={props.tipo} type="button" value={props.tipo} id={props.tipo}/>
        </div>
    )
}

export default Botao2