import React, { useState } from 'react';

function Counter() {
    const [name,setName] = useState("Guest");
    const [quantity,setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [cardSelected, setCardSelected] = useState("");
    const [deliveryOrPick,setDeliveryOrPick] = useState("");

    function updateName(event) {
        setName(event.target.value);
    }
    return(
        <>
            <input  type="text" 
                    placeholder='enter your name' 
                    name='userInput'
                    onChange={updateName}/>
                    <br />
            <label htmlFor="name">Your Name is : {name}</label>
            <br /><br />

            <input  type="number" 
                    name="userInputNum" 
                    id="" placeholder='enter number' 
                    onChange={(e)=> setQuantity(e.target.value)}/><br />
            <label htmlFor="userInputNum">Qunatity: {quantity}</label>
            <br /><br />
            
            <textarea   name="userComment" 
                        id=""
                        placeholder='Enter your comment'
                        onChange={(e)=>setComment(e.target.value)}></textarea><br />
            <label htmlFor="userComment">Comment: {comment}</label>
            <br /><br />

            <select name="cards" id="" onChange={(e)=>setCardSelected(e.target.value)}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Master Card</option>
            </select><br />
            <label htmlFor="cards">Payment Method: {cardSelected}</label>
            <br /><br /><br />

            <input  type="radio" 
                    name="deliveryRadio" 
                    id="pick" 
                    value="Pick UP"
                    onChange={(e)=>setDeliveryOrPick(e.target.value)} />
            <label htmlFor="pick">Pick up</label>
            <br />
            <input  type="radio" 
                    name="deliveryRadio" 
                    id="delivery" 
                    value="Delivery" 
                    onChange={(e)=>setDeliveryOrPick(e.target.value)}/>
            <label htmlFor="delivery">Delivery</label>
            <br /><br />
            <label htmlFor="">Shipping: {deliveryOrPick}</label>
        </>
    )
}

export default Counter

// const [counter, setCounter] = useState(0);
    // function updateCounter(message) {
    //     switch (message) {
    //         case 'increase':
    //                 setCounter(counter+1);
    //             break;
    //         case 'decrease':
    //                 setCounter(counter-1);
    //             break;
        
    //         default:
    //                 setCounter(0);
    //             break;
    //     }
    // }

    // return(
    //     <>
    //     <div className={styles.mainContainer}>
    //         <div>
    //             <h1 className={styles.mainH1}> {counter} </h1>
    //         </div>
    //         <div className={styles.btnContainer}>
    //             <button className={styles.decBtn}
    //                     onClick={()=>updateCounter('decrease')}>Decrement</button>
    //             <button className={styles.resetBtn}
    //                     onClick={()=>updateCounter('reset')}>Reset</button>
    //             <button className={styles.incBtn}
    //                     onClick={()=>updateCounter('increase')}>Increament</button>
    //         </div>
    //     </div>
    //     </>
    // )