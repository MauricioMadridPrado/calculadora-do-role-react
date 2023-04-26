import Calcula from "../Calcula"
import FraseComDinheiro from "../FraseComDinheiro"
import Lista from "../Lista"

import ("./Resultado.css")

const Resultado = () => {


    
    return (
        <section className="resultado">
            <FraseComDinheiro 
            frase="Total em produtos " 
            valor="22.5" moeda=" R$"

            />
            <Calcula/>
            <FraseComDinheiro 
            frase="Total por amigo " 
            valor="11.25" 
            moeda=" R$"

            />
            <Lista/>
        </section>
    )

}

export default Resultado