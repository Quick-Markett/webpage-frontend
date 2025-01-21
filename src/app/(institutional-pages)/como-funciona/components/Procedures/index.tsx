import { Container } from '@/components/toolkit/Container'

import { PROCEDURES_SECTIONS } from './data'

export const Procedures: React.FC = async () => {
  return (
    <Container
      as="section"
      data-cid="how-it-works-procedures"
      wrapperClassName="flex flex-col gap-8 bg-white py-12 lg:gap-12 lg:py-20"
    >
      {PROCEDURES_SECTIONS.map((section, index: number) => (
        <div
          className="mx-auto flex w-full max-w-2xl flex-col-reverse gap-8 border-b border-neutral-300 pb-8 last:border-transparent lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:pb-12"
          key={`${section.title}-${index}`}
        >
          <article
            className={`flex w-full flex-col gap-4 lg:gap-6 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <h2 className="text-2xl font-medium lg:text-3xl">
              {section.title}
            </h2>
            <div className="flex flex-col gap-4">
              <p
                className="text-sm text-neutral-600 lg:text-base"
                dangerouslySetInnerHTML={{ __html: section.description }}
              />
            </div>
          </article>
          <figure
            className={`min-h-[320px] w-full rounded-sm bg-slate-200 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
          />
        </div>
      ))}
    </Container>
  )
}
