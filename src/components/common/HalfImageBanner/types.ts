import { HTMLAttributes, PropsWithChildren } from 'react'

import { ImageCopy } from '@/types/copy/imageCopy'

export interface HalfImageBannerProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  image: ImageCopy
}
