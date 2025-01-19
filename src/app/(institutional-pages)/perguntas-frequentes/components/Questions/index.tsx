import { FAQ_QUESTIONS } from './data'
import { QuestionItem } from './QuestionItem'

export const Questions: React.FC = async () => {
  return (
    <section className="mx-auto flex w-full max-w-2xl flex-col gap-4 lg:max-w-7xl lg:gap-6">
      {FAQ_QUESTIONS.map((question, index: number) => (
        <QuestionItem copy={question} key={`${question.title}-${index}`} />
      ))}
    </section>
  )
}
