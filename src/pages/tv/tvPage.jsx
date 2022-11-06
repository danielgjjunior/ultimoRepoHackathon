import React from 'react'
import {QRCode} from '../../components/QrCode/App'
import {Button} from '../../components/button/Button'
import './index.css'

export function TelaTv(){

return(
    <div>
        <div className="text">
            <span>Escaneie o código para pegar sua senha.</span>
            </div>
            <br/><br/>
        <QRCode/>
        <Button bg="blue" title="Gerar senha sem QR-Code" color="white" />
    </div>
)

}