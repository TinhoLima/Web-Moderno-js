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
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


ReactDOM.render(
    // <div>
        <Pai nome="Alison" sobrenome="Coutinho">
            <Filho nome ="Pedro" sobrenome="Silva" />
            <Filho nome="Paulo"sobrenome="Silva" />
            <Filho nome="Carla" sobrenome="Silva" />
        </Pai>
    // </div>
, document.getElementById('root'))

