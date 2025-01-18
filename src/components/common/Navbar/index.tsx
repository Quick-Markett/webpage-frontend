import { Anchor } from '@/components/toolkit/Anchor'
import { NAVBAR_LINKS } from './data'

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed inset-0 max-h-[44px] w-full bg-[#f5f5f7c2] bg-opacity-10 bg-clip-padding px-6 py-4 backdrop-blur-sm backdrop-filter lg:px-4 xl:px-0">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-4 lg:gap-8">
        {NAVBAR_LINKS.map((navbarLink, index) => (
          <Anchor
            key={`${navbarLink.label}-${index}`}
            href={navbarLink.href}
            variant="custom"
            className="cursor-pointer text-xs font-normal transition-all duration-300 hover:text-neutral-900"
          >
            {navbarLink.label}
          </Anchor>
        ))}
      </div>
    </nav>
  )
}
