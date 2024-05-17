import React from 'react'
import { Skeleton } from '../ui/skeleton'

const TopicListSkeleton = () => {
  return (
    <div className="flex gap-2 flex-wrap">
    <Skeleton className='rounded-full w-32 h-8 '/>
        <Skeleton className='rounded-full w-24 h-8 '/>
        <Skeleton className='rounded-full w-48 h-8 '/>
        <Skeleton className='rounded-full w-16 h-8 '/>
    </div>
  )
}

export default TopicListSkeleton