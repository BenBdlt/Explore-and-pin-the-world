import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// import Map from '../components/Map'

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../components/Map.js'), {
  ssr: false,
})

const DEFAULT_CENTER = [38.907132, -77.036546]

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Explore the World</title>
        <meta name="description" content="Next.js firebase todos app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Explore and pin the world !
        </h1>
        test
        <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={12}>
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              <Marker position={DEFAULT_CENTER}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </>
          )}
        </Map>
      </main>

      <footer className={styles.footer}>
        <a href="#" rel="noopener noreferrer">
          M1 YNOV NANTES 2022-2023
        </a>
      </footer>
    </div>
  )
}
