import { NextPage } from 'next'

import { Navbar } from '@/components/common/Navbar'
import { getMetaData } from '@/utils/getters/getMetaData'

import { Header } from './components/Header'
import { Questions } from './components/Questions'

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
      <main className="flex flex-col gap-12 px-4 pb-12 pt-28 lg:gap-16 lg:pb-20 lg:pt-32">
        <Header />
        <Questions />
      </main>
    </>
  )
}

export default Page
