import Layout from "../components/Layout"

export default function Jsx() {
    const titulo = <h1>Jsx é um conceito central</h1>
    const a = 4
    const b = 3

    function subtitulo() {
        return <h2>{"Muito legal!".toUpperCase()}</h2>
    }

    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                {titulo}
                {subtitulo()}
                <p>{a * b}</p>
            </div>
        </Layout>
    )
}