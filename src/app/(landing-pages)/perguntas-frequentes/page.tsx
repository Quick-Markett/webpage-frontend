import { NextPage } from 'next'

import { getMetaData } from '@/utils/getters/getMetaData'

export async function generateMetadata() {
  return getMetaData({
    title: '',
    description: '',
    opengraph: ''
  })
}

const Page: NextPage = async () => {
  return <main></main>
}

export default Page
