import Link from "next/link"
import Navegador from "../components/Navegador"

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap: 'wrap'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" cor="crimson"/>
            <Navegador texto="App" destino="/app" cor="cadetblue"/>
            <Navegador texto="Jsx" destino="/jsx"/>
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green"/>
            <Navegador texto="Navegação #02" destino="/cliente/RJ-1/10" cor="coral"/>
            <Navegador texto="Componente com estado" destino="/estado"/>
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="purple"/>
        </div>
    )
}