import styles from './Project.module.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import ProjectFormm from '../layout/Projects/ProjectForm';
import Message from "../layout/Message";

function Project() {

    const { id } = useParams();
    const [project, setProject] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [projectMessage, setprojectMessage] = useState('');

    useEffect(() => {

        setTimeout(() => {

            fetch(`http://localhost:5000/projects/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    setProject(data)
                })
                .catch((err) => console.log(err))
        }, 500);

    }, [id]);

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function editPost(project) {

        setTimeout(() => {

            fetch(`http://localhost:5000/projects/${project.id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(project),
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    setProject(project)
                    setprojectMessage("Projecto Atualizado com  sucesso")
                    setShowProjectForm(false)
                })
                .catch((err) => console.log(err))
        }, 500);

    }

    return (
        <div className={styles.project_details}>
            {projectMessage && <Message type="success" msg={projectMessage} />}
            {project.name ? (<Container customClass="column">

                <div className={styles.details_container}>

                    <h1>Projecto: {project.name}</h1>
                    <button className={styles.btn} onClick={toggleProjectForm}>
                        {!showProjectForm ? 'Editar Projecto' : 'Fechar Projecto'}
                    </button>

                    {!showProjectForm ? (
                        <div className={styles.project_info}>

                            <p>
                                <span>Cateforia: </span> {project.category.name}
                            </p>

                            <p>
                                <span>Total de Orçamento: </span> AKZ {project.budget}
                            </p>

                            <p>
                                <span>Total Utilizado: </span> {project.cost}
                            </p>

                        </div>
                    ) : (
                        <div className={styles.project_info}>
                            <ProjectFormm handleSubmitButton={editPost} btnText="Concluir edição" projectData={project} />
                        </div>
                    )}

                </div>

            </Container>
            ) : (<Loading />)}
        </div>
    )

}

export default Project;