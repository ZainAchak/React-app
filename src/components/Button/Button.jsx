import styles from './Button.module.css'

function Button(props) {

    const buttonOnclick = (e) => {
        console.log(e);
        e.target.textContent = "Btn Lun";
    };

    return(
        <button  onClick={(e)=>buttonOnclick(e)} 
                className={styles.cMButton}>
                Click me
        </button>
    )
}

export default Button