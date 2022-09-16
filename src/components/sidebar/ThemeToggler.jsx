import React from 'react'
import { HiOutlineSun } from 'react-icons/hi'
import { useTheme } from '../../hooks/useTheme'

const ThemeToggler = ({ setIsOpen }) => {
	const { theme, setTheme } = useTheme()

	const handleThemeClick = () => {
		if (theme === 'light') {
			setTheme('dark')
		} else {
			setTheme('light')
		}
		setIsOpen(false)
	}

	return (
		<button
			onClick={handleThemeClick}
			className='flex items-center gap-[10px] no-select'
		>
			<HiOutlineSun size={24} />
			<span className='font-medium text-lg whitespace-nowrap'>
				Switch {theme === 'light' ? 'dark' : 'light'}
			</span>
		</button>
	)
}

export default ThemeToggler
