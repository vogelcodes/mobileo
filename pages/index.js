import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mobileo.mobi</title>
      </Head>

      <main className={styles.main}>
      <a
            href="https://www.instagram.com/mobi_leo/"
            className={styles.card}
          >
        <h1 className={styles.title}>
          mobileo.mobi
        </h1>
          
      </a>

        <p className={styles.description}>
        </p>
        <a
            href="https://www.instagram.com/mobi_leo/">
        

        <img src='https://instagram.fsdu5-1.fna.fbcdn.net/v/t51.2885-15/e35/121235323_1034363926991662_8717067879844545786_n.jpg?_nc_ht=instagram.fsdu5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=ynto3FwqmcAAX8OXyEG&tp=1&oh=fd4cfbc929222b4a1a73b120f4d4b061&oe=6000AB9A'></img>
        </a>
        
  
        
      </main>

      
    </div>
  )
}
