import CustomButton from '@/components/CustomButton/CustomButton'
import CustomLinearGradient from '@/components/CustomLinearGradient/CustomLinearGradient'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { Image } from 'expo-image'
import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const DetailPage = () => {
    const cta = [{
        id: "WatchNow",
        btnText: "Watch Now"
    }, {
        id: "WatchLater",
        btnText: "Watch later."
    }]

    const casts = [
    {
        id: 1,
        name: "Robert Downey Jr.",
        character: "Tony Stark / Iron Man",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Robert_Downey_Jr.jpg"
    },
    {
        id: 2,
        name: "Chris Evans",
        character: "Steve Rogers / Captain America",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR644zsglXt1jZJkZHIQ0ovycso_Y13moCr0rAKY2suPNS2Zhsyg6sb2tDzC6XEdeaQ1WXxN4uT_aW9Urwewb-esjyt92sa0qSPuODGNbo2Dg&s=10"
    },
    {
        id: 3,
        name: "Mark Ruffalo",
        character: "Bruce Banner / Hulk",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSTC5zMKabVB_V69FazimrWgqgDJNETVUML8NWqQwD0U2rKOBcyTZJcJccvifxB-TaXLY7ygzcAKziXu1OKOjahW0petL3CS20UKa8ks3Dfw&s=10"
    },
    {
        id: 4,
        name: "Chris Hemsworth",
        character: "Thor",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Chris_Hemsworth_by_Gage_Skidmore_2.jpg"
    },
    {
        id: 5,
        name: "Scarlett Johansson",
        character: "Natasha Romanoff / Black Widow",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Scarlett_Johansson_CaS_2012.jpg"
    },
    {
        id: 6,
        name: "Jeremy Renner",
        character: "Clint Barton / Hawkeye",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Jeremy_Renner_2014.jpg"
    },
    {
        id: 7,
        name: "Don Cheadle",
        character: "James Rhodes / War Machine",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Don_Cheadle_2016.jpg"
    },
    {
        id: 8,
        name: "Paul Rudd",
        character: "Scott Lang / Ant-Man",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Paul_Rudd_2015.jpg"
    },
    {
        id: 9,
        name: "Brie Larson",
        character: "Carol Danvers / Captain Marvel",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Brie_Larson_2018.jpg"
    },
    {
        id: 10,
        name: "Karen Gillan",
        character: "Nebula",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Karen_Gillan_2018.jpg"
    },
    {
        id: 11,
        name: "Danai Gurira",
        character: "Okoye",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Danai_Gurira_2019.png"
    },
    {
        id: 12,
        name: "Benedict Wong",
        character: "Wong",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Benedict_Wong_by_Gage_Skidmore.jpg"
    }
];

    const moreLikeThis = [
            { id: 1, title: 'Mountain Escape', subtitle: 'Weekend getaways', image: 'https://picsum.photos/seed/mountain/1280/720' },
            { id: 2, title: 'City Lights', subtitle: 'Top rooftop spots', image: 'https://picsum.photos/seed/city/1280/720' },
            { id: 3, title: 'Ocean Calm', subtitle: 'Best beaches this season', image: 'https://picsum.photos/seed/ocean/1280/720' },
            { id: 4, title: 'Forest Trails', subtitle: 'Hikes under 5 km', image: 'https://picsum.photos/seed/forest/1280/720' },
            { id: 5, title: 'Desert Roads', subtitle: 'Road trip ideas', image: 'https://picsum.photos/seed/desert/1280/720' },
        ]
    return (
        <ThemedView className='flex-1 bg-[#0F0F14]'>
            <SafeAreaView className='flex-1 p-2'>
                <ScrollView>


                    <ThemedView className='relative'>
                        <Image
                            source={{
                                uri: 'https://picsum.photos/seed/mountain/1280/720'
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
                                Avenger's endgame
                            </ThemedText>

                            <ThemedView className='bg-transparent'>
                                <ThemedText className='text-xs text-[#A0A0B0]'>
                                    2024 | 2 hr 34 mins | 8.2
                                </ThemedText>

                                <ThemedText className='text-xs text-[#A0A0B0]'>
                                    Action | UA/16+
                                </ThemedText>
                            </ThemedView>
                        </ThemedView>

                    </ThemedView>
                    <ThemedView className='bg-none flex-row gap-3 m-2'>
                        {
                            cta.map((btn) => {
                                return (
                                    <CustomButton btnText={btn.btnText} className='bg-slate-400 p-2 rounded-lg' textClassName='text-black' onPressCallBack={() => { }} key={btn.id} />
                                )
                            })
                        }

                    </ThemedView>
                    <ThemedView className='p-3 gap-2'>
                        <ThemedText className='text-white text-lg'>Overview</ThemedText>
                        <ThemedText className='text-[#A0A0B0]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, amet harum, praesentium consequuntur illo ipsum in repellendus corrupti neque at tempora id. Quaerat neque consequuntur beatae dolor dolorem iusto et.</ThemedText>
                    </ThemedView>
                    <ThemedView className='p-3 gap-3'>
                        <ThemedText className='text-xl text-[#d9d9e6] mr-4'>
                            Cast
                        </ThemedText>
                        <FlatList
                            data={casts}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <ThemedView className='mr-3 flex items-center gap-1'>
                                    <Image
                                        source={{ uri: item.imageUrl }}
                                        style={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: 40
                                        }}
                                    />
                                    <ThemedText className='w-20'>{item.name}</ThemedText>
                                </ThemedView>
                            )}
                        />
                    </ThemedView>
                    <ThemedView className='p-3 gap-3'>
                        <ThemedText className='text-lg'>More Like this</ThemedText>
                        <FlatList 
                            horizontal
                            data={moreLikeThis}
                            keyExtractor={(item) =>  item.id.toString()}
                            ItemSeparatorComponent={() => <View className='w-4' />}
                            renderItem={({item}) => (
                                <ThemedView className='flex-col'>
                                    <Image 
                                        source={{uri : item.image}}
                                        style = {{
                                            width : 100,
                                            height : 80,
                                            borderRadius : 12
                                        }}
                                    />
                                    <ThemedText className='w-20'>{item.title}</ThemedText>
                                </ThemedView>
                            )}
                            
                        />
                    </ThemedView>
                </ScrollView>
            </SafeAreaView>
        </ThemedView>
    )
}

export default DetailPage