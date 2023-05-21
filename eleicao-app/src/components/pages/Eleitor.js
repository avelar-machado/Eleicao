import Container from '../layout/Container';
import ProjectForm from '../layout/Projects/ProjectForm';
import styles from './Eleitor.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Axios from "axios";
import { useState } from 'react';


function Eleitor() {

    const [show1, setShow1] = useState("active");
    const [show2, setShow2] = useState("");

    const [show3, setShow3] = useState("active");
    const [show4, setShow4] = useState("fade");

    function handleClick1 (event) {
        event.preventDefault();
        setShow1("active");
        setShow3("active");

        setShow2("");
        setShow4("fade");
    }

    function handleClick2 (event) {
        event.preventDefault();
        setShow2("active");
        setShow4("active");

        setShow1("");
        setShow3("fade");
    }

    function handleClick(values) {
        Axios.post("http://localhost:3001/register", {
            name: values.name,
            cost: values.cost,
            category: values.category,
        }).then((resp) => {
            console.Console.log(resp);
        });
    };

    return (
        <div className={styles.content_eleitor}>
            <div className="container my-3">

            <ul className="nav nav-tabs mt-3">
                <li className="nav-item" onClick={handleClick1}><a href="#op1" className={`nav-link text-decoration-none ${show1}`} data-bs-toggle="tab">Registar Eleitor</a></li>
                <li className="nav-item" onClick={handleClick2}><a href="#op2" className={`nav-link text-decoration-none ${show2}`} data-bs-toggle="tab">Visualizar Eleitores</a></li>
            </ul>

            <div className="tab-content">
                <div className={`tab-pane container ${show3}`} id="op1">Here are a big startup, working a lot of to provide the best experience.</div>
                <div className={`tab-pane container ${show4}`} id="op2">Change, working a lot of to provide the best experience.</div>
            </div>

        </div>

        </div>
    );
}

export default Eleitor;
