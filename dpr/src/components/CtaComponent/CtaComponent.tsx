import { DetailsPageItem } from '@/Types/page'
import React from 'react'
import { ThemedView } from '../themed-view'
import CustomButton from '../CustomButton/CustomButton'

const CtaComponent = ({ section }: { section: DetailsPageItem }) => {
    return (
        <ThemedView className='bg-none flex-row gap-3 m-2'>
            {
                section && section.cta && section.cta.map((btn) => {
                    return (
                        <CustomButton btnText={btn.btnText} className='bg-slate-400 p-2 rounded-lg' textClassName='text-black' onPressCallBack={() => { }} key={btn.id} />
                    )
                })
            }
        </ThemedView>
    )
}

export default CtaComponent
