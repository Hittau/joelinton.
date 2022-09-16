import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SidebarItems from './SidebarItems'
import SidebarToggler from './SidebarToggler'
import ThemeToggler from './ThemeToggler'

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleLogoClick = e => {
		if (isOpen) {
			e.preventDefault()
			setIsOpen(!isOpen)
		}
	}

	return (
		<>
			<aside
				className={`${
					isOpen ? 'left-0' : '-left-full md:left-0'
				} fixed flex flex-col gap-8 h-screen w-2/3 sm:w-1/2 md:w-[20vw] p-6 pt-[14px] font-archivo overflow-y-auto scrollbar-none theme-color z-40 shadow-2xl md:shadow-none transition-[left] duration-300`}
			>
				<div className='flex-auto'>
					<Link
						to='/'
						onClick={handleLogoClick}
						className={`${
							isOpen
								? 'left-10 text-base md:text-2xl font-normal md:font-bold text-custom-orange md:theme-color'
								: 'left-1/2 -translate-x-1/2 text-[32px] md:text-2xl font-bold'
						} fixed md:static top-[26px] leading-4 -tracking-wide transition-all duration-300 no-select`}
					>
						joelinton.
					</Link>
					<SidebarItems isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>
				<ThemeToggler setIsOpen={setIsOpen} />
			</aside>
			<div className='w-full bg-[color:var(--bg-color)] fixed top-0 left-0 h-20 z-10'></div>
			<SidebarToggler isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	)
}

export default Sidebar
