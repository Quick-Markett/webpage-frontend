import { NextPage } from 'next'

import { FreeDemoForm } from '@/components/common/Forms/FreeDemoForm'
import { getMetaData } from '@/utils/seo/getMetaData'

export async function generateMetadata() {
  return getMetaData({
    title: '',
    description: '',
    opengraph: ''
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <FreeDemoForm />
    </main>
  )
}

export default Page
