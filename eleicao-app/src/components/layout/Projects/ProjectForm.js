import { useState } from 'react';
import styles from './ProjectForm.module.css'
import Input from '../../form/Input';
import SubmitButton from '../../form/SubmitButton';

function ProjectForm({ handleSubmitButton, btnText }) {

    const [values, setValue] = useState();

    const submitBtn = (e) => {
        e.preventDefault();
        handleSubmitButton(values);
    }

    function handleChange(e) {
        setValue((values) => ({ ...values, [e.target.name]: e.target.value }));
        console.log(values)
    };

    return (
        <>
            <form onSubmit={submitBtn} className={`${styles.form}`}>
                <div>
                    <Input
                        type="text"
                        text="Nome"
                        name="name"
                        placeholder="Nome"
                        handleOnChange={handleChange}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        text="Bilhete de Identidade"
                        name="bi"
                        placeholder="Bilhete de Identidade"
                        handleOnChange={handleChange}
                    />
                </div>

                <div>
                    <Input
                        type="text"
                        text="Morada"
                        name="morada"
                        placeholder="morada"
                        handleOnChange={handleChange}
                    />
                </div>
                <div>
                    <SubmitButton text={btnText} />
                </div>

            </form>
        </>
    )
}

export default ProjectForm;