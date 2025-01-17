import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'max-w-fit',
    'rounded-[4px]',
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
          'text-slate-50',
          'bg-gradient-to-tr',
          'from-slate-900',
          'to-slate-800',
          'hover:brightness-[125%]'
        ],
        primaryOutline: [
          'text-slate-700',
          'border',
          'border-slate-700',
          'hover:bg-slate-800',
          'hover:border-slate-800',
          'hover:text-slate-50',
          'hover:brightness-[125%]'
        ],
        danger: [
          'text-slate-50',
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
