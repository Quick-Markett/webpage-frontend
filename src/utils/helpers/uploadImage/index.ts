import { uploadImageData } from './types'

export const uploadImage = async ({ imagePath }: uploadImageData) => {
  const request = await fetch('/api/cloudinary/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      path: imagePath
    })
  })

  if (request.ok) {
    return await request.json()
  }

  return null
}
