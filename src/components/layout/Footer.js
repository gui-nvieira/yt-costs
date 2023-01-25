import { AiFillFacebook, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import styles from "./Footer.module.css"
function Footer() {

    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <AiFillFacebook />
                </li>
                <li>
                    <AiFillLinkedin />
                </li>
                <li>
                    <AiFillInstagram />
                </li>
            </ul>
            <p className={styles.copyright}> <span>Costs - Editado por Guilherme Vieira</span> &copy; 2023</p>
        </footer>
    )

}

export default Footer