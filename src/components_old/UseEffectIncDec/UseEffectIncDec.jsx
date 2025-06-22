import React,{useState,useEffect} from "react"

function UseEffectIncDec() {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        document.title = `Count = ${count}`;
    },[count])

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}

export default UseEffectIncDec