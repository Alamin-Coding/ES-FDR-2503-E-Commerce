import React from 'react'

const ServiceCard = ({Icon, title, description}) => {
  return (
    <div className='text-center'>
        <div className="size-20 rounded-full mx-auto bg-[#C1C0C1] flex items-center justify-center z-2 group-hover:bg-[#E67C7C]">
          <div className="size-13.5 rounded-full bg-black z-5 flex items-center justify-center group-hover:bg-[#ede3e3]">
            <Icon width={40} height={40} fill="none" stroke="white" />
          </div>
        </div>
        <h3 className="text-[20px] font-semibold leading-7 pt-6 pb-2">{title}</h3>
        <p className=" text-[14px] leading-5.25">{description}</p>
    </div>
  )
}

export default ServiceCard