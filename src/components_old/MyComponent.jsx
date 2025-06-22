import React, {useState} from "react"

function MyComponent(props) {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed,setIsEmployed] = useState(false);

    const updateName = () => {
        setName('Zain');
        console.log(name);
    }

    const updateAge = () => {
        setAge(age+1);
        console.log(age);
    }

    const toggleEmployed = ()=>{
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age : {age}</p>
            <button onClick={updateAge}>Increament Age</button>

            <p>Employed : {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployed}>Toggle</button>
        </div>
    )
}

export default MyComponent