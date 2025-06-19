import React, {useState} from "react"

function UpdateArrayState() {
    
    const [fruits, setFruits] = useState(["Apple","Banana","Orange"]);

    function updateList() {
        //e.preventDefault();
        const inputValue = document.getElementById("fruits");
        const newFood = inputValue.value;
        // setFruits([...fruits,inputValue.value])
        if(newFood) {
            setFruits(f=>[...f,newFood])
        //     setFruits(fruits=>[...fruits,inputValue.value]);
            
             }
        inputValue.value = "";
        
    }

    function removeItem(indexToRemove) {
        setFruits(fruits.filter((_,index)=> index !=indexToRemove ))
    }

    return(
        <div>
            <h1>List of Food</h1>
            <ul>
                {fruits.map((value,index)=>
                    <li key={index} onClick={()=>removeItem(index)}>{value}</li>
                )}
            </ul>
            
            <input  type="text" 
                    name="userInput" 
                    id="fruits" 
                    placeholder="Enter food name"/>
            <button type="button" onClick={updateList}>Add Food</button>
            
        </div>
    )
}

export default UpdateArrayState