import { NearbyMarkets } from '../icons/NearbyMarkets'

export const Markets: React.FC = () => {
  return (
    <section className="bg-white px-4 py-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <figure className="w-full max-w-[620px]">
          <NearbyMarkets />
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
        </article>
      </div>
    </section>
  )
}
