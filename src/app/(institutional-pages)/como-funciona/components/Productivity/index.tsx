import { Container } from '@/components/toolkit/Container'

import { ProductivityImage } from '../icons/ProductivityImage'
import { CARDS_DATA } from './data'
import { CARD_ICONS } from './icons'

export const Productivity: React.FC = async () => {
  return (
    <Container
      as="section"
      data-cid="how-it-works-productivity"
      wrapperClassName="bg-neutral-50 py-12 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 lg:max-w-7xl lg:gap-12">
        <article className="flex w-full flex-col gap-4 lg:items-center">
          <h2 className="l:text-center text-2xl font-medium lg:text-3xl">
            Aumente sua produtividade com nossa plataforma
          </h2>
          <p className="text-sm lg:text-center lg:text-base">
            Descubra como nossa solução otimiza processos e reduz o tempo gasto
            em operações manuais, permitindo que você foque no que realmente
            importa: <br className="hidden xl:block" />
            atender melhor seus clientes e expandir seus negócios.
          </p>
        </article>
        <div className="flex w-full flex-col-reverse lg:flex-row lg:justify-between">
          <ul className="flex w-full flex-col gap-4">
            {CARDS_DATA.map((card, index: number) => (
              <li
                className="flex w-full flex-col gap-4 rounded-sm border border-neutral-200 bg-white p-4"
                key={`${card.title}-${index}`}
              >
                <div className="flex w-full items-center gap-3">
                  <figure className="w-auto">{CARD_ICONS[card.icon]}</figure>
                  <h3 className="font-medium">{card.title}</h3>
                </div>
                <p
                  className="text-sm text-neutral-600"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
              </li>
            ))}
          </ul>
          <figure className="flex w-full items-center justify-center">
            <ProductivityImage className="max-h-[280px] max-w-[480px]" />
          </figure>
        </div>
      </div>
    </Container>
  )
}
