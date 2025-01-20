import { Anchor } from '@/components/toolkit/Anchor'

import { NAVBAR_LINKS } from './data'
import { Account } from './icons/Account'
import { Shop } from './icons/Shop'

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed inset-0 z-[99999] max-h-[44px] w-full bg-[#f5f5f7c2] bg-opacity-10 bg-clip-padding px-6 py-4 backdrop-blur-sm backdrop-filter lg:px-4 xl:px-0">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-4 lg:gap-8">
        {NAVBAR_LINKS.map((navbarLink, index) => (
          <Anchor
            className="cursor-pointer text-xs font-normal transition-all duration-300 hover:text-neutral-900"
            href={navbarLink.href}
            key={`${navbarLink.label}-${index}`}
            variant="custom"
          >
            {navbarLink.label}
          </Anchor>
        ))}
        <div className="ml-2 flex items-center gap-4 lg:gap-6">
          <Shop className="h-4 w-4 cursor-pointer text-neutral-700 transition-all duration-300 hover:brightness-125" />
          <Account className="h-4 w-4 cursor-pointer text-neutral-700 transition-all duration-300 hover:brightness-125" />
        </div>
      </div>
    </nav>
  )
}
