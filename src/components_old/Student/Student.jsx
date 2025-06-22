import styles from './Student.module.css';

function Student(props) {
    return(
        <div className={styles.student}>
            <p>Name : {props.name ? props.name : "Guest"}</p>
            <p>Age: {props.age ? props.age : 0}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default Student