import React, {useState} from "react";
import styles from './ColorPicker.module.css'

function ColorPicker() {
    const [color,setColor] = useState("#FFFFFF");
    return(
        <div className={styles.ColorPickerContainer}>
            <h1>Color Picker</h1>
            <div className={styles.ColorDisplay} style={{backgroundColor:color, boxShadow:`2px 2px 45px ${color}`}}>
                <p>Selected Color: <br /><br /> <b>{color}</b></p>
            </div>

            <label htmlFor="pickaCOlor">Select a Color: </label>
            <input  type="color" 
                    name="" id="pickaCOlor" 
                    value={color} 
                    onChange={(e)=>{
                        setColor(e.target.value);
                        //e.target.style.boxShadow = `2px 2px 45px ${e.target.value}`}} 
                    }
                    
                }
                />
        </div>
    );
}

export default ColorPicker;