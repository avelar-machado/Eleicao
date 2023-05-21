import styles from './Home.module.css'
import savings from '../../img/savings.png'
import LinkButton from '../layout/LinkButton';
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
    return (
        <div className="container pt-5">
            <section className={`${styles.home_container} container-sm`}>
                <h1>Bem vindo ao <span>Vota-Angola</span></h1>

                <p>Comece a gerenciar as suas Eleições</p>
                <LinkButton to="/projects" text="Criar Eleição" />
                <img className='container-sm' src={savings} alt="Costs" />
            </section>
        </div>
    );
}

export default Home;