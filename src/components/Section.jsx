import React from 'react'

const Section = ({ children, className }) => {
	return (
		<section
			className={`${className} pt-[13.7vh] w-screen font-grotesk overflow-x-hidden md:ml-[20vw]`}
		>
			{children}
		</section>
	)
}

export default Section
