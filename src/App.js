import Formulario from "./Componentes/Formulario";
import Resultado from "./Componentes/Resultado";
import Rodape from "./Componentes/Rodape";
import Titulo from "./Componentes/Titulo";



function App() {
  return (
    <div className="App">
      <header>
        <Titulo titulo={"Calculadora do rolê"} />
      </header>
      <main className="principal">
        <Formulario />
        <Resultado />
      </main>

      <Rodape/>
    </div>
  );
}

export default App;
