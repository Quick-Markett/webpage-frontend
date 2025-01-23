import { Container } from '@/components/toolkit/Container'

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
      <input
        className="w-full max-w-2xl rounded-sm px-6 py-2.5 text-base outline-none ring-1 ring-neutral-300 lg:text-xl"
        placeholder="Digite aqui a sua dúvida"
        type="text"
      />
    </Container>
  )
}
