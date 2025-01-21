import { Button } from '@/components/toolkit/Button'
import { Container } from '@/components/toolkit/Container'
import { formatCurrency } from '@/utils/getters/getFormattedCurrency'

import { OPTIONS_DATA } from './data'

export const Options: React.FC = () => {
  return (
    <Container
      as="section"
      data-cid="pricing-options"
      wrapperClassName="bg-neutral-50 py-12 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:gap-16">
        <article className="flex flex-col items-center gap-2">
          <h2 className="text-left text-2xl font-semibold lg:text-center lg:text-3xl">
            Nossos Planos Oferecidos
          </h2>
          <p className="text-left text-sm text-neutral-600 lg:text-center lg:text-base">
            Nós fornecemos as melhores features aos nossos usuários. Sempre
            focados na <br className="hidden xl:block" /> satisfação e
            experiência em nossa plataforma
          </p>
        </article>
        <ul className="flex h-full flex-col gap-6 lg:max-w-6xl lg:flex-row lg:items-stretch lg:justify-between lg:gap-12 lg:self-stretch">
          <li className="rouded-sm flex w-full flex-col gap-4 bg-white lg:gap-6">
            <hr
              className={`h-4 w-full rounded-t-sm bg-gradient-to-r from-purple-600 to-purple-300`}
            />
            <article className="flex flex-col items-center gap-2 px-4">
              <span className="w-fit rounded-full bg-purple-50 px-2 py-1 text-center text-xs font-medium uppercase text-purple-500">
                Plano Grátis
              </span>
              <p className="text-center text-2xl lg:text-3xl">
                {formatCurrency(0)}/mês
              </p>
              <p className="text-center text-xs text-neutral-600 lg:text-sm">
                Plano Gratuíto
              </p>
            </article>
            <ul className="ml-4 flex list-disc flex-col gap-2 px-4 pb-4 lg:pb-6">
              {OPTIONS_DATA.free.map((option: string, index: number) => (
                <li className="text-sm" key={`${option}-${index}`}>
                  {option}
                </li>
              ))}
            </ul>
            <div className="flex h-full items-end px-4 pb-4 lg:pb-6">
              <Button
                className="min-w-full md:text-sm"
                variant="primaryOutline"
              >
                Assinar agora
              </Button>
            </div>
          </li>
          <li className="rouded-sm flex w-full flex-col gap-4 bg-white lg:gap-6">
            <hr
              className={`h-4 w-full rounded-t-sm bg-gradient-to-r from-amber-600 to-amber-400`}
            />
            <article className="flex flex-col items-center gap-2 px-4">
              <span className="w-fit rounded-full bg-amber-50 px-2 py-1 text-center text-xs font-medium uppercase text-yellow-700">
                Plano Básico
              </span>
              <p className="text-center text-2xl lg:text-3xl">
                {formatCurrency(49.99)}/mês
              </p>
              <p className="text-center text-xs text-neutral-600 lg:text-sm">
                Plano Gratuíto
              </p>
            </article>
            <ul className="ml-4 flex list-disc flex-col gap-2 px-4">
              {OPTIONS_DATA.basic.map((option: string, index: number) => (
                <li className="text-sm" key={`${option}-${index}`}>
                  {option}
                </li>
              ))}
            </ul>
            <div className="flex h-full items-end px-4 pb-4 lg:pb-6">
              <Button
                className="min-w-full md:text-sm"
                variant="primaryOutline"
              >
                Assinar agora
              </Button>
            </div>
          </li>
          <li className="rouded-sm flex w-full flex-col gap-4 bg-white lg:gap-6">
            <hr
              className={`h-8 w-full rounded-t-sm bg-gradient-to-r from-neutral-800 to-neutral-500`}
            />
            <article className="flex flex-col items-center gap-2 px-4">
              <span className="w-fit rounded-full bg-neutral-50 px-2 py-1 text-center text-xs font-medium uppercase text-neutral-700">
                Plano Premium
              </span>
              <p className="text-center text-2xl lg:text-3xl">
                {formatCurrency(99.99)}/mês
              </p>
              <p className="text-center text-xs text-neutral-600 lg:text-sm">
                Plano Premium
              </p>
            </article>
            <ul className="ml-4 flex list-disc flex-col gap-2 px-4">
              {OPTIONS_DATA.premium.map((option: string, index: number) => (
                <li className="text-sm" key={`${option}-${index}`}>
                  {option}
                </li>
              ))}
            </ul>
            <div className="flex h-full items-end px-4 pb-4 lg:pb-6">
              <Button
                className="min-w-full md:text-sm"
                variant="primaryOutline"
              >
                Assinar agora
              </Button>
            </div>
          </li>
        </ul>
        <p className="mx-auto -mt-4 text-xs text-neutral-500">
          * Valores sujeitos a alteração de preço
        </p>
      </div>
    </Container>
  )
}
