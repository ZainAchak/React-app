import React,{useRef} from "react"
export default function UseRefeg() {
    const count = useRef(0);
    function handleClick() {
        count.current++;
        console.log(count.current);
    }
    return(
        <div>
            <button onClick={handleClick}>click me</button>
            <p>{count.current}</p>
        </div>
    )
}