import { NextPage } from 'next'

import { ClientsCarousel } from '@/components/common/ClientsCarousel'
import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { getMetaData } from '@/utils/getters/getMetaData'

import { About } from './components/About'
import { Header } from './components/Header'
import { HowItWorks } from './components/HowItWorks'
import { LearnMore } from './components/LearnMore'
import { Markets } from './components/Markets'
import { Stats } from './components/Stats'
import { TryItNow } from './components/TryItNow'

export async function generateMetadata() {
  return getMetaData({
    title: '',
    description: '',
    opengraph: ''
  })
}

const Page: NextPage = async () => {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <ClientsCarousel backgroundColor="#f5f5f5" />
        <HowItWorks />
        <Markets />
        <Stats />
        <About />
        <LearnMore />
        <TryItNow />
      </main>
      <Footer />
    </>
  )
}

export default Page
