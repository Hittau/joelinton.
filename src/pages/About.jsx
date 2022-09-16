import React from 'react'
import Section from '../components/Section'
import Slider from '../components/Slider'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'

const About = () => {
	return (
		<Section>
			<div className='pl-4'>
				<div className='pr-4'>
					<Title className='pb-4'>
						Simply said, <br /> I love design and code.
					</Title>
					<h2 className='text-custom-orange text-2xl font-bold pb-10'>
						And... I love Japanese food
					</h2>
					<div className='max-w-[490px]'>
						<Subtitle className='pb-6'>
							Based in the beautiful city of Bali, Indonesia. I am currently
							exploring the{' '}
							<span className='text-[color:var(--subtitle-highlighted-text-color)] font-semibold'>
								UI/UX design,
							</span>{' '}
							<span className='text-[color:var(--subtitle-highlighted-text-color)] font-semibold'>
								Tailwind-css
							</span>{' '}
							and{' '}
							<span className='text-[color:var(--subtitle-highlighted-text-color)] font-semibold'>
								NextJS.
							</span>
						</Subtitle>
						<Subtitle className='pb-6'>
							I am either smiling or looking super serious. If it's the latter
							one, I am probably thinking about food.
						</Subtitle>
					</div>
				</div>
				<Slider />
			</div>
		</Section>
	)
}

export default About
