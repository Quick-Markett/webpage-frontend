import { NextPage } from 'next'

import { ClientsCarousel } from '@/components/common/ClientsCarousel'
import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { getMetaData } from '@/utils/seo/getMetaData'

import { HowItWorks } from '../entregas/components/HowItWorks'
import { AskForADemo } from './components/AskForADemo'
import { Header } from './components/Header'
import { Procedures } from './components/Procedures'
import { Productivity } from './components/Productivity'
import { Stats } from './components/Stats'

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
      <main className="pt-10 lg:pt-[44px]">
        <Header />
        <ClientsCarousel />
        <Productivity />
        <Procedures />
        <Stats />
        <HowItWorks />
        <AskForADemo />
      </main>
      <Footer />
    </>
  )
}

export default Page
