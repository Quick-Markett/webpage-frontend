import { Container } from '@/components/toolkit/Container'

import { PARAGRAPHS } from './data'
import { Paragraph } from './Paragraph'

export const Paragraphs: React.FC = () => {
  return (
    <Container
      as="section"
      className="w-full bg-white pb-12 lg:pb-20"
      data-cid="terms-of-use-paragraphs"
    >
      <ul className="mx-auto flex w-full max-w-2xl flex-col gap-6 lg:max-w-7xl lg:gap-12">
        {PARAGRAPHS.map((paragraph, index: number) => (
          <Paragraph copy={paragraph} key={`${paragraph.title}-${index}`} />
        ))}
      </ul>
    </Container>
  )
}
