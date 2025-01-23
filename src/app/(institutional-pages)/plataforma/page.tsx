import { NextPage } from 'next'

import { ClientsCarousel } from '@/components/common/ClientsCarousel'
import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { getMetaData } from '@/utils/seo/getMetaData'

import { Procedures } from '../como-funciona/components/Procedures'
import { Productivity } from '../como-funciona/components/Productivity'
import { LearnMore } from '../entregas/components/LearnMore'
import { Markets } from '../entregas/components/Markets'
import { Header } from './components/Header'

export async function generateMetadata() {
  return getMetaData({
    title: 'Conheça Nossa Plataforma - Solução para Mercados',
    description:
      'Descubra como nossa plataforma transforma operações de mercados com tecnologia avançada, entregas ágeis e uma experiência otimizada para clientes e parceiros.',
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
        <Markets />
        <LearnMore />
      </main>
      <Footer />
    </>
  )
}

export default Page
