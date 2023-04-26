import("./Lista.css")


const Lista = (props) => {
    return (
        <div className="lista">
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Valor</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CACHAÇA</td>
                        <td>7,50R$</td>

                         <td><input type="button" value="X" /></td>

                    </tr>

                    <tr>
                        <td>LIMÃO</td>
                        <td>3,50R$</td>

                        <td><input type="button" value="X" /></td>

                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Lista