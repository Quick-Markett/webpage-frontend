import { Container } from '@/components/toolkit/Container'

import { FAQ_QUESTIONS } from './data'
import { QuestionItem } from './QuestionItem'

export const Questions: React.FC = async () => {
  return (
    <Container
      as="section"
      className="flex w-full flex-col gap-4 lg:gap-6"
      data-cid="faq-questions"
      wrapperClassName="mx-auto w-full max-w-2xl  lg:max-w-7xl"
      disableSidePadding
    >
      {FAQ_QUESTIONS.map((question, index: number) => (
        <QuestionItem copy={question} key={`${question.title}-${index}`} />
      ))}
    </Container>
  )
}
