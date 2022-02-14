import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import styles from '../styles/Home.module.css'

interface propsStatic {
  randomNumber: number
}

//It just need visited once, and then another visitor(another computer) will be served with static page
//Next js not provided you with req,res etc in context because this is static route
//which is on BUILD TIME only generate STATIC HTML and JSON for this page

export const getStaticProps: GetStaticProps = ctx => {
  //in here you can make db calls, network request without being CORS binded
  return {
    props: {
      randomNumber: Math.random()
    },
    revalidate: 10 //this will revalidate if last req is > than 10s, not every 10s
  }
}

const Static: NextPage<propsStatic> = ({randomNumber}) => {
  return (
    <div className={styles.container}>
      {randomNumber}
    </div>
  )
}

export default Static