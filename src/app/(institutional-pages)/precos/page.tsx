import { NextPage } from 'next'

import { ClientsCarousel } from '@/components/common/ClientsCarousel'
import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { getMetaData } from '@/utils/seo/getMetaData'

import { AskForADemo } from './components/AskForADemo'
import { Header } from './components/Header'
import { Invite } from './components/Invite'
import { LearnMore } from './components/LearnMore'
import { Options } from './components/Options'

export async function generateMetadata() {
  return getMetaData({
    title: 'Planos e Preços para Todos os Perfis',
    description:
      'Confira nossos planos e escolha a solução ideal para você, com preços justos, flexibilidade e benefícios que atendem às suas necessidades.',
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
        <LearnMore />
        <Invite />
        <AskForADemo />
      </main>
      <Footer />
    </>
  )
}

export default Page
