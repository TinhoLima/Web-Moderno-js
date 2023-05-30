import React, {Fragment} from "react";

export default props => 
    <Fragment>
        <h1>Bom dia {props.nome}!!</h1>
        <h2>Idade de {props.idade} anos</h2>
    </Fragment>
    // Precisamos adicionar uma tag que envolva as demais pois um componente aceita somente uma única tag. Utilizamos o <React.Fragment> mas poderíamos usar uma <div>. 

//     Formato array
// export default props => [
//     <h1>Bom dia {props.nome}!!</h1>,
//     <h2>Idade de {props.idade} anos</h2>
// ]