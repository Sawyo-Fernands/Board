import Head from 'next/head'
import styles from './styles.module.scss'
import {FiPlus,FiCalendar, FiEdit2, FiTrash, FiClock} from 'react-icons/fi'

export default function Board(){

    return(
       <>
       <Head>
           <title>Board - Minhas Tarefas</title>
       </Head>

       <main className={styles.container}>

           <form>
               <input type="text" name="" id="" placeholder='Digite sua tarefa'/>
                <button type="submit"><FiPlus size={25} color="#17181f"/></button>
           </form>

           <h1>Você tem 2 tarefas !</h1>

           <section>
               <article className={styles.taskList}>
                    <p>Estudar react js com o sujeito programador</p>
                    <div className={styles.action}>
                        <div>
                            <div>
                                <FiCalendar size={20} color="#ffb800"/>
                                <time>17 de julho de 2021</time>
                            </div>
                                 <button><FiEdit2 size={20} color="#fff"/> <span>Editar</span></button>
                        </div>
                        

                        <button><FiTrash size={20} color="#ff3636"/> <span>Excluir</span></button>
                    </div>
               </article>
           </section>
       </main>

       <div className={styles.vipContainer}>
           <h3>Obrigado por apoiar esse projeto</h3>
           <div>
               <FiClock size={28} color="white"/>
               <time>Ultima doação foi a 3 dias.</time>
           </div>
       </div>
       </>
    )
}