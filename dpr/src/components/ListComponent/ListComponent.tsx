import React from 'react'
import { ThemedView } from '../themed-view'
import { castType, DetailsPageItem, moreLikeThisType } from '@/Types/page'
import { ThemedText } from '../themed-text'
import { FlatList, Image } from 'react-native'

const ListComponent = ({ section, height, width, borderRadius }: { section: DetailsPageItem, height?: number, width?: number, borderRadius?: number }) => {
  const title = section.movieTitle;
  const isMlt = section.mlt ?? false;
  const data = isMlt ? section.mlt : section.cast;
  const defaultRadius = isMlt ? 12 : 40;
  const defaultWidth = isMlt ? 100 : 80;
  return (
    <ThemedView className='p-3 gap-3 '>
      <ThemedText className='text-xl text-[#d9d9e6] mr-4'>
        {title}
      </ThemedText>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ThemedView className='mr-3 flex items-center gap-1'>
            <Image
              source={{ uri: item.imageUrl }}
              style={{
                width: width ? width : defaultWidth,
                height: height ? height : 80,
                borderRadius: borderRadius ? borderRadius : defaultRadius
              }}
            />
            <ThemedText className='w-20'>{item?.name}</ThemedText>
          </ThemedView>
        )}
      />
    </ThemedView>
  )
}

export default ListComponent