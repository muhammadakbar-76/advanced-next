import type { GetStaticPaths, GetStaticProps, NextPage, PreviewData } from 'next'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

interface propsDynamic {
  randomNumber: number
  preview ?: {[key: string]: string} & PreviewData
}

//It just need visited once, and then another visitor(another computer) will be served with static page
//Next js not provided you with req,res etc in context because this is static route
//which is on BUILD TIME only generate STATIC HTML and JSON for this page

//if getStaticProps on production, and has cookie generated from api request (setPreviewData), it will be called for every request, just like in development
export const getStaticProps: GetStaticProps = ctx => {
  //in here you can make db calls, network request without being CORS binded
  return {
    props: {
      randomNumber: Math.random(),
      preview: ctx.previewData
    },
    revalidate: 10 //this will revalidate if last req is > than 10s, not every 10s
  }
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [
        {
            params: {dynamic: 'p1'}
        },
        {
            params: {dynamic: 'p2'}
        },
        {
            params: {dynamic: 'p3'}
        },
    ],
        fallback: 'blocking'
    }
}

const Dynamic: NextPage<propsDynamic> = ({randomNumber,preview}) => {
const router = useRouter();

if(router.isFallback){
    return <h1>Loading...</h1>
}
  return (
    <div className={styles.container}>
      {randomNumber} {preview?.something}
    </div>
  )
}

export default Dynamic