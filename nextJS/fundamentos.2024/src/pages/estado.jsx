import Layout from "../components/Layout";
import { useState } from "react";

export default function Estado() {
    // const state = useState(0) - useState é um array de 2 posições: (0, func)

    // let numero = state[0]  - 'numero' assumi a primeira posição, que é do valor.

    // let alterarNumero = state[1]  - 'alterarNumero' assumi a segunda, que é o lugar de uma função. Assim o array está completo: (numero, alterarNumero()).

    const [numero, setNumero] = useState(0) //React Hooks

    function incrementar() {
        // alterarNumero(numero + 1)
        setNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com estado">
            <h1>Aqui está sendo utilizado o React Hooks com 'useState'</h1>
            <p>Você clicou {numero} vezes</p>
            <button onClick={incrementar}>Aumentar contador</button>
        </Layout>
    )
}