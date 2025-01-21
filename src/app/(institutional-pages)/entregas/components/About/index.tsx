import { Container } from '@/components/toolkit/Container'

export const About: React.FC = () => {
  return (
    <Container
      as="section"
      data-cid="delivery-about"
      wrapperClassName="bg-white py-12 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-12 lg:max-w-7xl lg:gap-16">
        <article className="flex w-full flex-col gap-2">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Flexibilidade e personalização em cada entrega
          </h2>
          <p className="text-sm lg:text-base">
            Com nossa plataforma, você tem total controle sobre suas entregas.
            Escolha o horário que melhor se adapta à sua rotina, adicione
            instruções específicas para nossos entregadores e personalize sua
            experiência para que o processo seja ainda mais prático e eficiente.
          </p>
        </article>
        <article className="flex w-full flex-col gap-2">
          <h2 className="text-xl font-medium lg:text-2xl">
            Suporte dedicado e sempre disponível
          </h2>
          <p className="text-sm lg:text-base">
            Conte com uma equipe de suporte altamente capacitada e sempre pronta
            para ajudar. Seja para esclarecer dúvidas, resolver problemas ou
            acompanhar o status do seu pedido, estamos aqui para garantir uma
            experiência de entrega tranquila e confiável.
          </p>
        </article>
      </div>
    </Container>
  )
}
