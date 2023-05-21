import Container from '../layout/Container';
import ProjectForm from '../layout/Projects/ProjectForm';
import styles from './Company.module.css'
import Axios from "axios";


function Company() {

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
        <div className={styles.content_company}>

            <h1>Registar Eleitor</h1>

            <Container >

                <ProjectForm handleSubmitButton={handleClick} btnText="Enviar" />

            </Container>

        </div>
    );
}

export default Company;
