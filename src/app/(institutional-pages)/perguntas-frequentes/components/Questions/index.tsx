import { Container } from '@/components/toolkit/Container'

import { FAQ_QUESTIONS } from './data'
import { QuestionItem } from './QuestionItem'

export const Questions: React.FC = async () => {
  return (
    <Container
      as="section"
      data-cid="faq-questions"
      wrapperClassName="mx-auto flex w-full max-w-2xl flex-col gap-4 lg:max-w-7xl lg:gap-6"
      disableSidePadding
    >
      {FAQ_QUESTIONS.map((question, index: number) => (
        <QuestionItem copy={question} key={`${question.title}-${index}`} />
      ))}
    </Container>
  )
}
