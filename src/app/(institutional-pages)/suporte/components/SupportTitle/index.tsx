import { Container } from '@/components/toolkit/Container'

import { MagnifyingGlass } from '../icons/MagnifyingGlass'

export const SupportTitle: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex w-full flex-col items-center gap-6 lg:gap-10"
      data-cid="support-title"
      wrapperClassName="py-12 lg:py-20 px-4"
    >
      <article className="mx-auto flex w-full flex-col items-center gap-1">
        <h1 className="text-center text-2xl font-semibold lg:text-4xl">
          Conheça o nosso Suporte
        </h1>
        <p className="text-center text-sm text-neutral-600 lg:text-base">
          Soluções rápidas para todas as suas dúvidas e problemas.
        </p>
      </article>
      <div className="group flex w-full max-w-2xl items-center gap-4 rounded-sm px-6 py-3 ring-1 ring-neutral-300 transition-all duration-300 focus-within:ring-yellow-700 lg:gap-6">
        <figure className="w-auto">
          <MagnifyingGlass className="h-4 w-4 cursor-pointer text-neutral-400 transition-all duration-300 hover:text-neutral-500 lg:h-6 lg:w-6" />
        </figure>
        <input
          className="w-full text-base outline-none"
          placeholder="Digite aqui a sua dúvida"
          type="text"
        />
      </div>
    </Container>
  )
}
