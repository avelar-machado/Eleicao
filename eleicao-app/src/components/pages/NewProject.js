import styles from './NewProject.module.css'
import ProjectForm from '../layout/Projects/ProjectForm';
import { useNavigate } from 'react-router-dom';


function NewProject() {


    const navigate =  useNavigate()

    function createPost(project) {

        //Initialize cost and services

        project.services = []
        project.cost = 0

    
            fetch('http://localhost:5000/projects', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(project),
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    navigate('/projects', { state: { message: "Projecto Criado com Sucesso" } });
            })
                .catch((err) => console.log(err))
        }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projecto</h1>
            <p>Crie seu Projecto para depois adicionar os serviços</p>
            <ProjectForm handleSubmitButton = {createPost}  btnText="Criar Projecto"/>
        </div>
    )
}

export default NewProject;