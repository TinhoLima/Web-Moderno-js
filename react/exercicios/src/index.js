import React from 'react'
import ReactDOM  from 'react-dom'
// Componentes criados somente com letras maiúsculas. 
// import Teste from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import Teste from './componentes/BomDia'


// só é possível a leitura da tag h1 devido a importação do React
const elemento = <h1>React 2</h1>

// ReactDOM - que conversa com a DOM da página.
// ReactNative - que lida com dispositivos. 

ReactDOM.render(<BomDia nome="Alison" idade={27}/>, document.getElementById('root'))

