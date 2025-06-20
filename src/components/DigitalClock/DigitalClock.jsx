import React, {useState, useEffect} from "react"
import styles from "./DigitalClock.module.css"

function DigitalClock() {
    const [time, setTime] = useState(formatTime(new Date()));

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setTime(formatTime(new Date()));
        }, 1000);

        return ()=> clearInterval(intervalId);
    },[]);

    function formatTime(date) {
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert 0 (midnight) to 12
        const formattedHours = String(hours).padStart(2, '0');

        return `${formattedHours}:${minutes}:${seconds} ${ampm}`;
    }

    return(
        <div className={styles.clockContainer}>
            <div className={styles.clock}>
                <span>{time}</span>
            </div>
        </div>
    )
}

export default DigitalClock