import React from 'react'

function Footer() {
  return (
<div className='grid grid-cols-1 md:grid-cols-4 space-y-10
px-32 py-14 bg-gray-100 text-gray-600'>
    <div className='space-y-4 text-xs text-gray-800'>
      <h5 className='font-bold'>ABOUT</h5>
      <p>How Airbnb works</p>
      <p>Newsroom</p>
      <p>Investors</p>
      <p>Airbnb plus</p>
      <p>Airbnb luxe</p>
    </div>

      <div className='space-y-4 text-xs text-gray-800'>
      <h5 className='font-bold'>COMMUNITY</h5>
      <p>Accessibility</p>
      <p>This is not a real site</p>
      <p>Its a pretty awsome clone</p>
      <p>Referals accepted</p>
      <p>zac here </p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
      <h5 className='font-bold'>HOST</h5>
      <p>zac</p>
      <p>welcome</p>
      <p>full stack hero</p>
      <p>Hundred of students</p>
      <p>lets join now</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
      <h5 className='font-bold'>SUPPORT</h5>
      <p>Help Centre</p>
      <p>Trust & Safety</p>
      <p>Say Hi Youtube</p>
      <p>Easter Eggs</p>
      <p>For the Win</p>
      </div>
</div>
  )
}

export default Footer

