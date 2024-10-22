export default function Jsx() {
    const titulo = <h1>Jsx é um conceito central</h1>
    const a = 4
    const b = 3

    function subtitulo() {
        return <h2>{"Muito legal!".toUpperCase()}</h2>
    }
    return (
        <div>
            {titulo}
            <p>{a * b}</p>
            {subtitulo()}
        </div>
    )
}