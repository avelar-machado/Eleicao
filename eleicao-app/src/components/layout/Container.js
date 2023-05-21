import styles from './Container.module.css'

function Container(props) {
    return (
        <div className={`${styles.container} ${styles[props.customClass]} container`}>{props.children}</div>
    );
}

export default Container;