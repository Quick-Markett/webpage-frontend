import Image from 'next/image'

import { Container } from '@/components/toolkit/Container'

export const Header: React.FC = () => {
  return (
    <Container
      as="section"
      className="px-0"
      container="fluid"
      data-cid="support-header"
      wrapperClassName="px-0 w-full max-w-full"
    >
      <figure className="max-h-[420px] max-w-full">
        <Image
          alt="background-image"
          className="h-full max-h-[420px] w-full object-cover object-center"
          height={400}
          src="/entregas/try-it-now-background.jpg"
          width={6000}
        />
      </figure>
    </Container>
  )
}
