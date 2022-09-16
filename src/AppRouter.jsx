import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Works from './pages/Works'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Sidebar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/resume' element={<Resume />} />
				<Route path='/works' element={<Works />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter
