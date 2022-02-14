import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image, { ImageLoader } from 'next/image'

// const DynamicH1 = dynamic(() => import("./DynamicH1"),{
//   //there is a lot of options here
//   ssr: false,
//   loading:() => <p>...</p>
// }) //this dynamic import will be loaded if it required

const aye = 1;

const loader: ImageLoader = ({src, width}) => {
  return `http://my-custom-service/?url=${src}`
} // if you want to change loader of image(for this case is localhost:3000) add loader props in Image nextjs component

const Home: NextPage = () => {
  return (
    <>
    {/* {aye ? <DynamicH1 /> : "Hmm check network"} */}
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <div>Hello world</div>
    <Image src="/screenshot.png" alt="" height={300} width={300}/>
    </>
  )
}

export default Home
