import React, { useEffect, useState } from 'react'
import SidebarItem from './SidebarItem'

const navItems = [
	{
		label: 'home',
		route: '/',
	},
	{
		label: 'about',
		route: '/about',
	},
	{
		label: 'works',
		route: '/works',
	},
	{
		label: 'resume',
		route: '/resume',
	},
	{
		label: 'contact',
		route: '/contact',
	},
]

const SidebarItems = ({ isOpen, setIsOpen }) => {
	const [activeItem, setActiveItem] = useState(window.location.pathname)

	useEffect(() => {
		setActiveItem(window.location.pathname)
	}, [activeItem])

	const handleSidebarItemClick = route => {
		setActiveItem(route)
		setIsOpen(false)
	}

	return (
		<ul className='flex flex-col gap-6 pt-[7.4vh]'>
			{navItems.map(({ label, route }) => (
				<SidebarItem
					key={route}
					onClick={() => handleSidebarItemClick(route)}
					label={label}
					route={route}
					activeItem={activeItem}
				/>
			))}
		</ul>
	)
}

export default SidebarItems
