import React from 'react'

const Title = ({ children, className }) => (
	<h1
		className={`${className} font-archivo font-black text-5xl -tracking-wide leading-[3.5rem]`}
	>
		{children}
	</h1>
)

export default Title
