import { Button } from '@/components/toolkit/Button'

import { ArrowRight } from '../icons/ArrowRight'

export const TryItNow: React.FC = () => {
  return (
    <section className="relative z-10 h-[320px] w-full bg-[url('/entregas/try-it-now-background.jpg')] bg-cover bg-center bg-no-repeat object-center lg:h-[420px]">
      <div className="absolute z-20 h-[320px] w-full bg-gradient-to-t from-neutral-900 via-neutral-900 to-[#333333bd] opacity-90 brightness-[0.6] lg:h-[420px]" />
      <div className="absolute z-30 flex h-[320px] w-full items-center justify-center lg:h-[420px]">
        <Button
          className="flex items-center gap-3 px-8 py-3 font-normal"
          variant="secondary"
        >
          <p className="sm:text-lg md:text-xl">Crie uma conta agora mesmo</p>
          <ArrowRight className="h-4 w-4 lg:h-6 lg:w-6" />
        </Button>
      </div>
    </section>
  )
}
