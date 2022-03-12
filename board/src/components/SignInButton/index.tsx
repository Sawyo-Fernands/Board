import styles from './styles.module.scss'
import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'


export function SignInButton(){

    const session=false

    return session ? (
        <button type='button'
         className={styles.button} 
         onClick={()=>{}}
        >
            <img src="https://sujeitoprogramador.com/steve.png" alt="foto do usuário" />
            Olá, Sawyo
            <FiX  color="#737380" className={styles.closeIcon}/>
            
            </button>
    ) : (
        <button type='button'
         className={styles.button} 
         onClick={()=>{}}
        >
            <FaGithub  color="#FFB800"/>
            Entrar com Github
            </button>
    )
}