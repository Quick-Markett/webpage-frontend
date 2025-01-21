import { CircleButton } from '@/components/common/CircleButton'
import { Container } from '@/components/toolkit/Container'

import { NearbyMarkets } from '../icons/NearbyMarkets'

export const Markets: React.FC = () => {
  return (
    <Container
      as="section"
      data-cid="delivery-markets"
      wrapperClassName="bg-white pb-12 lg:pb-20"
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-12 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <figure className="flex w-full max-w-[400px] items-center justify-center lg:max-w-[620px]">
          <NearbyMarkets className="ml-8 h-[200px] lg:ml-0 lg:h-auto" />
        </figure>
        <article className="flex w-full flex-col gap-4 lg:gap-6">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Cobertura ampla para você
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-neutral-600 lg:text-base">
              Atendemos várias regiões com mercados parceiros próximos de você,
              garantindo uma experiência ágil independentemente de onde você
              estiver.
            </p>
            <p className="text-sm text-neutral-600 lg:text-base">
              Trabalhamos constantemente para expandir nossa rede, alcançando
              novos bairros e cidades, para que mais pessoas possam aproveitar
              entregas rápidas e convenientes.
            </p>
          </div>
          <div className="flex w-full items-center justify-start">
            <CircleButton label="Ver mais sobre" />
          </div>
        </article>
      </div>
    </Container>
  )
}
