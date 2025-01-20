import { cva } from 'class-variance-authority'

export const anchorVariants = cva(
  [
    'max-w-fit',
    'flex',
    'rounded-sm',
    'cursor-pointer',
    'justify-center',
    'items-center',
    'px-6',
    'py-2',
    'w-full',
    'tracking-wide',
    'transition',
    'ease-in-out',
    'duration-300'
  ],
  {
    variants: {
      variant: {
        primary: [
          'text-neutral-50',
          'bg-gradient-to-r',
          'from-neutral-900',
          'to-neutral-800',
          'hover:brightness-[115%]'
        ],
        primaryOutline: [
          'text-neutral-700',
          'border',
          'border-neutral-900',
          'hover:bg-neutral-800',
          'hover:border-neutral-800',
          'hover:text-neutral-50'
        ],
        secondary: [
          'text-neutral-800',
          'bg-white',
          'hover:shadow',
          'hover:brightness-[110%]'
        ],
        danger: [
          'text-neutral-50',
          'bg-gradient-to-tr',
          'from-red-600',
          'via-red-500',
          'to-red-500',
          'hover:brightness-[115%]'
        ]
      },
      size: {
        xs: ['text-xs'],
        sm: ['text-sm'],
        base: ['text-sm', 'md:text-base'],
        lg: ['text-base', 'md:text-lg'],
        xl: ['text-lg', 'md:text-xl'],
        '2xl': ['text-xl', 'md:text-2xl']
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base'
    }
  }
)
