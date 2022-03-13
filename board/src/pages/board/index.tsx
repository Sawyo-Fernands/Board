import Head from 'next/head'
import styles from './styles.module.scss'
import {FiPlus,FiCalendar, FiEdit2, FiTrash, FiClock} from 'react-icons/fi'
import { SuportButton } from '../../components/SuportButton'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { ChangeEvent, FormEvent, useState } from 'react'

import firebase from '../../services/firebase'

interface BoardProps{
    user:{
        id:string,
        nome:string
    }
}

export default function Board({ user }:BoardProps){

    const[task,setTask]=useState('')

   async function handleAddTask(e:FormEvent){
        e.preventDefault()

        if(task ==''){
            alert("Preencha alguma tarefa")
            return
        }

        await firebase.firestore().collection('tasks')
        .add({
            created:new Date(),
            tarefa:task,
            userID:user.id,
            nome:user.nome
        }).then(()=>{
            console.log("Cadastrado com sucesso")
        }).catch(error=>console.log(error))


    }


    return(
       <>
       <Head>
           <title>Board - Minhas Tarefas</title>
       </Head>

       <main className={styles.container}>

           <form onSubmit={handleAddTask}>
               <input type="text" name="" id="" placeholder='Digite sua tarefa' value={task} onChange={(e:ChangeEvent<HTMLInputElement>)=>{ 
                   setTask(e.target.value)
                   }}/>
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

       <SuportButton/>
       </>
    )
}

export const getServerSideProps: GetServerSideProps =async({req})=>{

    const session =await getSession({req})

    if(!session?.id){
        return{
            redirect:{
                destination:'/',
                permanent:false
            }
        }
    }

    const user={
        nome: session?.user.name,
        id:session?.id
    }
    return{
        props:{
            user
        }
    }
}