import ("./Botao1.css") 

const Botao1 = (props) => {
    return (
        <div  className="botao1">
        <input name={props.tipo} type="submit" value={props.tipo} id={props.tipo}/>
        </div>
    )
}

export default Botao1