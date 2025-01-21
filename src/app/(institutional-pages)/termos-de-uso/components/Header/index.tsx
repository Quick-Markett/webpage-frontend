import { Container } from '@/components/toolkit/Container'

export const Header: React.FC = () => {
  return (
    <Container
      as="header"
      data-cid="terms-of-use-header"
      wrapperClassName="w-full bg-white pb-12 pt-28 lg:pb-20 lg:pt-32"
    >
      <header className="mx-auto flex w-full max-w-2xl flex-col gap-2 lg:max-w-7xl">
        <h1 className="animate__animated animate__fadeIn text-center text-2xl font-semibold lg:text-left lg:text-4xl">
          Termos de Uso
        </h1>
        <div className="animate__animated animate__fadeIn h-0.5 w-12 bg-amber-700" />
        <p className="animate__animated animate__fadeIn text-sm text-neutral-600 lg:text-base">
          Bem-vindo à nossa plataforma de entregas ágeis para mercados! Aqui
          você encontrará todas as informações e regras que regem o uso dos
          nossos serviços. Leia atentamente para garantir uma experiência segura
          e eficiente.
        </p>
      </header>
    </Container>
  )
}
