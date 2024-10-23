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
            <Navegador texto="Estiloso" destino="/estiloso"/>
            <Navegador texto="App" destino="/app"/>
            <Navegador texto="Jsx" destino="/jsx"/>
        </div>
    )
}