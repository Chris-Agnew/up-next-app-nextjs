
import Head from 'next/head'
import Navbar from "../components/Navbar"
import Hero from "../components/Home"

export default function Home({ results }) {
  return (
  <>
  <Head>
    <title>Up-Next Tv Tracker</title>
     <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Up-Next Tv Tracker is a simple app that allows you to keep track of your favorite shows and watch them on Up-Next." />
  </Head>
  <Navbar />
 
  <Hero results={results} />

  </>
   )
}

export async function getServerSideProps() {
const popular = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
const data = await popular.json();


  return {
    props: {
      results: data.results,
    },
  };
}