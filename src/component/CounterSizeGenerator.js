import { useState } from "react";
import "../styles/Counter.css";

function CounterSizeGenerator(props) {
    const [size, setSize] = useState(0);

    function handleChangeSize(event) {
        setSize(event.target.value)

        props.updateCounterSize(parseInt(event.target.value))
    }
    return (
        <div className="headerDesign">
            <span>Size:</span>
            <input type="number" min="0" value={size} onChange={handleChangeSize}></input>
        </div>
    );
}

export default CounterSizeGenerator;