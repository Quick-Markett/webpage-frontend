import { ArrowRight } from '@/app/(institutional-pages)/entregas/components/icons/ArrowRight'
import { Anchor } from '@/components/toolkit/Anchor'
import { Container } from '@/components/toolkit/Container'

export const SmallMarket: React.FC = () => {
  return (
    <Container
      as="section"
      data-cid="delivery-learn-more"
      wrapperClassName="bg-white py-12 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col-reverse gap-8 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <article className="flex w-full flex-col gap-4 lg:gap-6">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Se você é proprietário de um pequeno mercado
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-neutral-600 lg:text-base">
              Encontre as informações necessárias para criar, executar e
              expandir sua pequena empresa com o Mercado Rápido.
            </p>
          </div>
          <Anchor
            className="mt-4 flex items-center gap-3 font-normal text-amber-600 transition-all duration-300 hover:brightness-125"
            href="#"
            variant="custom"
          >
            <p className="text-sm lg:text-base">
              Visite Ajuda e aprendizado para pequenas empresas
            </p>
            <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4" />
          </Anchor>
        </article>
        <figure className="min-h-[280px] w-full rounded-sm bg-slate-200" />
      </div>
    </Container>
  )
}
