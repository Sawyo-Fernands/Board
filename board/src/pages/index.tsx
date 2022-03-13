import { GetStaticProps } from "next"
import Head from "next/head"
import styles from '../styles/styles.module.scss'
import firebase from '../services/firebase'
import { useState } from "react"

import ImageHome from '../../public/images/principal.svg'

interface Homeprops{
  data:string
}

type Data={
  id:string,
  donate:boolean,
  lastDonate:Date,
  image:string
}

export default function Home({ data }:Homeprops) {

  const [donaters,setDonaters]=useState<Data[]>(JSON.parse(data))



  return (
    <>

    <Head>
        <title>Board - Organizando suas Tarefas!</title>
    </Head>

    <main className={styles.contentContainer}>
      <img src="/images/principal.svg" alt="Ferramenta board" />

      <section className={styles.callToActions}>
        <h1>Uma ferramenta para seu dia a dia Escreva, planeje e organize-se..</h1>
        <p>
          <span>100% Gratuito </span> e Online.
        </p>
      </section>

      {donaters.length !== 0 && (
              <h3 className={styles.donatersTitle}>Apoiadores:</h3>

      )}
      <div className={styles.donaters}>

        {donaters.map(value=>{
            return(
              <>
              <img src={value.image} alt="Doador" key={value.image}/>
              </>
            )
        })}

      </div>
    </main>

    </>
   
  )
}


export const getStaticProps : GetStaticProps=async ()=>{

  const donaters= await firebase.firestore().collection('users').get()
  let data=JSON.stringify(donaters.docs.map(u =>{
    return{
      id:u.id,
      ...u.data()
    }
  }))
  return{
    props:{
      data
    },
    revalidate:60*30 //Atualizar a cada 30 minutos
  }
}