import Jsx from "./jsx";
import Estiloso from "./estiloso";
import Cabecalho from "../components/Cabecalho"
import Navegador from "../components/Navegador"
import Link from "next/link";

export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexWrap: 'wrap'
    }}>
      <Navegador texto="Estiloso" destino="/estiloso" />
      <Navegador texto="Estiloso" destino="/estiloso" cor="crimson" />
      <Navegador texto=" JSX" destino="/jsx" />
      <Navegador texto="Navegação #01" destino="/navegacao" cor="green" />
      <Navegador texto="Navegação #02" destino="/cliente/sp-12/123" cor="green" />
      <Navegador texto="Componente com Estado" destino="/estado" cor="pink" />
    </div>
  );
}
