import './styles.css'
import { useState } from 'react'


export function Itens(props) {

    const [check, setCheck] = useState('transparent');

    function handleClick() {
        if (check == 'transparent') {
            setCheck('#025373');
            props.check = true;
        }
        else{
            setCheck('transparent');
            props.check = false;
        }
    }

    return (
        <div id="listTipos" onClick={() => handleClick()} style={{
            borderColor: check
        }}>
            <span >{props.title}</span>
        </div>
    )
}