import CustomButton from '@/components/CustomButton/CustomButton'
import CustomLinearGradient from '@/components/CustomLinearGradient/CustomLinearGradient'
import { PageRenderer } from '@/components/page/DetailsPageRenderer/DetailsPageRenderer'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { DetailsPageSection } from '@/Types/page'
import { Image } from 'expo-image'
import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const DetailPage = () => {

        const data : DetailsPageSection[] = [
            {
                id : "1",
                type : "HeroBanner",
                title : "Hero Image",
                data : {
                    heroBanner : "https://picsum.photos/seed/mountain/1280/720",
                    movieTitle : "Avenger's endgame",
                    releaseDate : "2024",
                    duration : "2 hr 50 mins",
                    ratings : "8.2",
                    contentRating : "UA/16+"
                }
            },
            {
                id: "2",
                type: "CTA",
                title: "buttons",
                data: {
                    cta: [{
                        id: "WatchNow",
                        btnText: "Watch Now"
                    },
                    {
                        id: "WatchLater",
                        btnText: "Watch later."
                    }
                    ]
                }
            },
            {
                id : "3",
                title : "overview",
                type : "OverView",
                data : {
                    movieTitle : "Overview",
                    overview : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, amet harum, praesentium consequuntur illo ipsum in repellendus corrupti neque at tempora id. Quaerat neque consequuntur beatae dolor dolorem iusto et."
                }
            },
            {
                id: "4",
                title: "Cast",
                type: "Cast",
                
                data: {
                    movieTitle : "casts",
                    cast: [
                    {
                        id: "11",
                        name: "Robert Downey Jr.",
                        character: "Tony Stark / Iron Man",
                        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Robert_Downey_Jr.jpg"
                    },
                    {
                        id: "12",
                        name: "Chris Evans",
                        character: "Steve Rogers / Captain America",
                        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR644zsglXt1jZJkZHIQ0ovycso_Y13moCr0rAKY2suPNS2Zhsyg6sb2tDzC6XEdeaQ1WXxN4uT_aW9Urwewb-esjyt92sa0qSPuODGNbo2Dg&s=10"
                    },
                    {
                        id: "13",
                        name: "Mark Ruffalo",
                        character: "Bruce Banner / Hulk",
                        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSTC5zMKabVB_V69FazimrWgqgDJNETVUML8NWqQwD0U2rKOBcyTZJcJccvifxB-TaXLY7ygzcAKziXu1OKOjahW0petL3CS20UKa8ks3Dfw&s=10"
                    },
                    {
                        id: "14",
                        name: "Chris Hemsworth",
                        character: "Thor",
                        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Chris_Hemsworth_by_Gage_Skidmore_2.jpg"
                    },
                    {
                        id: "15",
                        name: "Scarlett Johansson",
                        character: "Natasha Romanoff / Black Widow",
                        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Scarlett_Johansson_CaS_2012.jpg"
                    },
                    {
                        id: "16",
                        name: "Jeremy Renner",
                        character: "Clint Barton / Hawkeye",
                        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Jeremy_Renner_2014.jpg"
                    },
                    {
                        id: "17",
                        name: "Don Cheadle",
                        character: "James Rhodes / War Machine",
                        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Don_Cheadle_2016.jpg"
                    },
                    {
                        id: "18",
                        name: "Paul Rudd",
                        character: "Scott Lang / Ant-Man",
                        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Paul_Rudd_2015.jpg"
                    },
                    {
                        id: "19",
                        name: "Brie Larson",
                        character: "Carol Danvers / Captain Marvel",
                        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Brie_Larson_2018.jpg"
                    },
                    {
                        id: "110",
                        name: "Karen Gillan",
                        character: "Nebula",
                        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Karen_Gillan_2018.jpg"
                    },
                    {
                        id: "111",
                        name: "Danai Gurira",
                        character: "Okoye",
                        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Danai_Gurira_2019.png"
                    },
                    {
                        id: "112",
                        name: "Benedict Wong",
                        character: "Wong",
                        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Benedict_Wong_by_Gage_Skidmore.jpg"
                    }
                
                ]
                }
            },
            {
                id : "5",
                type : "MLT",
                title : "More Like This",
                data : {
                    movieTitle : "More Like This",
                    mlt : [
                        { id: "1", title: 'Mountain Escape', subtitle: 'Weekend getaways', imageUrl: 'https://picsum.photos/seed/mountain/1280/720' },
                        { id: "2", title: 'City Lights', subtitle: 'Top rooftop spots', imageUrl: 'https://picsum.photos/seed/city/1280/720' },
                        { id: "3", title: 'Ocean Calm', subtitle: 'Best beaches this season', imageUrl: 'https://picsum.photos/seed/ocean/1280/720' },
                        { id: "4", title: 'Forest Trails', subtitle: 'Hikes under 5 km', imageUrl: 'https://picsum.photos/seed/forest/1280/720' },
                        { id: "5", title: 'Desert Roads', subtitle: 'Road trip ideas', imageUrl: 'https://picsum.photos/seed/desert/1280/720' },
    
                    ]
                }
            }
        ]

    return (
        <ThemedView className='flex-1 bg-[#0F0F14]'>
            <SafeAreaView className='flex-1 p-2'>
                <ScrollView>
                    <PageRenderer sections={data} />
                </ScrollView>
            </SafeAreaView>
        </ThemedView>
    )
}

export default DetailPage