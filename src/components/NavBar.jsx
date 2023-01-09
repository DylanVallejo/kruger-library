import { Link } from "react-router-dom"
import styles from  './NavBar.module.css'

const NavBar = () => {
    
  return (
    <div className={styles.navContainerStyle}>
        <Link to="/" className ={styles.linkStyle}>Home</Link>
        <Link to="/create" className ={styles.linkStyle}>Create</Link>
        <p className={styles.pnavBar} style = {{display:'initial'}}>Kruger Library</p>
    </div>
  )
}

export default NavBar;