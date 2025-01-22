import { ErrorSignal } from '@/assets/common/ErrorSignal'

import { FieldErrorProps } from './types'

export const FieldError: React.FC<FieldErrorProps> = ({
  error,
  centered = false
}) => {
  return (
    error && (
      <div
        className={`flex items-center gap-1.5 text-sm text-red-500 ${
          centered ? 'mx-auto' : ''
        }`}
      >
        <ErrorSignal className="h-3.5 w-3.5" />
        <p className="text-left font-semibold text-red-400 subpixel-antialiased first-letter:uppercase">
          {error}
        </p>
      </div>
    )
  )
}
