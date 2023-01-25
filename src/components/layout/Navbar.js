import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import logo from '../../img/costs_logo.png'
import LinkButton from "./LinkButton"

function NavBar() {

    return (
        <nav className={styles.navbg}>
            <Link to="/" className={styles.title}><img src={logo} alt="Costs" /></Link>
            <ul className={styles.list}>
                <li><LinkButton to="/newproject" text="Criar Projeto" /></li>
                <li className={`${styles.item} ${styles.links}`}><Link to="/projects">Projetos</Link></li>
                <li className={`${styles.item} ${styles.links}`}><Link to="/contact">Contato</Link></li>
                <li className={`${styles.item} ${styles.links}`}><Link to="/company">Empresa</Link></li>
                <li className={`${styles.item} ${styles.links}`}><Link to="/">Home</Link></li>
            </ul>
        </nav>
    )

}

export default NavBar