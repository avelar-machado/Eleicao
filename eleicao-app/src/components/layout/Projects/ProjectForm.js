import { useEffect, useState } from 'react';
import styles from './ProjectForm.module.css'
import Input from '../../form/Input';
import Select from '../../form/Select';
import SubmitButton from '../../form/SubmitButton';

function ProjectForm({handleSubmitButton, btnText, projectData}) {


    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

   useEffect(() => {
    
    fetch('http://localhost:5000/categories', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((resp) => resp.json())
        .then((data) => {           
        setCategories(data)
    })
        .catch((err) => console.log(err))

        return () => {
            console.log('Componente desmontado.');
        };

   }, [])

   const submitBtn = (e) => {
        e.preventDefault();
        handleSubmitButton(project);
    }

   function handleChange(e) {
    setProject({...project, [e.target.name]: e.target.value})
   console.log(project)
    }

    function handleCategory(e) {
       
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }
        })
    }

    return (
        <>
        <form onSubmit={submitBtn} className={styles.form}>
            <div>
                <Input 
                type="text" 
                text="Nome do Projecto"
                name="name" 
                placeholder="Insira o nome do Projecto"
                value={project.name ? project.name : ''}
                handleOnChange={handleChange}                
                />
            </div> 
            <div>
                <Input 
                type="number" 
                text="orçamento do Project"
                name="budget" 
                placeholder="Insira o nome Orçamento Total"
                value={project.budget ? project.budget : ''}
                handleOnChange={handleChange}                
                />
            </div> 
            <div>
                <Select 
                name="category_id" 
                text="Selecione a Categoria"
                options={categories}
                value= {project.category ? project.category.id : ''} 
                handleOnChange={handleCategory}                              
                />
            </div> 
            <div>
                <SubmitButton text={btnText}/>                
            </div> 
            
        </form> 
        </>
    )
}

export default ProjectForm;