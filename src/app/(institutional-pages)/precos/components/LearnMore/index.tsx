import { Container } from '@/components/toolkit/Container'

export const LearnMore: React.FC = () => {
  return (
    <Container
      as="section"
      data-cid="pricing-learn-more"
      wrapperClassName="bg-white py-12 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col-reverse gap-8 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-16">
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
        </article>
        <figure className="min-h-[320px] w-full rounded-sm bg-slate-200" />
      </div>
    </Container>
  )
}
