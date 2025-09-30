import { CollectionType } from '@/@types/CollectionType'
import { CollectionCard, Heading, Text } from '@/components'
import React, { FC } from 'react'
import Collections from '.'

const CollectionContent:FC<{collections:CollectionType[]}> = ({collections}) => {
	return (
		<section className='py-[80px]'>
			<div className='containers'>
				<Heading classList='!text-[22px] !mb-[10px]' tag='h2'>Trending Collection</Heading>
				<Text>Checkout our weekly updated trending collection.</Text>
				{collections.map(item => <CollectionCard key={item.id} item={item}/>)}
			</div>
		</section>
	)
}

export default CollectionContent