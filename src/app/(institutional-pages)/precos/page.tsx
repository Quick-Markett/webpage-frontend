import { NextPage } from 'next'

import { ClientsCarousel } from '@/components/common/ClientsCarousel'
import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { getMetaData } from '@/utils/seo/getMetaData'

import { Header } from './components/Header'
import { Invite } from './components/Invite'
import { LearnMore } from './components/LearnMore'
import { Options } from './components/Options'

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
        <Options />
        <ClientsCarousel />
        <Invite />
        <LearnMore />
      </main>
      <Footer />
    </>
  )
}

export default Page
