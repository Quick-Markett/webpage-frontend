import { PropsWithChildren, SetStateAction } from 'react'

export interface UploadButtonProps extends PropsWithChildren {
  isLoading: boolean
  setImagePath: React.Dispatch<SetStateAction<string>>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  uploadImageAction: any
}
