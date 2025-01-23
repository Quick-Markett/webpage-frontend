import { NextPage } from 'next'

import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { getMetaData } from '@/utils/seo/getMetaData'

import { Header } from './components/Header'
import { Paragraphs } from './components/Paragraphs'

export async function generateMetadata() {
  return getMetaData({
    title: 'Termos de Uso - Regras e Condições',
    description:
      'Leia os Termos de Uso e entenda as condições e responsabilidades para utilizar nossos serviços de forma segura e transparente.',
    opengraph: ''
  })
}

const Page: NextPage = async () => {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Paragraphs />
      </main>
      <Footer />
    </>
  )
}

export default Page
