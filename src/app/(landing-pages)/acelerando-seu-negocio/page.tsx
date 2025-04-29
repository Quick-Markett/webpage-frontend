import { NextPage } from 'next'
import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { getMetaData } from '@/utils/seo/getMetaData'
import { ClientsCarousel } from '@/components/common/ClientsCarousel'


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
      <main className="w-screen flex pt-20 space-y-N items-center p-2 m-2 h-32 justify-center uppercase">
        <h1 className="text-5xl font-bold text-gray-600 text-blue-900">Acelerando seu negócio</h1>
      </main>
      <p className='text-center text-2xl'>Soluções avançadas para a sua empresa</p>
      <ClientsCarousel/>
      <div>
        
      </div>
      <Footer />
    </>
  )
}

export default Page
