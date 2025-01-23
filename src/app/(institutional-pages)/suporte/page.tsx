import { NextPage } from 'next'

import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { getMetaData } from '@/utils/seo/getMetaData'

import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { MostAskedQuestions } from './components/MostAskedQuestions'
import { SmallMarket } from './components/SmallMarket'
import { SupportTitle } from './components/SupportTitle'

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
        <SupportTitle />
        <MostAskedQuestions />
        <SmallMarket />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Page
