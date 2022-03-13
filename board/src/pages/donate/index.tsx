import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import Head from 'next/head'
import styles from './styles.module.scss'

interface DonateProps{
    user:{
        nome:string,
        id:string,
        image:string
    }
}


export default function Donates({user}:DonateProps){
    return(
        <>
        <Head>
            <title>Board- Ajude a Plataforma</title>
        </Head>
        <main className={styles.container}>
            <img src="/images/rocket.svg" alt="Seja apoiador" />

            <div className={styles.vip}>
                <img src={user.image} alt="Foto de perfil do usuário" />
                <span>Parabéns você é um novo apoiador</span>
            </div>

            <h1>Seja um apoiador desse projeto 🏆</h1>
            <h3>Contribua com apenas <span>R$ 1,00</span></h3>
            <strong>Apareça na nossa home, tenha funcionalidades exclusivas.</strong>
        </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req });
  
    if(!session?.id){
      //Se o user nao tiver logado vamos redirecionar.
      return{
        redirect:{
          destination: '/',
          permanent: false
        }
      }
    }
  
    const user={
        nome:session?.user.name,
        id:session?.id,
        image:session?.user.image
    }
  
    return{
      props:{
        user
      }
    }
  
  }