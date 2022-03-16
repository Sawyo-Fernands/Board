import Link from 'next/link'
import styles from './styles.module.scss'

export function SuportButton(){
    return(
        <div className={styles.suportButton}>
            <Link href={'/donate'} ><button>Apoiar</button></Link>
        </div>
    )
}