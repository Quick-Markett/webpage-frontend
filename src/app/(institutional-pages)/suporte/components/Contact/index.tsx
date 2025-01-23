import { Anchor } from '@/components/toolkit/Anchor'
import { Container } from '@/components/toolkit/Container'

import { CONTACT_CHANNELS } from './data'

export const Contact: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex w-full flex-col gap-8 lg:gap-12"
      data-cid="most-asked-questions-support"
      wrapperClassName="bg-white py-12 lg:py-20"
    >
      <article className="flex w-full flex-col gap-1">
        <h2 className="text-left text-2xl font-semibold lg:text-3xl">
          Canais de contato
        </h2>
        <p className="text-sm text-neutral-600 lg:text-base">
          Entre em contato com nossa equipe à partir dos meios apresentados
          abaixo:
        </p>
      </article>
      <ul className="flex w-full flex-col gap-4 lg:flex-row lg:justify-between lg:gap-6">
        {CONTACT_CHANNELS.map((channel, index: number) => (
          <li
            className="flex w-full flex-col gap-2 rounded-sm border border-neutral-200 bg-white p-4 lg:gap-4 lg:px-4 lg:py-6"
            key={`${channel}-${index}`}
          >
            {channel?.observation ? (
              <div className="flex w-full justify-end">
                <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700">
                  {channel.observation}
                </span>
              </div>
            ) : null}
            <div className="flex h-full w-full flex-col justify-end gap-4 lg:gap-6">
              <article className="flex w-full flex-col gap-2">
                <p className="text-base font-semibold lg:text-xl">
                  {channel.title}
                </p>
                <p
                  className="text-sm text-neutral-600 lg:text-base"
                  dangerouslySetInnerHTML={{ __html: channel.description }}
                />
              </article>
              <Anchor className="min-w-full" href="#" variant="primary">
                {channel.anchor.label}
              </Anchor>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}
