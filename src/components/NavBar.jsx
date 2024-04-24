import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.storeName}>StoreName</h1>
            <div className={styles.navContainer}>
                <Link to='/'>Home</Link>
                <Link to='catalog'>Catalog</Link>
                <Link to='shoppingCart'>Shopping Cart</Link>
            </div>
        </div>
    )
}