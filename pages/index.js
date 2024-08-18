import Head from 'next/head'
import Navbar from "components/Navbar/Navbar"
import LandingSection from "components/LandingSection/LandingSection";
import ProductSection from "components/ProductSection";
import Incentives from "components/Incentives";
import Contact from "components/Contact"

export default function Home() {
    return (
        <div >
            <Head>
                <title>Ayu{"'"}s Cakes Store</title>
                <meta name="description" content="Responsive cake shop landing page"/>
                <meta
                    name='keywords'
                    content='Ayush ,Lingayat,codes, Full Stack Developer,html, css, cake ,shop, landing ,page, responsive, website, cakes n cookies, example page'
                />
                <meta name='language' content='EN' />
                <meta name='author' content='Ayush Lingayat' />
                <meta name='publisher' content='Ayush Lingayat' />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={"bg-purple-200"}>
                <Navbar/>
                <LandingSection/>
                <ProductSection/>
                <Incentives/>
                <Contact/>
            </main>
        </div>
    )
}
