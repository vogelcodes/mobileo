import Container from '@material-ui/core/Container'
import Card  from '@material-ui/core/Card'
import Box  from '@material-ui/core/Box'
import Typography  from '@material-ui/core/Typography'
import Link  from '@material-ui/core/Link'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
import {ImWhatsapp} from 'react-icons/im'
import ProTip from '../src/ProTip'
import Copyright from '../src/Copyright'
import { CardMedia, Grid } from '@material-ui/core'
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    title:{
      borde: "3px",
      borderColor: "#050405",
    },

    list: {
      listStyle: 'none',
      textAlign: 'center',
      marginBlock: 0,
      paddingInlineStart: 0,
      
    },
    li: {
      marginTop: 8, 

    },
    image: {
      borderRadius: 15,
    }
    
  }),
);
export default function Home() {
  const classes = useStyles();
  return (
    <Container justifyContent="" maxWidth="sm">
      <Grid alignContent="center" justifyContent="flex-end" container direction="column" spacing={4}>
        <Grid item >
        <div className={classes.title}>

        <Typography align='center' variant="h2" component="h1" gutterBottom component={Link} href="https://www.instagram.com/mobi_leo/">
        {'mobileo.mobi'}        </Typography>
        </div>
        </Grid>
        <Grid item >
          <Link href="https://instagram.com/mobi_leo">
        <Image
        className={classes.image}
        src="https://instagram.fsdu5-1.fna.fbcdn.net/v/t51.2885-15/e35/121235323_1034363926991662_8717067879844545786_n.jpg?_nc_ht=instagram.fsdu5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=ynto3FwqmcAAX8OXyEG&tp=1&oh=fd4cfbc929222b4a1a73b120f4d4b061&oe=6000AB9A"
        alt="Picture of the author"
        width={350}
        height={350}
        />
        </Link>
        </Grid>
        <Grid item>
        <ul className={classes.list}>
            <li className={classes.li}>Marcenaria personalizada</li>
            <li className={classes.li}>Madeiras maciças, MDF e compensado</li>
            <br/>
            <br/>
            <li>
              <Link underline='none' href="https://wa.me/5521981697373?text=Oi%2C+tudo+bem%3F+Eu+gostaria+de+fazer+um+or%C3%A7amento.">
              <ImWhatsapp /> (21)98169-7373
              </Link>
              </li>
        </ul>
        </Grid>
        <Grid item>

        <Copyright/>
        </Grid>
        </Grid>
    </Container>
    
  )
}
