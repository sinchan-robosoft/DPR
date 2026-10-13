import { DetailsPageItem } from '@/Types/page'
import React from 'react'
import { ThemedView } from '../themed-view'
import { ThemedText } from '../themed-text'

const OverView = ({ section }: { section: DetailsPageItem }) => {
  return (
    <ThemedView className='p-3 gap-2'>
      <ThemedText className='text-white text-lg'>{section.movieTitle}</ThemedText>
      <ThemedText className='text-[#A0A0B0]'>{section.overview}</ThemedText>
      {/* author : sinchan, potential issue 2
        overview's heading is taken from movieTitle, no issue with it logically but makes the code hard to readable
      */}
    </ThemedView>
  )
}

export default OverView