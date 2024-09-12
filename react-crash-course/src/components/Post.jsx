import { Link } from 'react-router-dom';
import styles from './Post.module.css';

const names = ['Danny', 'Maximillian'];

function Post({id, author, body}){
    const chosenName = Math.random() > 0.5 ? names[0] : names [1];

    return (
        <li className={styles.post}>
            <Link to={id}>    
                <p className={styles.author}>{author}</p>
                <p className={styles.text}>{body}</p>
            </Link>
        
        </li>
    );
}

export default Post;