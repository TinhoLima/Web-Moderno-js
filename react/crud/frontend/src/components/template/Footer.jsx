import './Footer.css'
import React from 'react'


export default props =>
    <footer className="footer">
        <button type="button" onclick='teste()'>on / off</button>
        <span>
            Desenvolvido com <i className='fa fa-heart text-danger'></i> por<strong> Cod<span className='text-danger'>3</span>r</strong>
        </span>
    </footer>