import { CardProps } from './types'

export const Card: React.FC<CardProps> = ({ copy }) => {
  return (
    <li className="flex h-auto w-full flex-col gap-4 rounded-sm border border-neutral-100 bg-neutral-50 p-4">
      <article className="flex w-full flex-col gap-1">
        <h3 className="text-base font-medium">{copy.title}</h3>
        <div className="h-0.5 w-12 bg-amber-700" />
      </article>
      <p className="text-sm text-neutral-600">{copy.description}</p>
    </li>
  )
}
