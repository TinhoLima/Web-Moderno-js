import Layout from '../components/Layout'
import estilo from '../styles/Estiloso.module.css'

export default function Estiloso() {
    return (
        <Layout titulo='Exemplo de CSS modularizado'>
            <div className={estilo.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}