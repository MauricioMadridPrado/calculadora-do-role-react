import ("./FraseComDinheiro.css")

const FraseComDinheiro = (props) => {
    return (
        <section className="fraseComDinheiro">
            <p>{props.frase}<strong>{props.valor}</strong>{props.moeda}</p>
        </section>
    )

}

export default FraseComDinheiro