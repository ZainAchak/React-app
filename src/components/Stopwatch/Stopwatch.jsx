import React,{useState,useEffect, useRef} from "react"
import styles from './Stopwatch.module.css'

function getTimeBreakdown(ms1) {
  let diff = ms1; // Ensure positive difference

  const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
  diff %= 1000 * 60 * 60;

  const minutes = String(Math.floor(diff / (1000 * 60))).padStart(2, '0');
  diff %= 1000 * 60;

  const seconds = String(Math.floor(diff / 1000)).padStart(2, '0');
  const milliseconds = String(Math.floor(diff % 1000/10)).padStart(2, '0');

  return {
    hours,
    minutes,
    seconds,
    milliseconds
  };
}

export default function Stopwatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{
        if(isRunning){
            console.log('⏱ Starting interval');
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            console.log('🧹 Clearing interval');
            clearInterval(intervalIdRef.current);
        }
    },[isRunning]);

    function start() {
        startTimeRef.current = Date.now() - elapsedTime;
        setIsRunning(true);
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        const timeFormated = getTimeBreakdown(elapsedTime);
        return `${timeFormated.hours}:${timeFormated.minutes}:${timeFormated.seconds}:${timeFormated.milliseconds}`;
    }

    return(
        <div className={styles.mainContainer}>
            <p>{formatTime()}</p>
            <button className={styles.buttons} onClick={start} id={styles.startBtn}>Start</button>
            <button className={styles.buttons} onClick={stop} id={styles.stopBtn}>Stop</button>
            <button className={styles.buttons} onClick={reset} id={styles.resetBtn}>Reset</button>
        </div>
    )
}