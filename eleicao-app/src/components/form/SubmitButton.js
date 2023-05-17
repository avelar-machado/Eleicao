import styles from './SubmitButton.module.css'

function SubmitButton({text}) {    
    return (
        <div className={styles.control_btn}>
            <input type = "submit" className={styles.btn} value={text} />
        </div>
    );
}

export default SubmitButton;