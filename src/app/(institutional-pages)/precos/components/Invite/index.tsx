import { Anchor } from '@/components/toolkit/Anchor'

export const Invite: React.FC = () => {
  return (
    <section className="bg-neutral-700 px-4 py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 lg:max-w-7xl lg:flex-row lg:justify-between">
        <article className="flex w-full flex-col">
          <h2 className="text-2xl font-semibold text-slate-50 lg:text-3xl">
            Entregas Ágeis e Confiáveis
          </h2>
          <p className="text-sm text-slate-50 lg:text-base xl:text-lg">
            Conectamos mercados e clientes com eficiência, rapidez e segurança.
          </p>
        </article>
        <Anchor
          className="h-fit w-auto"
          href="/como-funciona"
          variant="secondary"
        >
          Saiba como funciona
        </Anchor>
      </div>
    </section>
  )
}
