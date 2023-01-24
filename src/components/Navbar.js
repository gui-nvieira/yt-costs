import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import logo from '../img/costs_logo.png'

function NavBar() {

    return (
        <nav className={styles.navbg}>
            <Link to="/" className={styles.title}><img src={logo} alt="Costs" /></Link>
            <ul className={styles.list}>
                <li className={`${styles.item} ${styles.links}`}><Link to="/newproject">
                    <button id={styles.button}>
                        Novo Projeto
                    </button>
                </Link></li>
                <li className={`${styles.item} ${styles.links}`}><Link to="/contact">Contato</Link></li>
                <li className={`${styles.item} ${styles.links}`}><Link to="/company">Empresa</Link></li>
                <li className={`${styles.item} ${styles.links}`}><Link to="/">Home</Link></li>
            </ul>
        </nav>
    )

}

export default NavBar