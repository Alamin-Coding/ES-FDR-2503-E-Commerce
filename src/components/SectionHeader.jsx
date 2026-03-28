import React from 'react'

const SectionHeader = ({title, subtitle}) => {
  return (
    <div className='space-y-6'>
        <p className='flex items-center gap-2'>
            <span className='h-10 w-5 bg-secondary rounded-sm inline-block'></span>
            <span className='text-secondary'>{subtitle}</span>
        </p>
        <h2 className='text-[36px] font-semibold'>{title}</h2>
    </div>
  )
}

export default SectionHeader