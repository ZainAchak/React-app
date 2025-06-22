import React, { useState } from "react"

function UpdateObjectUseState() {
    const [car,setCar] = useState({ year:2024,
                                    make:"Ford",
                                    model:"Mustang"})

    function updateYear(e) {
        setCar(car => ({...car,year:e.target.value}))
    }

    function updateMake(e) {
        setCar(car => ({...car,make:e.target.value}))
    }

    function updateModel(e) {
        setCar(car => ({...car,model:e.target.value}))
    }

    return(
        <div>
            <br />
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
            <br />
            <input type="number" value={car.year} onChange={updateYear} />
            <input type="text" value={car.make} onChange={updateMake} />
            <input type="text" value={car.model} onChange={updateModel} />
        </div>
    )
}

export default UpdateObjectUseState