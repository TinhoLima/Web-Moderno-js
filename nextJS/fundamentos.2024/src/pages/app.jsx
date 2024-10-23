import Cabecalho from "../components/Cabecalho"
import Layout from "../components/Layout"

export default function Exemplo() {
    return (
        <Layout>
            <div>
                <Cabecalho titulo="Next.js & React" />
                <Cabecalho titulo="Fundamentos de Next.js & React" />
            </div>
        </Layout>

    )
}