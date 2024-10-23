import Link from "next/link"
import styles from "../styles/Layout.module.css"

// Nosso layout para as outras páginas
export default function Layout(props) {
    return (
        <div className={styles.Layout}>
            <div className={styles.cabecalho}>
                <Link href="/">Voltar</Link>
                <h1>{props.titulo ?? "Mais um exemplo"}</h1>
            </div>
            <div className={styles.conteudo}>
{/* Toda informação que está dentro de "Layout", será referenciada como "children". 
Por isso utilizamos "Props.children" para renderizar o conteúdo. */}
                {props.children}
            </div>
        </div>
    )
}