import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'
import { useAppContext } from '../store/Store';
import Layout from '../components/Layout'
import styles from './View.module.css'

function View() {
    const [item, setItem] = useState(null)
    
    const params = useParams();
    const store = useAppContext();
    
    useEffect(() => {
        
        const book = store.getItem(params.bookId)
        setItem(book) ;
    }, [params,store]);
    if(!item){
        return <Layout>Item not found</Layout>
    }
    
    
    return (
        <Layout className={styles.ContainerLayout}>
            <h2>Title:{item?.title}</h2>
            <div>{item?.cover ? <img className={styles.imgLayout} src={item.cover} alt={item.title}  width='300' /> : ''} </div>
            <div className={styles.description}>
                <div>Author:{item?.author}</div>
                <div>Intro:{item?.intro}</div>
                <div>Completed:{item?.completed ? 'Completed' : 'Not Completed'}</div>
                <div>Review:{item?.review}</div>
            </div>
        </Layout>
        
    )
}

export default View