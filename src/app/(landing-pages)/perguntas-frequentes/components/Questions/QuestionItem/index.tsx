'use client'

import { useState } from 'react'

import { ArrowDropdown } from '../../icons'
import { QuestionItemProps } from './types'

export const QuestionItem: React.FC<QuestionItemProps> = ({ copy }) => {
  const [isQuestionOpen, setIsQuestionOpen] = useState<boolean>(false)

  return (
    <button
      className={`flex w-full cursor-pointer flex-col justify-center rounded-sm border border-neutral-300 bg-white p-3 ring-1 ring-neutral-400 duration-default hover:border-yellow-500 hover:ring-yellow-500 lg:items-start lg:p-4`}
      onClick={() => setIsQuestionOpen(!isQuestionOpen)}
    >
      <div
        className={`${
          isQuestionOpen ? 'mb-2' : 'mb-0'
        } flex w-full items-center justify-between transition-all`}
      >
        <p className="text-left text-sm font-semibold transition group-hover:text-yellow-500 group-hover:brightness-125 lg:text-base">
          {copy.title}
        </p>

        <figure className="ml-2">
          <ArrowDropdown
            className={`w-4 transition-all ease-in-out ${
              isQuestionOpen ? 'rotate-0' : '-rotate-90'
            }`}
          />
        </figure>
      </div>

      <div
        className={`overflow-hidden text-left text-sm transition-all duration-default ease-in-out ${isQuestionOpen ? 'max-h-[300px]' : 'max-h-0'}`}
      >
        <article
          className="text-sm text-neutral-600"
          dangerouslySetInnerHTML={{ __html: copy.description }}
        />
      </div>
    </button>
  )
}
