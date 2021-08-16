import { useState } from "react"
import "../styles/Counter.css"

function Counter() {
    const [number, setNumber] = useState(0);

    function increase() {
        setNumber(number + 1);
    }

    function decrease() {
        setNumber(number - 1);
    }

    return (
        <div className="counter">
            <button id="increaseBtn" onClick={increase}>+</button>
            <span>{number}</span>
            <button id="decreaseBtn" onClick={decrease}>-</button>
        </div>
    );
}

export default Counter;