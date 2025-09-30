import { CreatorType } from '@/@types/CreatorType'
import { Heading, Text } from '@/components'
import { FC } from 'react'
import index from '.'
import CreatorCard from '@/components/CreatorCard'

const CreatorContent:FC<{creators:CreatorType[]}> = (creators) => {
	return (
		<section className='py-[80px]'>
			<div className='containers'>
				<div className='flex items-center justify-between mb-[60px]'>
				<div>
           <Heading tag='h2'>Top creators</Heading>
				   <Text>Checkout Top Rated Creators on the NFT Marketplace</Text>
				</div>
				<button icon={<RocketIcon/>} iconPosition="left"> View Rangkings</button>
				</div> 
				<div className='flex justify-between flex-wrap'>
					{creators.map((item, index) => <CreatorCard key={item.id} item={item} index={index}/>)}</div>
       </div>
		</section>
	)
}

export default CreatorContent