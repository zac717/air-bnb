import Image from 'next/image'
import { Inter } from 'next/font/google'
import CustomHeader from '@/components/CustomHeader'
import Banner from '@/components/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div className=''>
{/*Header*/}
<CustomHeader />

    {/*Banner*/}
    <Banner />
</div>
  )
}
