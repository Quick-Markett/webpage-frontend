import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'max-w-fit',
    'rounded-sm',
    'px-6',
    'py-2',
    'w-full',
    'tracking-wide',
    'transition-all',
    'duration-default',
    'ease-in-out',
    'disabled:cursor-not-allowed',
    'disabled:opacity-60'
  ],
  {
    variants: {
      variant: {
        primary: [
          'text-neutral-50',
          'bg-gradient-to-tr',
          'from-neutral-900',
          'to-neutral-800',
          'hover:brightness-[125%]'
        ],
        primaryOutline: [
          'text-neutral-700',
          'border',
          'border-neutral-700',
          'hover:bg-neutral-800',
          'hover:border-neutral-800',
          'hover:text-neutral-50',
          'hover:brightness-[125%]'
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
      variant: 'primary'
    }
  }
)
