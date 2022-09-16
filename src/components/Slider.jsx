import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import Img1 from '../images/about/img_01.png'
import Img2 from '../images/about/img_02.png'
import Img3 from '../images/about/img_03.png'

const Slider = () => {
	return (
		<Swiper
			spaceBetween={12}
			autoHeight={true}
			slidesPerView={1.2}
			loop={true}
			navigation={true}
			modules={[Navigation]}
			breakpoints={{
				575: {
					slidesPerView: 2.2,
				},
				1280: {
					slidesPerView: 2.6,
				},
				1536: {
					slidesPerView: 3.3,
				},
			}}
		>
			<SwiperSlide className='w-[486px]'>
				<img src={Img1} alt='img1' />
			</SwiperSlide>
			<SwiperSlide className='w-[486px]'>
				<img src={Img2} alt='img1' />
			</SwiperSlide>
			<SwiperSlide className='w-[486px]'>
				<img src={Img3} alt='img1' />
			</SwiperSlide>
			<SwiperSlide className='w-[486px]'>
				<img src={Img1} alt='img1' />
			</SwiperSlide>
		</Swiper>
	)
}

export default Slider
