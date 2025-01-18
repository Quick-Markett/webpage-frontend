import { NextPage } from 'next'

import { Navbar } from '@/components/common/Navbar'
import { getMetaData } from '@/utils/getters/getMetaData'

export async function generateMetadata() {
  return getMetaData({
    title: '',
    description: '',
    opengraph: ''
  })
}

const Page: NextPage = async () => {
  return (
    <>
      <Navbar /> <main></main>
    </>
  )
}

export default Page
