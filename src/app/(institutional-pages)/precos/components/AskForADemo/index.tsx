import { FreeDemoForm } from '@/components/common/Forms/FreeDemoForm'
import { Container } from '@/components/toolkit/Container'

export const AskForADemo: React.FC = () => {
  return (
    <Container
      as="section"
      data-cid="how-it-works-ask-for-demo"
      wrapperClassName="bg-neutral-50 py-12 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 lg:max-w-7xl lg:flex-row lg:justify-between lg:gap-16">
        <div className="w-full max-w-3xl">
          <FreeDemoForm />
        </div>
        <article className="flex w-full flex-col gap-2">
          <h2 className="text-2xl font-semibold lg:text-3xl">
            Solicite uma demonstração da <br className="hidden xl:block" />{' '}
            nossa plataforma agora mesmo!
          </h2>
          <p className="text-sm text-neutral-600 lg:text-base">
            Descubra como nossa plataforma pode transformar a maneira como você
            trabalha! Preencha o formulário para agendar uma demonstração
            gratuita e conheça todas as funcionalidades que oferecemos para
            otimizar seus processos e alcançar melhores resultados
          </p>
        </article>
      </div>
    </Container>
  )
}
