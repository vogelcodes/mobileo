import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {ImWhatsapp} from 'react-icons/im'

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

       
        <a
            href="https://www.instagram.com/mobi_leo/">
        

           <img src='https://instagram.fsdu5-1.fna.fbcdn.net/v/t51.2885-15/e35/121235323_1034363926991662_8717067879844545786_n.jpg?_nc_ht=instagram.fsdu5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=ynto3FwqmcAAX8OXyEG&tp=1&oh=fd4cfbc929222b4a1a73b120f4d4b061&oe=6000AB9A'></img>
        </a>

        <ul>
            <li>Marcenaria personalizada</li>
            <li>Madeiras maciças, MDF e compensado</li>
            <br/>
            <br/>
            <li>
              <a href="https://wa.me/5521981697373?text=Oi%2C+tudo+bem%3F+Eu+gostaria+de+fazer+um+or%C3%A7amento.">
              <ImWhatsapp /> (21)98169-7373
              </a>
              </li>
        </ul>
  
        
      </main>
      <footer className={styles.footer}>
        
          mobileo.mobi - 2020
        
        
      </footer>

      
    </div>
  )
}
