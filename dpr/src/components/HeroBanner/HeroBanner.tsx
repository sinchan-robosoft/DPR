import React from 'react'
import { ThemedView } from '../themed-view'
import { Image, View } from 'react-native'
import CustomLinearGradient from '../CustomLinearGradient/CustomLinearGradient'
import { ThemedText } from '../themed-text'
import { DetailsPageItem } from '@/Types/page'

const HeroBanner = ({ section } : {section : DetailsPageItem}) => {
    return (
        <ThemedView className='relative'>
            <Image
                source={{
                    uri: section.heroBanner
                }}
                style={{
                    aspectRatio: 12 / 11,
                    borderRadius: 10
                }}
            />

            <View className='absolute bottom-0 left-0 right-0 h-40'>
                <CustomLinearGradient />
            </View>

            <ThemedView className='absolute bottom-4 left-0 right-0 mx-3 bg-transparent gap-2'>
                <ThemedText className='text-[#d9d9e6] text-lg'>
                    {section.movieTitle}
                </ThemedText>

                <ThemedView className='bg-transparent'>
                    <ThemedText className='text-xs text-[#A0A0B0]'>
                        {section.releaseDate} | {section.duration} | {section.ratings}
                    </ThemedText>

                    <ThemedText className='text-xs text-[#A0A0B0]'>
                        {section?.genre?.join(", ")} | {section.contentRating}
                        {/* author : sinchan, potential issue
                            issue : section?.genre?.join(", ")} | if section is undefined then we will ge t unwated |
                        */}
                    </ThemedText>
                </ThemedView>
            </ThemedView>

        </ThemedView>
    )
}

export default HeroBanner