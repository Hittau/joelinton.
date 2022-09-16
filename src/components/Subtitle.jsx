import React from 'react'

const Subtitle = ({ children, className }) => {
	return (
		<p
			className={`${className} font-grotesk text-2xl -tracking-wide text-[color:var(--subtitle-text-color)]`}
		>
			{children}
		</p>
	)
}

export default Subtitle
