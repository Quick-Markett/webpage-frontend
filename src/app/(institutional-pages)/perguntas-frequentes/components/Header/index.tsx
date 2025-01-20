export const Header: React.FC = async () => {
  return (
    <header className="mx-auto flex w-full max-w-2xl flex-col gap-2 lg:max-w-7xl">
      <p className="animate__animated animate__fadeIn bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-center text-sm font-semibold text-transparent lg:text-left lg:text-base">
        FAQ
      </p>
      <h1 className="animate__animated animate__fadeIn text-center text-2xl font-semibold lg:text-left lg:text-4xl">
        Perguntas frequentes
      </h1>
    </header>
  )
}
