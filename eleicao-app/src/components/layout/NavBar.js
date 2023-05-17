import { Link, Outlet } from "react-router-dom";
import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/costs_logo.png'

function NavBar() {
    return (
        <nav className={styles.navbar}>       
           <Container>
            <Link to="/"><img src={logo} alt="Costs"/></Link> 
            <ul className={styles.list}>
                <li itemID="home" className={styles.item}> <Link to="/">Home</Link> </li>  
                <li className={styles.item}> <Link to="/projects">Projectos</Link> </li>  
                <li className={styles.item}> <Link to="/company" >Empresa</Link> </li>  
                <li className={styles.item}> <Link to="/contact" >Contacto</Link>  </li>
            </ul>              
                
            <Outlet/>           
            </Container>
        </nav>
    )
}
export default NavBar;