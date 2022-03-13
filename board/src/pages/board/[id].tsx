import { format } from "date-fns";
import { GetServerSideProps } from "next"
import { getSession } from "next-auth/client";
import Head from "next/head";
import { useState } from "react";
import { FiCalendar } from "react-icons/fi";

import firebase from '../../services/firebase';

import styles from './styles.module.scss'

interface TaskListProps{
    data:string
}

export type TaskList = {
    id: string;
    created: string | Date;
    createdformated?: string;
    tarefa: string;
    userId: string;
    nome: string;
  }

export default function Task({data}:TaskListProps){

    const content=JSON.parse(data) as TaskList

    return(
      <>
          <Head>
              <title>Task : {content.tarefa}</title>
          </Head>
        <main className={styles.container}>
           <article className={styles.uniqueTask}>
               <div>
               <h4><FiCalendar size={20} color="white"/> Tarefa criada  <span>  {content.createdformated} </span></h4>
               </div>
               <div>
                    <p>
                        {content.tarefa}
                    </p>
               </div>
           </article>

        </main>
      </>
    )
}



export const getServerSideProps: GetServerSideProps=async({req,params})=>{
    const session = await getSession({ req });

    const {id}=params

  
   if(!session?.vip){
        //Se o user nao for um doador
      return{
        redirect:{
          destination: '/board',
          permanent: false
        }
      }

    }
    const data =await firebase.firestore().collection('tarefas').doc(String(id)).get()
    .then((snapshot)=>{
        const data={
            id:snapshot.id,
            created:snapshot.data().created,
            createdformated:format(snapshot.data().created.toDate(),'dd MMMM yyyy'),
            tarefa:snapshot.data().tarefa,
            userID:snapshot.data().userID,
            nome:snapshot.data().nome
        }

        return JSON.stringify(data)
    })

    return{
        props:{
            data
        }
    }
}