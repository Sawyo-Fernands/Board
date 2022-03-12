import Head from "next/head"
import styles from '../styles/styles.module.scss'

export default function Home() {
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

      <h3 className={styles.donatersTitle}>Apoiadores:</h3>
      <div className={styles.donaters}>
        
        <img src="https://sujeitoprogramador.com/steve.png" alt="" />
       
      </div>
    </main>

    </>
   
  )
}
