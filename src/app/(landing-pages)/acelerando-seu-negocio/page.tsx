import { NextPage } from 'next'
import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { getMetaData } from '@/utils/seo/getMetaData'
import { ClientsCarousel } from '@/components/common/ClientsCarousel'
import { CircleButton } from '@/components/common/CircleButton'
import { CARDS_DATA } from './components/data'
import { CARD_ICONS } from './components/icons'


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
      <div className="overflow-x-hidden">
        <main className="w-screen flex pt-20 space-y-N items-center p-2 m-2 h-32 justify-center uppercase">
          <h1 className="text-5xl font-bold text-gray-600 text-blue-900">Acelerando seu negócio</h1>
        </main>
        <div className="flex w-screen justify-center items-center">
          <p className='text-center text-2xl m-3'>Soluções avançadas para a sua empresa</p>
          <CircleButton label='Saiba Mais' href=''/>
        </div>
        <div className="w-screen flex justify-center m-5 ">
          <p className="w-2/3 h-[100px] text-justify">"Transforme a eficiência do seu negócio com tecnologia inteligente.
          Nossa plataforma automatiza tarefas repetitivas, otimiza rotas e 
          entrega dados estratégicos em tempo real, permitindo que você ganhe tempo, 
          reduza custos e acelere seu crescimento. Descubra como simplificar processos e 
          elevar a performance da sua operação."</p>
        </div>
        <ClientsCarousel/>
        <div className="w-screen flex items-center justify-center">
          <div className="w-[90%] h-auto m-5 flex items-center justify-center">
            <div className="w-full flex flex-wrap gap-8 p-4 justify-center">
              {CARDS_DATA.map((card, index) => (
                <div key={`${card.title}-${index}`} className="h-[170px] w-[45%] min-w-[250px] border border-neutral-200 flex">
                  <li className="flex w-full flex-col gap-4 rounded-sm border border-neutral-200 h-full bg-white p-4">
                    <div className="flex w-full items-center gap-3 justify-center">
                      <figure className="w-auto">{CARD_ICONS[card.icon]}</figure>
                      <h3 className="font-medium">{card.title}</h3>
                    </div>
                    <p className="text-sm text-neutral-600" dangerouslySetInnerHTML={{ __html: card.description }} />
                  </li>
                </div>
              ))}
            </div>

          </div>
        </div>
        <div>
          
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Page
