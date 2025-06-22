import React,{useState} from "react"
function UpdateObjectState() {
    const [car,setCar] = useState([{year:2024,make:"Ford",model:"Mustang"}])
    const [newCar,setNewCar] = useState({year:new Date().getFullYear(),make:"",model:""})

    function handleChange(e) {
    
    const {value,name} = e.target;
    // console.log(value,name);
    setNewCar(prevNewCar => ({...prevNewCar,[name]:value}))
    }

    function removeCarHandler(index) {
        setCar(c => c.filter((_,i)=> i !==index));
    }

    function addNewCar() {
        setCar(prev => [...prev,newCar]);
        setNewCar({year:new Date().getFullYear(),make:"",model:""})
    }

    return(
        <div>
            <h1>List of Car Objects</h1>
            <ul>
                {
                    car.map((carItem,index)=>{
                        return <li key={index} onClick={()=>removeCarHandler(index)}>{carItem.year} {carItem.make} {carItem.model}</li>
                    })
                }
            </ul>
            <input type="number" placeholder="Year" name="year" value={newCar.year} onChange={handleChange} /><br />
            <input type="text" placeholder="Make" name="make" value={newCar.make} onChange={handleChange}/><br />
            <input type="text" placeholder="Model" name="model" value={newCar.model} onChange={handleChange}/><br />
            <button onClick={addNewCar}>Add Car</button>
        </div>
    )
}

export default UpdateObjectState