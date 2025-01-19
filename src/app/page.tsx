import { NextPage } from 'next'

import { getMetaData } from '@/utils/seo/getMetaData'

export async function generateMetadata() {
  return getMetaData({
    title: '',
    description: '',
    opengraph: ''
  })
}

const Page: NextPage = async () => {
  return <main>teste</main>
}

export default Page
