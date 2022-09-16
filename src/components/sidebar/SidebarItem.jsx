import React from 'react'
import { Link } from 'react-router-dom'

const SidebarItem = ({ label, route, activeItem, onClick }) => {
	return (
		<li>
			<Link
				to={route}
				onClick={onClick}
				className={`${
					activeItem === route ? 'opacity-100' : 'opacity-40'
				} font-medium text-2xl -tracking-wide transition-opacity duration-200 hover:opacity-100`}
			>
				{label}
			</Link>
		</li>
	)
}

export default SidebarItem
