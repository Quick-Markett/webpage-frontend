import { ParagraphProps } from './types'

export const Paragraph: React.FC<ParagraphProps> = ({ copy }) => {
  return (
    <li className="flex w-full flex-col gap-4">
      <p className="border-b border-neutral-300 pb-4 font-semibold lg:text-xl">
        {copy.title}
      </p>
      <article className="flex w-full flex-col gap-2">
        <p className="font-medium">{copy.subtitle}</p>
        <p
          className="text-sm text-neutral-600 lg:text-base"
          dangerouslySetInnerHTML={{ __html: copy.description }}
        />
      </article>
    </li>
  )
}
