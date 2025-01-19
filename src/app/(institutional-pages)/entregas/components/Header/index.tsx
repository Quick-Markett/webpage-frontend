import { Button } from '@/components/toolkit/Button'

export const Header: React.FC = () => {
  return (
    <section className="bg-neutral-100 px-4 pb-12 pt-28 lg:pb-20 lg:pt-32">
      <header className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-4 lg:max-w-7xl lg:gap-8">
        <article className="flex w-full flex-col gap-2">
          <h1 className="text-center text-2xl font-semibold lg:text-4xl">
            Seu Pedido,
            <br className="hidden xl:block" />{' '}
            <span className="bg-gradient-to-r from-purple-500 to-amber-600 bg-clip-text text-2xl text-transparent lg:text-4xl">
              Nossa Prioridade
            </span>
          </h1>
          <p className="w-full text-center text-sm lg:text-base">
            Receba tudo o que precisa com eficiência e praticidade,{' '}
            <br className="hidden xl:block" /> do mercado à sua porta.
          </p>
        </article>
        <Button className="md:text-sm">Começar agora</Button>
      </header>
    </section>
  )
}
