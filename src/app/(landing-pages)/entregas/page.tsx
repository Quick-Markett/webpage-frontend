import { NextPage } from 'next'

import { ClientsCarousel } from '@/components/common/ClientsCarousel'
import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { getMetaData } from '@/utils/getters/getMetaData'

import { Header } from './components/Header'
import { HowItWorks } from './components/HowItWorks'
import { Markets } from './components/Markets'

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
      </main>
      <Footer />
    </>
  )
}

export default Page
