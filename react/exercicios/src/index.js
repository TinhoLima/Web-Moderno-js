import React from 'react'
import ReactDOM  from 'react-dom'
// ReactDOM - que conversa com a DOM da página.
// ReactNative - que lida com dispositivos. 

// Componentes criados somente com letras maiúsculas. 
// import Teste from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import Teste from './componentes/BomDia'
import Multi, { BoaNoite} from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'


ReactDOM.render(
    // <div>
        <Saudacao tipo="Bom dia" nome="João"/>
    // </div>
, document.getElementById('root'))

