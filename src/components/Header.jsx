import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
export default function Header() {
  return (
<div className='shadow-sm border-b sticky top-0 bg-white z-auto'>
<div className='flex justify-between items-center max-w-6xl mx-auto'>
    <Link href="/">
<Image className='hidden lg:inline-flex' src={"/Instagram_logo_black.webp"}
width={96}
height={96}></Image>
<Image className='lg:hidden' src={"/800px-Instagram_logo_2016.webp"}
width={40}
height={40}></Image>
</Link>
<input type="text" placeholder='Search' className='bg-gray-100 border border-gray-200 w-full rounded-lg py-2 px-4 max-w-[210px] ' />
<button className='text-sm font-semibold text-blue-500'>Login</button>

</div>



</div>  )
}
