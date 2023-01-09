
import Footer from './Footer'
import NavBar from './NavBar'
import styles from './Layout.module.css'


const  Layout = ({children}) => {
    
    return (
        <div>
            <NavBar />
                <div className={styles.containerStyle}>
                    {children} 
                </div>
            
            <Footer/>
        </div>
    )
    }

export default Layout