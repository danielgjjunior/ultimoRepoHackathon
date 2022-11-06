import { Header } from "../../components/header/Header"
import star from "../../assets/star.svg";
import starChecked from "../../assets/starChecked.svg";
import './rate.css';
import { useRef } from "react";


export function Rate() {

    const starChecked1 = useRef();
    const starChecked2 = useRef();
    const starChecked3 = useRef();
    const starChecked4 = useRef();
    const starChecked5 = useRef();
    const numInput = useRef();

    function handleClick(e) {
        let lastIndex = e.target.id
        let parent = e.target.parentElement;

        for (let i = 0; i < lastIndex; i++) {
            parent.children[i].src = starChecked;

        }
        numInput.current.value = lastIndex;
    }

    return (
        <div>
            <Header />
            <h1>Avalie nosso atendimento</h1>
            <div className="starContainer">
                <img src={star} id="1" ref={starChecked1} onClick={(e) => handleClick(e)} />
                <img src={star} id="2" ref={starChecked2} onClick={(e) => handleClick(e)} />
                <img src={star} id="3" ref={starChecked3} onClick={(e) => handleClick(e)} />
                <img src={star} id="4" ref={starChecked4} onClick={(e) => handleClick(e)} />
                <img src={star} id="5" ref={starChecked5} onClick={(e) => handleClick(e)} />
            </div>
            <form action="">
                <input type="number" ref={numInput} id="hiddenInput" />
                <input type="textarea" className="textarea" placeholder="Fale sobre a sua experiência"/>

                <input type="submit" value="Enviar" className='containerBtn'  />
            </form>
        </div>
    )
}