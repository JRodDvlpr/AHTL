import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmCard from '../components/SmCard'

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {exploreData?.map(({ img, distance, location }) => (
            <SmCard
              key={img} 
              img={img} 
              distance={distance} 
              location={location}
            />
          ))}
        </section>
      </main>

    </div>
  )
}

{/** Retrieving DATA and restructuring on top */}
export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp')
  .then(
    res => res.json()
    );

    return {
      props: {
        exploreData,
      },
    };
}
