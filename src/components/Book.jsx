import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Book.module.css'


const  Book = ({item})=> {
    
    return (
        <div className={styles.bookContainerStyle}>
            <Link to={`/view/${item.id}`} className={styles.bookInfoStyle}>
                <img src={item.cover} width="150" height='200px' alt={item.title}/>
                <div className={styles.titleRef}>{item.title}</div>
            </Link>
        </div>
    )
}

export default Book