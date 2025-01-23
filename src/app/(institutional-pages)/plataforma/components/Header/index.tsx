import { FreeDemoForm } from '@/components/common/Forms/FreeDemoForm'
import { HalfImageBanner } from '@/components/common/HalfImageBanner'
import { Container } from '@/components/toolkit/Container'

export const Header: React.FC = async () => {
  return (
    <HalfImageBanner
      image={{
        alt: 'Header Image',
        src: '/plataforma/plataforma-header.jpg',
        height: 4000,
        width: 6000
      }}
      className="items-center bg-white"
      imageClassName="2xl:max-h-[615px]"
    >
      <Container
        as="header"
        className="flex flex-col gap-4 lg:gap-8"
        data-cid="how-it-works-header"
      >
        <article className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold lg:text-4xl">
            Transformando o Mercado de Entregas
          </h1>
          <p className="text-sm text-neutral-600 lg:text-base">
            Combinamos inovação e tecnologia para oferecer soluções que conectam
            mercados a clientes com rapidez, eficiência e personalização.
          </p>
        </article>
        <div className="w-full">
          <FreeDemoForm />
        </div>
      </Container>
    </HalfImageBanner>
  )
}
