import { CARDS } from './data'

export const HowItWorks: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 py-12 lg:py-20">
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
        <ul className="flex h-auto w-full justify-between gap-6 lg:items-stretch lg:gap-10 lg:self-stretch">
          {CARDS.map((card, index) => (
            <li
              className="flex h-auto w-full flex-col gap-4 rounded-sm border border-neutral-100 bg-neutral-50 p-4"
              key={`${card.title}-${index}`}
            >
              <article className="flex w-full flex-col gap-1">
                <h3 className="text-base font-medium">{card.title}</h3>
                <div className="h-0.5 w-12 bg-amber-700" />
              </article>
              <p className="text-sm text-neutral-600">{card.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
