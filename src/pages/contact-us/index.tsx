import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import ContactLanding from './landing'
import Partition from '@/components/partition'
import ContactDetail from './contactdetail'
import GetInTouch from './getintouch'

const ContactIndex = () => {
  return (
    <div>
        <Navbar/>
        <ContactLanding/>
        <div className="bg-gray-100 flex flex-col gap-10 py-10">
        <ContactDetail/>
        <Partition/>
        <GetInTouch/>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactIndex