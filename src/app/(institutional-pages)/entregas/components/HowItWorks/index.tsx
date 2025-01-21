import { Container } from '@/components/toolkit/Container'

import { Card } from './Card'
import { CARDS } from './data'

export const HowItWorks: React.FC = () => {
  return (
    <Container
      as="section"
      data-cid="delivery-how-it-works"
      wrapperClassName="w-full bg-white py-12 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 lg:max-w-7xl lg:gap-16">
        <article className="flex w-full max-w-2xl flex-col gap-4 lg:max-w-3xl">
          <h2 className="text-center text-2xl font-medium lg:text-3xl">
            Como funciona o processo de entrega?
          </h2>
          <p className="text-center text-sm lg:text-base">
            Nosso sistema conecta você aos mercados parceiros mais próximos.
            Assim que o pedido é confirmado, garantimos que sua compra chegue
            rapidamente e com segurança.
          </p>
        </article>
        <ul className="flex h-auto w-full flex-col justify-between gap-6 lg:flex-row lg:items-stretch lg:gap-10 lg:self-stretch">
          {CARDS.map((card, index) => (
            <Card copy={card} key={`${card.title}-${index}`} />
          ))}
        </ul>
      </div>
    </Container>
  )
}
