import styles from './ToDoListApp.module.css'
import React,{useState} from 'react'
function ToDoListApp() {
    
    const [tasks, setTasks] = useState(['Walk a Dogg']);
    const [inputText, setInputText] = useState("");

    function addTask(e) {
        e.preventDefault();
        if(inputText)
            setTasks(t => [...t,inputText]);
            setInputText("");
    }

    function deleteTask(index) {
        setTasks(t => t.filter((_,i)=>{
           return i !== index;
        }))
    }

    function inputTextHandler(event) {
        setInputText(event.target.value);
    }

    function changePosition(position,index) {
        const newList = [...tasks];
        switch (position) {
            case "up":
                if(index > 0)
                    [newList[index], newList[index-1]] = [newList[index-1], newList[index]];
                    setTasks(newList);
                break;
        
            default:
                if(index < tasks.length-1)
                    [newList[index], newList[index+1]] = [newList[index+1], newList[index]];
                    setTasks(newList);
                break;
        }
    }

    return(
        <div className={styles.TODOMainContainer}>
            <h1>To-Do-List</h1>
            <form action="">

                <input  className={styles.userInput} 
                        value={inputText}
                        onChange={inputTextHandler}
                        type="text" 
                        placeholder='Enter a task...' />

                <button onClick={addTask} 
                        className={styles.addBtn}>Add</button>
            </form>
            <ul>
                {tasks.map((task,index) =>(
                        <li key={index} >{task} 
                            <div>
                                <button id={styles.deleteBtn} onClick={()=>deleteTask(index)}>Delete</button> 
                                <button id={styles.upBtn} onClick={()=>changePosition("up",index)}>👆🏻</button> 
                                <button id={styles.downBtn} onClick={()=>changePosition("down",index)}>👇🏻</button>
                            </div>
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoListApp