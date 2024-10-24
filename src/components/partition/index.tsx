import { PARCEL } from '@/constants/images'
import Image from 'next/image'
import React from 'react'

const Partition = () => {
  return (
    <div className=" flex flex-col justify-center items-center ">
          <div className="large:w-content w-full medium:px-[2.5rem] large:px-0 px-[1.5rem] text-webblack">
            <div className="flex  gap-5 justify-center items-center">
              <hr className="h-[3px] bg-primary w-full rounded-md" />
              <Image src={PARCEL} alt="parcel" className="w-6" />
              <hr className="h-[3px] bg-primary w-full rounded-md" />
            </div>
          </div>
        </div>
  )
}

export default Partition
