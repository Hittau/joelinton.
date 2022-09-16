import React from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

const SidebarToggler = ({ isOpen, setIsOpen }) => {
	return (
		<div
			onClick={() => setIsOpen(!isOpen)}
			className={`${
				isOpen ? '-scale-100' : 'scale-y-100'
			} fixed flex items-center gap-1 top-6 left-3 h-5 z-50 cursor-pointer md:hidden transition-transform duration-300 no-select`}
		>
			<span
				className={`${
					isOpen ? 'scale-0 ' : ''
				} text-custom-orange transition-transform duration-300`}
			>
				Menu
			</span>
			<MdOutlineArrowForwardIos className='text-custom-orange' size={24} />
		</div>
	)
}

export default SidebarToggler
