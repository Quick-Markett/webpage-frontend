import { Container } from '@/components/toolkit/Container'

import { MOST_ASKED_QUESTIONS } from './data'

export const MostAskedQuestions: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex w-full flex-col gap-8 lg:gap-16"
      data-cid="most-asked-questions-support"
      wrapperClassName="bg-neutral-100 py-12 lg:py-20"
    >
      <article className="flex w-full flex-col gap-2">
        <h2 className="text-left text-2xl font-semibold lg:text-3xl">
          Dúvidas mais comuns
        </h2>
        <p className="text-sm text-neutral-600 lg:text-base">
          Conte com nosso suporte dedicado para resolver qualquer questão sobre
          a plataforma, pedidos, entregas e <br className="hidden xl:block" />{' '}
          muito mais. Sua experiência é a nossa prioridade!
        </p>
      </article>
      <ul className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
        {MOST_ASKED_QUESTIONS.map((question: string, index: number) => (
          <li
            className="line-clamp-1 w-full cursor-pointer overflow-hidden rounded-full border border-neutral-200 bg-white px-4 py-3 text-center text-sm transition-all duration-300 hover:border-[#bea08b] hover:bg-[#fff4ec]"
            key={`${question}-${index}`}
          >
            {question}
          </li>
        ))}
      </ul>
    </Container>
  )
}
